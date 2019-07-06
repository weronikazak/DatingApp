using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class FixTypos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastActiove",
                table: "Users",
                newName: "LastActive");

            migrationBuilder.RenameColumn(
                name: "Genger",
                table: "Users",
                newName: "Gender");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastActive",
                table: "Users",
                newName: "LastActiove");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Users",
                newName: "Genger");
        }
    }
}
