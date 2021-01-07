using CampanhaKg.Domain._visual;
using CampanhaKg.Domain.Identity;
using CampanhaKg.Domain.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CampanhaKg.Repository.Data
{
    public class CampaignContext : IdentityDbContext<User, Role, int,
                                                     IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
                                                     IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public CampaignContext(DbContextOptions<CampaignContext> options) : base(options) { }
        public DbSet<Fraternity> Fraternities { get; set; }
        public DbSet<Voluntary> Volunteers { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Image> Images { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

            builder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

                userRole.HasOne(ur => ur.User)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();


            });


            builder.Entity<Fraternity>()
            .HasMany<Campaign>()
            .WithOne(c => c.Fraternity)
            .HasForeignKey(f => f.FraternityId);
        }
    }
}
