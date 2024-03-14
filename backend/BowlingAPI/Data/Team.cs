using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BowlingAPI.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        [MaxLength(50)]
        public string TeamName { get; set; }
        public int? CaptainID { get; set; }
    }
}
