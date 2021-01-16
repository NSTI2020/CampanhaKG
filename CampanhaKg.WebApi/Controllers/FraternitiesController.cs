using CampanhaKg.Domain.Identity;
using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class FraternitiesController : ControllerBase
    {
        public readonly ICampRepository _repo;
        public readonly UserManager<User> _contextUsers;
        public FraternitiesController(ICampRepository repo, UserManager<User> contextUsers)
        {
            _repo = repo;
            _contextUsers = contextUsers;
        }
        [HttpGet]
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

        [HttpPost]
        public async Task<IActionResult> Post(Fraternity model)
        {
            try
            {
                _repo.Add(model);
                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/api/fraternities/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou!");
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var users = _contextUsers.Users;
                User user = await users.FirstOrDefaultAsync(u => u.Id == id);
                return Ok(user);
            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"A base de dados falou ou usuário não existe! erro: {ex.Message}");
            }

        }





    }
}
