using System.Threading.Tasks;
using CampanhaKg.Domain.models;

namespace CampanhaKg.Repository
{
    public interface ICampRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void Delete<T>(T[] entity) where T : class;
        Task<bool> SaveChangesAsync();


    }
}
