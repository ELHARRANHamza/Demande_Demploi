using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Demmande_Emploi.Migrations
{
    public partial class My : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Posters",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "num_Tile",
                table: "Posters",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "datePub",
                table: "Annonces",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "Posters");

            migrationBuilder.DropColumn(
                name: "num_Tile",
                table: "Posters");

            migrationBuilder.DropColumn(
                name: "datePub",
                table: "Annonces");
        }
    }
}
