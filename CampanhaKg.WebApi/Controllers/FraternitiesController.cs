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

        ///Get id user for creating fraternity
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var users = _contextUsers.Users;
                User user = await users.SingleAsync(u => u.Id == id);
                return Ok(user);
            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"A base de dados falhou ou usuário não existe! erro: {ex.Message}");
            }

        }

        //Return true or false if user already register fraternity return true.
        [HttpGet("{usrid}/Registred")]
        [AllowAnonymous]
        public async Task<IActionResult> UsrHas(int usrid)
        {
            try
            {
                Fraternity[] fraternities = await _repo.GetAllFraternityAsync();

                var result = fraternities.Single(u => u.UserId == usrid);

                if (result != null)
                {
                    return Ok(true);

                }

                return Ok(false);

            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"A base de dados falhou ou usuário não existe! erro: {ex.Message}");
            }

        }
    }
}
