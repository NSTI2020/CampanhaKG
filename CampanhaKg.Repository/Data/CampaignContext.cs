using CampanhaKg.Domain._visual;
using CampanhaKg.Domain.models;
using Microsoft.EntityFrameworkCore;

namespace CampanhaKg.Repository.Data
{
    public class CampaignContext : DbContext
    {
        public CampaignContext(DbContextOptions<CampaignContext> options) : base(options) { }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<Fraternity> Fraternities { get; set; }
        public DbSet<Voluntary> Volunteers { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Image> Images { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Fraternity>()
            .HasMany<Campaign>()
            .WithOne(c => c.Fraternity)
            .HasForeignKey(f => f.FraternityId);
        }
    }
}
