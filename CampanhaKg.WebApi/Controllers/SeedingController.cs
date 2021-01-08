using System.Threading.Tasks;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SeedingController : ControllerBase
    {
        public SeedingService _seeding { get; set; }

        public SeedingController(SeedingService seeding)
        {
            _seeding = seeding;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult get()
        {
            string[] msgs = new string[] { "DataBase was seeded!", "Seed DataBase fail" };

            if (_seeding.Seed())
            {
                return Ok(msgs[0]);
            }
            else
            {

                return Ok(msgs[1]);
            }
        }
    }
}
