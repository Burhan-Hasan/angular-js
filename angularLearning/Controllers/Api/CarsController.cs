using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using angularLearning.Entities;

namespace angularLearning.Controllers
{
    [Produces("application/json")]
    [Route("api/Cars")]
    public class CarsController : Controller
    {
        public JsonResult Get()
        {
            return Json(new List<Car>()
            {
                new Car(0,"BMW","M3",2000),
                new Car(1,"Mercedes","E-500",1996)
            });
        }
    }
}