using System.Collections.Generic;
using CampanhaKg.Repository;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Mvc;


using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using CampanhaKg.Domain.models;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VolsController : ControllerBase
    {
        private readonly CampaignContext _context;


        public SeedingService _seeding { get; set; }
        public VolsController(SeedingService seeding)
        { _seeding = seeding; }




        [HttpGet]
        public ActionResult<IEnumerable<string>> get()
        {
            return new string[] { "sssss", "aaaaaaaa" };
        }

        [HttpGet("{seed}")]
        public ActionResult<IEnumerable<string>> get(string seed)
        {
            if (seed.ToLower().Contains("ok"))
            {
                _seeding.Seed();
            }
            return new string[] { "Seeded", "Seeded" };

        }

    }

}
