namespace CampanhaKg.Domain.models
{
    public abstract class Address
    {

        public string Rua { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string UF { get; set; }
        public string ZipCode { get; set; }
    }
}
