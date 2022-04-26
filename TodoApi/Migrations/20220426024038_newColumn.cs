using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TodoApi.Migrations
{
    public partial class newColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AMustDo",
                table: "TodoItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Deadline",
                table: "TodoItems",
                type: "datetime(6)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddColumn<decimal>(
                name: "Reward",
                table: "TodoItems",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reward",
                table: "TodoItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Deadline",
                table: "TodoItems",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AMustDo",
                table: "TodoItems",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }
    }
}
