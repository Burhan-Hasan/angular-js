using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using angularLearning.Entities;
using Microsoft.Extensions.Caching.Memory;
using System.Linq;

namespace angularLearning.Controllers
{
    [Produces("application/json")]
    [Route("api/Cars")]
    public class CarsController : Controller
    {
        public CarsController(IMemoryCache memoryCache)
        {
            MemoryCache = memoryCache;
        }

        public IMemoryCache MemoryCache { get; }

        [HttpGet]
        public JsonResult Get(int? id)
        {
            if (id == null)
                return Json(MemoryCache.Get("Cars") as List<Car>);
            else
                return Json((MemoryCache.Get("Cars") as List<Car>)?.FirstOrDefault(x => x.Id == id));
        }

        [HttpPost]
        public JsonResult Post([FromBody]Car car)
        {
            var _cars = MemoryCache.Get("Cars") as List<Car> ?? new List<Car>();
            var _car = _cars.FirstOrDefault(x => x.Id == car.Id);
            if (_car != null)
                _cars.Remove(_car);

            _cars.Add(car);
            MemoryCache.Set("Cars", _cars);
            return Json(car);
        }

        [HttpGet]
        [Route("/api/cars/getid")]
        public int GetId()
        {
            var _cars = MemoryCache.Get("Cars") as List<Car>;
            int maxId = _cars == null ? 0 : _cars.Max(x => x.Id);
            return ++maxId;
        }
    }
}