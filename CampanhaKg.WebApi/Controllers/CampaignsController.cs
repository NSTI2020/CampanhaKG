using System.Linq;
using System.Threading.Tasks;
using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampaignsController : ControllerBase
    {
        public readonly ICampRepository _repo;
        public CampaignsController(ICampRepository repo)
        {
            _repo = repo;

        }


        public async Task<IActionResult> Get()
        {
            try
            {
                Campaign[] CampaignsResult = await _repo.GetAllCampaignAsync();

                if (CampaignsResult != null)
                {
                    return Ok(CampaignsResult);
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
