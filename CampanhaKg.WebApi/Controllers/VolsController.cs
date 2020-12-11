using System.Collections.Generic;
using CampanhaKg.Repository;
using CampanhaKg.Domain._visual;
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
        public VolsController(ICampRepository repo)
        {

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

        [HttpGet("GetImg/{img}")]
        public async Task<IActionResult> get(int img)
        {
            try
            {
                Image[] figures = await _repo.GetAllImagens();

                if (figures != null)
                {
                    return Ok(figures);
                }
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou!");
            }
            return BadRequest();

        }







    }

}
