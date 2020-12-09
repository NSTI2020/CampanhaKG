using System.Threading.Tasks;
using CampanhaKg.Domain.models;

namespace CampanhaKg.Repository.Data
{
    public interface ICampRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entity) where T : class;
        Task<bool> SaveChangesAsync();


        //Volunteers
        Task<Voluntary[]> GetAllVolunteersAsync();
        Task<Voluntary> GetAllVolunteersByIdAsync(int id);


        //Fraternity
        Task<Fraternity[]> GetAllFraternityAsync();
        Task<Fraternity> GetAllFraternityByIdAsync(int id);


        //Campaign
        Task<Campaign[]> GetAllCampaignAsync();
        Task<Campaign> GetAllCampaignByIdAsync(int id);
        Task<Campaign> GetAllCampaignByBairroAsync(string neighborhood);
    }
}
