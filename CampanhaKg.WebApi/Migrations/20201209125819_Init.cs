using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CampanhaKg.WebApi.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Rua = table.Column<string>(nullable: true),
                    Numero = table.Column<string>(nullable: true),
                    Complemento = table.Column<string>(nullable: true),
                    Bairro = table.Column<string>(nullable: true),
                    Cidade = table.Column<string>(nullable: true),
                    UF = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Volunteers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Contato = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Volunteers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fraternities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    VoluntaryId = table.Column<int>(nullable: true),
                    AddressId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fraternities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fraternities_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Fraternities_Volunteers_VoluntaryId",
                        column: x => x.VoluntaryId,
                        principalTable: "Volunteers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Campaigns",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    FraternityId = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Region = table.Column<string>(nullable: true),
                    Neighborhood = table.Column<string>(nullable: true),
                    Street01 = table.Column<string>(nullable: true),
                    Street02 = table.Column<string>(nullable: true),
                    Street03 = table.Column<string>(nullable: true),
                    Street04 = table.Column<string>(nullable: true),
                    Street05 = table.Column<string>(nullable: true),
                    Street06 = table.Column<string>(nullable: true),
                    Street07 = table.Column<string>(nullable: true),
                    Street08 = table.Column<string>(nullable: true),
                    Street09 = table.Column<string>(nullable: true),
                    Street010 = table.Column<string>(nullable: true),
                    Street011 = table.Column<string>(nullable: true),
                    Street012 = table.Column<string>(nullable: true),
                    Street013 = table.Column<string>(nullable: true),
                    Street014 = table.Column<string>(nullable: true),
                    Street015 = table.Column<string>(nullable: true),
                    FraternityId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campaigns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Campaigns_Fraternities_FraternityId",
                        column: x => x.FraternityId,
                        principalTable: "Fraternities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Campaigns_Fraternities_FraternityId1",
                        column: x => x.FraternityId1,
                        principalTable: "Fraternities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_FraternityId",
                table: "Campaigns",
                column: "FraternityId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_FraternityId1",
                table: "Campaigns",
                column: "FraternityId1");

            migrationBuilder.CreateIndex(
                name: "IX_Fraternities_AddressId",
                table: "Fraternities",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Fraternities_VoluntaryId",
                table: "Fraternities",
                column: "VoluntaryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Campaigns");

            migrationBuilder.DropTable(
                name: "Fraternities");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Volunteers");
        }
    }
}
