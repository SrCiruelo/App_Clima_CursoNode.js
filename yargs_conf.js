const argv = require("yargs")
.options({
    direccion:{
        demand: true,
        alias: "d",
        desc: "Dirección de la ciudad de la que quiere saber el tiempo"
    }
})
.help()
.argv;

module.exports = {
    argv
}