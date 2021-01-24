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
            User u1 = new User
            {
                Id = 1,
                UserName = "Marcinho",
                FullName = "Marcio de Moura Silva.",
                Email = "marcio@a",
                PhoneNumber = "3158778968",
                PasswordHash = "12345"
            };

            User u2 = new User
            {
                Id = 2,
                UserName = "Jcarlos",
                FullName = "Jose Carlos",
                Email = "jose@a",
                PhoneNumber = "3154748992",
                PasswordHash = "12345"
            };

            User u3 = new User
            {
                Id = 3,
                UserName = "AnaM",
                FullName = "Ana Maria luz",
                Email = "anam@anam",
                PhoneNumber = "31988598730",
                PasswordHash = "12345"
            };

            Fraternity f1 = new Fraternity
            {
                Id = 1,
                Name = "Irmã Alcione",
                Rua = "Rua Fernão Dias",
                Numero = "2151",
                // user = usr,
                Complemento = "fggffgdgfdfg",
                Bairro = "Alto Vera Cruz",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "30285100",
                UserId = 1

            };

            Fraternity f2 = new Fraternity
            {
                Id = 2,
                Name = "Gevan",
                Rua = "Centralina",
                Numero = "211",
                // user = usr,
                Complemento = "fggffgdgfdfg",
                Bairro = "Santa Inês",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "30587100",
                UserId = 2

            };

            Fraternity f3 = new Fraternity
            {
                Id = 3,
                Name = "Flavio do santos",
                Rua = "Marques de barbacena",
                Numero = "2261",
                // user = usr,
                Complemento = "fggffgdgfdfg",
                Bairro = "Saudade",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "70381100",
                UserId = 3

            };
            Campaign c1 = new Campaign()
            {
                Id = 1,
                Fraternity = f1,
                Region = "Centro Sul BH",
                Neighborhood = "Coração de Jesus",
                Street01 = "Comiteco",
                Street02 = "Alameda",
                Street03 = "Soares",
                Street04 = "Volta redonda",
                Street05 = "Navegantes"
            };

            Campaign c2 = new Campaign()
            {
                Id = 2,
                Fraternity = f2,
                Region = "Leste",
                Neighborhood = "Boa vista",
                Street01 = "AAAAAAAAAAA",
                Street02 = "BBBBBBBBB",
                Street03 = "CCCCCCCCCC",
                Street04 = "DDDDDDDDDD",
                Street05 = "eeeeeeeeee"
            };

            Campaign c3 = new Campaign()
            {
                Id = 3,
                Fraternity = f3,
                Region = "Norte",
                Neighborhood = "Rancho fundo",
                Street01 = "AAAAAAAAAAA",
                Street02 = "BBBBBBBBB",
                Street03 = "CCCCCCCCCC",
                Street04 = "DDDDDDDDDD",
                Street05 = "eeeeeeeeee"
            };

            _context.Add(u1);
            _context.Add(u2);
            _context.Add(u3);
            _context.Add(c1);
            _context.Add(c2);
            _context.Add(c3);




            if (_context.Users.Any() && _context.Fraternities.Any())
            {
                return false;
            }


            return _context.SaveChanges() > 0;
        }
    }
}
