using System.Linq;
using System.Threading.Tasks;
using CampanhaKg.Domain.models;
using CampanhaKg.Repository.Data;
using Microsoft.EntityFrameworkCore;

namespace CampanhaKg.Repository
{
    public class CampRepository : ICampRepository
    {
        private readonly CampaignContext _context;
        public CampRepository(CampaignContext context)
        {
            _context = context;
        }


        //GERAL
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public void DeleteRange<T>(T[] entity) where T : class
        {
            _context.RemoveRange(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }


        //CAMPAIGN
        public async Task<Campaign[]> GetAllCampaignAsync()
        {
            IQueryable<Campaign> query = _context.Campaigns
            .Include(f => f.Fraternity);

            query = query.AsNoTracking()
            .OrderBy(o => o.Neighborhood);

            return await query.ToArrayAsync();
        }


        public Task<Campaign> GetAllCampaignByBairroAsync(string neighborhood)
        {
            throw new System.NotImplementedException();
        }
        public Task<Campaign> GetAllCampaignByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }


        //FRATERNITY
        public async Task<Fraternity[]> GetAllFraternityAsync()
        {
            IQueryable<Fraternity> query = _context.Fraternities
            .Include(v => v.Voluntary)
            .Include(a => a.Address)
            .Include(cc => cc.Campaigns);

            query = query.AsNoTracking()
            .OrderBy(n => n.Name);

            return await query.ToArrayAsync();
        }
        public Task<Fraternity> GetAllFraternityByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }


        //VOLUNTEERS
        public async Task<Voluntary[]> GetAllVolunteersAsync()
        {
            IQueryable<Voluntary> query = _context.Volunteers
            .AsNoTracking()
            .OrderBy(ord => ord.Email);

            return await query.ToArrayAsync();
        }
        public Task<Voluntary> GetAllVolunteersByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }


    }
}
