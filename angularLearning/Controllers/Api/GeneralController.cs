using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angularLearning.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/General")]
    public class GeneralController : Controller
    {
        [HttpGet]
        public JsonResult Get(string a, string b)
        {
            return Json(new { a = a, b = b });
        }

        [HttpPost]
        public JsonResult Test()
        {
            return Json(null);
        }
    }
}