namespace CampanhaKg.Domain.models
{
    public class Address
    {
        public string Rua { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string UF { get; set; }
        public string ZipCode { get; set; }
        public Address(string rua, string complemento, string bairro, string cidade, string uF, string zipCode)
        {
            Rua = rua;
            Complemento = complemento;
            Bairro = bairro;
            Cidade = cidade;
            UF = uF;
            ZipCode = zipCode;
        }
    }
}
