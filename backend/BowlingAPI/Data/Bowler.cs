using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BowlingAPI.Data
{
    public class Bowler
    {
        [Key]
        public int BowlerID { get; set; }
        [MaxLength(50)]
        public string? BowlerLastName { get; set; }
        [MaxLength(50)]
        public string? BowlerFirstName { get; set; }
        [MaxLength(1)]
        public string? BowlerMiddleInit { get; set; }
        [MaxLength(50)]
        public string? BowlerAddress { get; set; }
        [MaxLength(2)]
        public string? BowlerState { get; set; }
        [MaxLength(10)]
        public string? BowlerZip { get; set; }
        [MaxLength(14)]
        public string? BowlerPhoneNumber { get; set; }
        [ForeignKey("Team")]
        public int TeamID { get; set; }
        public Team Team { get; set; }
    }
}
