using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampaignsController : ControllerBase
    {
        private readonly ICampRepository _repo;

        public CampaignsController(ICampRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{fraternityId}")]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int fraternityId)
        {
            try
            {
                Campaign[] result = await _repo.GetAllCampaignAsync();

                if (result != null)
                {
                    IEnumerable resultFilteres = result.Where(f => f.FraternityId == fraternityId);
                    return Ok(resultFilteres);
                }
            }
            catch (System.Exception ex)
            {
                StatusCode(StatusCodes.Status500InternalServerError, $"Erro: {ex.Message}");
            }
            return BadRequest();
        }

    }
}
