using System.Collections.Generic;

namespace CampanhaKg.Domain.models
{
    public class Fraternity : Address
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public virtual List<Campaign> Locations { get; set; }

        public virtual Voluntary Voluntary { get; set; }
        public int VoluntaryId { get; set; }

        public Fraternity(string rua, string complemento, string bairro, string cidade,
                    string uF, string zipCode, int id, string name,
                    Voluntary voluntary) : base(rua, complemento, bairro, cidade, uF, zipCode)
        {
            Rua = rua;
            Complemento = complemento;
            Bairro = bairro;
            Cidade = cidade;
            UF = uF;
            ZipCode = zipCode;
            Id = id;
            Name = name;
            Voluntary = voluntary;
        }
    }
}
