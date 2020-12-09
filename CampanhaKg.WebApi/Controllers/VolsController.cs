using CampanhaKg.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CampanhaKg.WebApi.Controllers
{
    [ApiController]
    [Route("controller")]
    public class VolsController
    {

        public readonly ICampRepository _repo;

        public VolsController(ICampRepository repo)
        {
            _repo = repo;
        }






    }



}
