/* 
Pinotage.js

Copyright (C) <2012> <kaique.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Pinotage = (function ( window, document ) {
    var _ = function () {};
    var __canvas__ = false;
    var __context__ = false;

    _.prototype = {
        window: window,
        document: document,
        self: this,
    };

    // Stage its a representation of canvas
    _.prototype.stage = {};
    _.prototype.stage.create = function ( settings ) {
        // Get root of _ internal
        var self = this,
            output = {};

        if ( settings ) {
            if ( !__canvas__ && !__context__ ) {
                __canvas__ = self['canvas'] = settings['canvas'];

                if ( __canvas__ !== null ) {
                    __context__ = self['context'] = __canvas__.getContext('2d');    

                    output = self;
                }
            }
        }

        return output;
    };

    return new ( _ );
} ( window, document ));
