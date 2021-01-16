using System.Linq;
using CampanhaKg.Domain._visual;
using CampanhaKg.Domain.Identity;
using CampanhaKg.Domain.models;

namespace CampanhaKg.Repository.Data
{
    public class SeedingService
    {
        private readonly CampaignContext _context;

        public SeedingService(CampaignContext context)
        {
            _context = context;
        }

        public SeedingService()
        {
        }
        public bool Seed()
        {
            User usr = new User
            {
                UserName = "AnaM",
                FullName = "Ana Maria Dias",
                Email = "anam@anam",
                PhoneNumber = "31988598730",
                PasswordHash = "12345"


            };



            Fraternity fraternity1 = new Fraternity
            {
                Id = 20,
                Name = "Irmã Alcione",
                Rua = "Rua Fernão Dias",
                Numero = "2151",
                // user = usr,
                Complemento = "fggffgdgfdfg",
                Bairro = "Alto Vera Cruz",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "30285100",
                UserId = 3

            };

            Campaign campaign5 = new Campaign()
            {
                Id = 5,
                Fraternity = fraternity1,
                Region = "Centro Sul BH",
                Neighborhood = "Coração de Jesus",
                Street01 = "Comiteco",
                Street02 = "Alameda",
                Street03 = "Soares",
                Street04 = "Volta redonda",
                Street05 = "Navegantes"
            };


            _context.Add(campaign5);

            if (_context.Users.Any() && _context.Fraternities.Any())
            {
                return false;
            }


            return _context.SaveChanges() > 0;
        }
    }
}
