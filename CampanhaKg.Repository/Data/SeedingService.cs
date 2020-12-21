using System.Linq;
using CampanhaKg.Domain._visual;
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
            Voluntary voluntary1 = new Voluntary
            {
                Id = 1,
                Name = "Marcus Vinícius Dias",
                Email = "marcusmvd@yahoo.com.br",
                Contato = "(31)9-98859-8734",

            };
            Voluntary voluntary2 = new Voluntary
            {
                Id = 2,
                Name = "Maria Aparecida Gonçalves",
                Email = "maria@terra.com.br",
                Contato = "(31)9-9999-9999",
            };
            Voluntary voluntary3 = new Voluntary
            {
                Id = 3,
                Name = "Rafaela Abreu Morais",
                Email = "rafaela@outlook.com.br",
                Contato = "(31)9-99999-9999",
            };
            Voluntary voluntary4 = new Voluntary
            {
                Id = 4,
                Name = "Alair Matias Ferreira",
                Email = "alair@gmail.com.br",
                Contato = "(31)9-99999-9999",

            };
            Voluntary voluntary5 = new Voluntary
            {
                Id = 5,
                Name = "Marcio Antonio Silva",
                Email = "marcio@yahoo.com.br",
                Contato = "(31)9-99999-9999",

            };

            Fraternity fraternity1 = new Fraternity
            {
                Id = 1,
                Name = "Irmã Alcione",
                Voluntary = voluntary5,
                Rua = "Rua Fernão Dias",
                Numero = "2151",
                Complemento = "",
                Bairro = "Alto Vera Cruz",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "30285100",

            };
            Fraternity fraternity2 = new Fraternity
            {
                Id = 2,
                Name = "Caminhos para jesus",
                Voluntary = voluntary3,
                Rua = "Joao gomes",
                Numero = "211",
                Complemento = "",
                Bairro = "Horto",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "22222100",
            };
            Fraternity fraternity3 = new Fraternity
            {
                Id = 3,
                Name = "Olhos de luz",
                Voluntary = voluntary4,
                Rua = "Charles Bizzet",
                Numero = "1250",
                Complemento = "",
                Bairro = "Rosário II",
                Cidade = "Sabará",
                UF = "Minas Gerais",
                ZipCode = "34565220",
            };
            Fraternity fraternity4 = new Fraternity
            {
                Id = 4,
                Name = "Gevan",
                Voluntary = voluntary1,
                Rua = "Centralina",
                Numero = "1064",
                Complemento = "",
                Bairro = "Santa Inês",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "31080140",
            };
            Fraternity fraternity5 = new Fraternity
            {
                Id = 5,
                Name = "Bezerra de Meneses",
                Voluntary = voluntary2,
                Rua = "Maria Felipe de Araújo",
                Numero = "75",
                Complemento = "",
                Bairro = "Paraiso",
                Cidade = "Belo Horizonte",
                UF = "Minas Gerais",
                ZipCode = "30270470",
            };

            Campaign campaign1 = new Campaign()
            {
                Id = 1,
                Fraternity = fraternity2,
                Region = "Leste BH",
                Neighborhood = "Boa Vista",
                Street01 = "Caldas",
                Street02 = "Teofilo Pires",
                Street03 = "Otavio barreto",
                Street04 = "Dos Afonsos",
                Street05 = "Calma"
            };
            Campaign campaign2 = new Campaign()
            {
                Id = 2,
                Fraternity = fraternity5,
                Region = "Oeste BH",
                Neighborhood = "Jardim canada",
                Street01 = "Frivola",
                Street02 = "general cardoso",
                Street03 = "sales",
                Street04 = "sao gonçalo",
                Street05 = "vitoria"
            };
            Campaign campaign3 = new Campaign()
            {
                Id = 3,
                Fraternity = fraternity4,
                Region = "Leste BH",
                Neighborhood = "Pompéia",
                Street01 = "Boninas",
                Street02 = "Pacifico Faria",
                Street03 = "Rocha Pita",
                Street04 = "Amazonita",
                Street05 = "Casa Branca"
            };
            Campaign campaign4 = new Campaign()
            {
                Id = 4,
                Fraternity = fraternity3,
                Region = "Norte",
                Neighborhood = "Aarão Reis",
                Street01 = "Aviadores",
                Street02 = "Formoso",
                Street03 = "Cap. Eduardo",
                Street04 = "Tenete Brito",
                Street05 = "Jardim"
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

            Image img = new Image()
            {
                VoluntaryIcon = "volicon.png",
                FraternityIcon = "fraticon.png",
                CampaignIcon = "campicon.png",
                AddresssIcon = "addressicon.png"
            };


            _context.Add(img);
            _context.Add(voluntary1);
            _context.Add(voluntary2);
            _context.Add(voluntary3);
            _context.Add(voluntary4);
            _context.Add(voluntary5);
            _context.Add(campaign1);
            _context.Add(campaign2);
            _context.Add(campaign3);
            _context.Add(campaign4);
            _context.Add(campaign5);

            if (_context.Volunteers.Any() && _context.Fraternities.Any())
            {
                return false;
            }


            return _context.SaveChanges() > 0;
        }
    }
}
