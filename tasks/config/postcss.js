module.exports = function(grunt) {
  grunt.config.set('postcss', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['import-tailwind.css'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }],
      options: {
        preprocess: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      }
    }
  });
};
