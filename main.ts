import { Command } from "jsr:@cliffy/command@1.0.0-rc.5";

if (import.meta.main) {
  await new Command()
    .name("do")
    .version("0.0.1")
    .description("Run deno scripts with ease")
    .parse(Deno.args.length ? Deno.args : ["--help"]);
}
