namespace CampanhaKg.Domain.models
{
    public class Voluntary
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Contato { get; set; }
        public Voluntary()
        {

        }
        public Voluntary(int id, string name, string email, string contato)
        {
            Id = id;
            Name = name;
            Email = email;
            Contato = contato;

        }
    }
}
