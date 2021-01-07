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
using Microsoft.AspNetCore.Authorization;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
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

        [HttpPost]
        public async Task<IActionResult> Post(Voluntary model)
        {
            try
            {
                _repo.Add(model);
                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/api/vols/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou!");
            }
            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Voluntary model)
        {
            try
            {
                Voluntary vol = await _repo.GetVolunteersByIdAsync(id);
                if (vol == null) return NotFound();
                _repo.Update(model);
                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/api/vols/{id}", model);
                }

            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou.");
            }
            return NotFound();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                Voluntary vol = await _repo.GetVolunteersByIdAsync(id);
                if (vol == null) return NotFound();
                _repo.Delete(vol);

                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/api/vols/{id}", vol);
                }



            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou.");
            }

            return NotFound();
        }






    }
}
