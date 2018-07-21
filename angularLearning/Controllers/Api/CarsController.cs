using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using angularLearning.Entities;
using Microsoft.Extensions.Caching.Memory;

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
        public JsonResult Get()
        {
            var _cars = MemoryCache.Get("Cars") as List<Car>;

            return Json(_cars);
        }

        [HttpPost]
        public JsonResult Post([FromBody]Car car)
        {
            var _cars = MemoryCache.Get("Cars") as List<Car> ?? new List<Car>();
            _cars.Add(car);
            MemoryCache.Set("Cars", _cars);
            return Json(car);
        }
    }
}