using System.Collections.Generic;
using CampanhaKg.Repository;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Mvc;


using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using CampanhaKg.Domain.models;
using Microsoft.AspNetCore.Http;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VolsController : ControllerBase
    {
        private readonly ICampRepository _repo;
        public SeedingService _seeding { get; set; }


        public VolsController(SeedingService seeding, ICampRepository repo)
        {
            _seeding = seeding;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> get()
        {
            try
            {
                Voluntary[] VolunteersResult = await _repo.GetAllVolunteersAsync();

                if (VolunteersResult != null)
                {
                    return Ok(VolunteersResult);
                }
            }
            catch (SystemException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "O banco de dados falhou");
            }
            return BadRequest();
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
