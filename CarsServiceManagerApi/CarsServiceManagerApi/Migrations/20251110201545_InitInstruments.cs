using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarsServiceManagerApi.Migrations
{
    /// <inheritdoc />
    public partial class InitInstruments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Instruments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InUsage = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Instruments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EventsAssignment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    InstrumentId = table.Column<int>(type: "int", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssignedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventsAssignment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EventsAssignment_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EventsAssignment_Events_EventId",
                        column: x => x.EventId,
                        principalTable: "Events",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EventsAssignment_Instruments_InstrumentId",
                        column: x => x.InstrumentId,
                        principalTable: "Instruments",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventsAssignment_EventId",
                table: "EventsAssignment",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_EventsAssignment_InstrumentId",
                table: "EventsAssignment",
                column: "InstrumentId");

            migrationBuilder.CreateIndex(
                name: "IX_EventsAssignment_UserId",
                table: "EventsAssignment",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventsAssignment");

            migrationBuilder.DropTable(
                name: "Instruments");
        }
    }
}
