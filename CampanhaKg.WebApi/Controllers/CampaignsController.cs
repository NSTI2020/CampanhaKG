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
    [AllowAnonymous]
    public class CampaignsController : ControllerBase
    {
        public readonly ICampRepository _repo;
        public CampaignsController(ICampRepository repo)
        {
            _repo = repo;

        }


        [HttpGet]
        [AllowAnonymous]
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
        [HttpPost]
        public async Task<IActionResult> Post(Campaign model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/api/campaigns/{model.Id}", model);
                }
            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"A base de dados falhou! {ex.Message}");
            }
            return BadRequest();
        }




    }
}
