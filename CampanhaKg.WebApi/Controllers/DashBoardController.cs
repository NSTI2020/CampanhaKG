using System.Threading.Tasks;
using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class DashBoardController : ControllerBase
    {
        private readonly ICampRepository _repo;
        public DashBoardController(ICampRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            try
            {
                Campaign[] result = await _repo.GetAllCampaignAsync();
                if (result != null)
                {
                    return Ok(result);
                }

            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro: {ex.Message}");
            }

            return BadRequest();

        }







    }
}
