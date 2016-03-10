var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    writing: function(){
        this.fs.copyTpl(
          this.templatePath('./**/*'),
          this.destinationPath('./'),
          this  
        );
    },
    install: function(){
        this.npmInstall([], {});
    } 
});