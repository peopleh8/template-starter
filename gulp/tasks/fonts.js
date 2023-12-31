import fs from 'fs'; // Модуль NodeJS, для роботи з файловою системою
import fonter from 'gulp-fonter'; // Конвертація шрифтів з otf в ttf
import ttf2woff2 from 'gulp-ttf2woff2'; // Конвертація шрифтів з ttf в woff2

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontsStyle = () => {
  let fontsFile = `${app.path.srcFolder}/scss/base/fonts.scss`;

  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb);

        let newFileOnly;

        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split('.')[0];

          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName,
                fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName,
                fontStyle = fontFileName.split('-')[2] ? 'italic' : 'normal';
              
            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }

            fs.appendFile(fontsFile, `@font-face {\r\tfont-family: "${fontName}";\r\tfont-display: swap;\r\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\r\tfont-weight: ${fontWeight};\r\tfont-style: ${fontStyle};\r}\r\n`, cb);
            
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log('Файл fonts.scss вже існує. Для генерації нового файлу, видаліть його.');
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);

  function cb() { }
}