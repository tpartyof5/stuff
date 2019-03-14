import { SafePipe } from './safe.pipe';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
describe('SafePipe', () => {
  it('create an instance', () => {
    var sanitizer:DomSanitizer;
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});

