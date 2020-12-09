using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class FraternitiesController : ControllerBase
    {
        public readonly ICampRepository _repo;
        public FraternitiesController(ICampRepository repo)
        {
            _repo = repo;
        }

        public async Task<IActionResult> Get()
        {
            try
            {
                Fraternity[] fraternitiesResult = await _repo.GetAllFraternityAsync();
                if (fraternitiesResult != null)
                {
                    return Ok(fraternitiesResult);
                }
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "O banco de dados falhou");
            }
            return BadRequest();

        }







    }
}
