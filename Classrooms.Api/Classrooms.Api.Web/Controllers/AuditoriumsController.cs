using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    public class AuditoriumsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}