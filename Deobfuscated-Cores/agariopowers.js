;
;
(function (_0x3cb32e, _0x4a4f39) {
    var _0x208abf = function () {
            var _0xef58a5 = true;
            return function (_0x5bd947, _0x15c098) {
                var _0x53e181 = _0xef58a5 ? function () {
                    ;
                    if (_0x15c098) {
                        var _0x4afc30 = _0x15c098.apply(_0x5bd947, arguments);
                        return _0x15c098 = null, _0x4afc30;
                    }
                } : function () {
                };
                return _0xef58a5 = false, _0x53e181;
            };
        }(), _0x7f98ef = _0x208abf(this, function () {
            ;
            return _0x7f98ef.toString().search('(((.+)+)+)+$').toString().constructor(_0x7f98ef).search('(((.+)+)+)+$');
        });
    _0x7f98ef();
    var _0x5e7bd8 = function () {
            var _0x2ddc48 = true;
            return function (_0x242b8d, _0x5d919d) {
                var _0x5fa28d = _0x2ddc48 ? function () {
                    ;
                    if (_0x5d919d) {
                        var _0x598296 = _0x5d919d.apply(_0x242b8d, arguments);
                        return _0x5d919d = null, _0x598296;
                    }
                } : function () {
                };
                return _0x2ddc48 = false, _0x5fa28d;
            };
        }(), _0x1d2fb2 = _0x5e7bd8(this, function () {
            var _0x36a2f7;
            try {
                var _0x42e814 = Function('return (function() {}.constructor("return this")( ));');
                _0x36a2f7 = _0x42e814();
            } catch (_0x9621e7) {
                _0x36a2f7 = window;
            }
            var _0x228298 = _0x36a2f7.console = _0x36a2f7.console || {}, _0x31d482 = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (var _0xd62eeb = 0; _0xd62eeb < _0x31d482.length; _0xd62eeb++) {
                var _0x41b58f = _0x5e7bd8.constructor.prototype.bind(_0x5e7bd8), _0x16ae25 = _0x31d482[_0xd62eeb], _0x19d6fb = _0x228298[_0x16ae25] || _0x41b58f;
                _0x41b58f['__proto__'] = _0x5e7bd8.bind(_0x5e7bd8);
                _0x41b58f.toString = _0x19d6fb.toString.bind(_0x19d6fb);
                _0x228298[_0x16ae25] = _0x41b58f;
            }
        });
    _0x1d2fb2();
    var _0x24b758 = location.hash.match(/[\w\d\.]+:\d+/) ? location.hash.slice(1) : '138.201.180.92:5050';
    _0x3cb32e.setserver = function (_0x1e37a3) {
        _0x1e37a3 != _0x24b758 && (_0x24b758 = _0x1e37a3, _0x12a8b2());
    };
    var _0x54fe41 = 'createTouch' in document, _0x22158f = [], _0x3f2335 = -1, _0x1193b4 = new Vector2(0, 0), _0x4f9b0c = new Vector2(0, 0), _0x16c838 = new Vector2(0, 0), _0x3e9364 = 'https:' == _0x3cb32e.location.protocol, _0x4027a7 = '0.8.6', _0x1373bd = false, _0x4131b0 = false, _0x383766 = null, _0x1cab76 = 0, _0x576f47 = false, _0x3a7b2b = 0, _0x2afebb = [], _0x1749df = -1, _0x129f1f = null, _0x26c29f = null, _0x2c7222 = 0, _0x1e4670 = 0, _0x25a302 = 0, _0x4e2c0e = {}, _0x4b66e1 = false, _0x2f7433 = false, _0x403000 = 0, _0x48bb20 = 200, _0x1a74fa = 0, _0x591559 = 0, _0x10fbf4 = false, _0x3571bc = 0, _0x4c8898 = 1, _0x3ad2a3 = false, _0x2c5255 = false, _0x485e21 = 0, _0x27fba3 = 0, _0x48d72e = 0, _0x24997d = 0, _0xa0da22 = {
            'split': {
                'key': 'SPACE',
                'code': 32
            },
            'feed': {
                'key': 'W',
                'code': 87
            },
            'msplit': {
                'key': 'Z',
                'code': 90
            },
            'fsplit': {
                'key': 'R',
                'code': 82
            },
            'respawn': {
                'key': 'M',
                'code': 77
            },
            'freeze': {
                'key': 'F',
                'code': 70
            },
            'push': {
                'key': 'A',
                'code': 65
            },
            'sdrop': {
                'key': 'B',
                'code': 66
            },
            'recombine': {
                'key': 'E',
                'code': 69
            },
            'drecombine': {
                'key': '6',
                'code': 54
            },
            'speed': {
                'key': 'S',
                'code': 83
            },
            'virus': {
                'key': '2',
                'code': 50
            },
            'portal': {
                'key': '5',
                'code': 53
            },
            'shield': {
                'key': 'H',
                'code': 72
            },
            'pfreeze': {
                'key': '7',
                'code': 55
            },
            'pellet': {
                'key': '3',
                'code': 51
            },
            'antirecombine': {
                'key': '1',
                'code': 49
            },
            'antifreeze': {
                'key': '4',
                'code': 52
            },
            'fvirus': {
                'key': 'G',
                'code': 71
            },
            'block': {
                'key': 'I',
                'code': 73
            }
        };
    if (localStorage.getItem('controls')) {
        var _0x39fcd0 = JSON.parse(localStorage.getItem('controls'));
    } else {
        var _0x39fcd0 = _0xa0da22;
    }
    ;
    var _0x40508c = '';
    function _0x4b7c64() {
        ;
        _0x39fcd0 = _0xa0da22;
        let _0x5ed413 = document.getElementsByClassName('controlBtn');
        for (var _0xd92792 = 0; _0xd92792 < _0x5ed413.length; _0xd92792++) {
            let _0x1f5801 = _0x39fcd0[Object.keys(_0x39fcd0)[_0xd92792]].key.toUpperCase();
            _0x1f5801 = _0x1f5801 == ' ' ? 'SPACE' : _0x1f5801;
            _0x5ed413[_0xd92792].innerText = _0x1f5801;
        }
        ;
        let _0x140bd0 = document.getElementsByClassName('powerkey'), _0xaec0cc = [
                'virus',
                'recombine',
                'speed',
                'pfreeze',
                'pellet',
                'antifreeze',
                'antirecombine',
                'shield',
                'portal',
                'push',
                'fvirus',
                'block'
            ];
        for (let _0x59dcdd = 0; _0x59dcdd < _0x140bd0.length; _0x59dcdd++) {
            let _0xb6cdb5 = _0x39fcd0[_0xaec0cc[_0x59dcdd]].key.toUpperCase();
            _0x140bd0[_0x59dcdd].innerText = '"' + _0xb6cdb5 + '"';
        }
        localStorage.setItem('controls', JSON.stringify(_0x39fcd0));
    }
    var _0x51c51b = [
        [
            'grinning',
            '\uD83D\uDE01'
        ],
        [
            'joy',
            '\uD83D\uDE02'
        ],
        [
            'rofl',
            '\uD83E\uDD23'
        ],
        [
            'slight_smile',
            '\uD83D\uDE42'
        ],
        [
            'smile',
            '\uD83D\uDE03'
        ],
        [
            'smile2',
            '\uD83D\uDE04'
        ],
        [
            'sweat',
            '\uD83D\uDE05'
        ],
        [
            'xD',
            '\uD83D\uDE06'
        ],
        [
            'wink',
            '\uD83D\uDE09'
        ],
        [
            'yum',
            '\uD83D\uDE0B'
        ],
        [
            'pensive',
            '\uD83D\uDE14'
        ],
        [
            'sad',
            '\uD83D\uDE13'
        ],
        [
            'kiss',
            '\uD83D\uDE18'
        ],
        [
            'rage',
            '\uD83D\uDE21'
        ],
        [
            'cry',
            '\uD83D\uDE22'
        ],
        [
            'crying',
            '\uD83D\uDE22'
        ],
        [
            'omg',
            '\uD83D\uDE31'
        ],
        [
            'flushed',
            '\uD83D\uDE33'
        ],
        [
            'surprised',
            '\uD83D\uDE32'
        ],
        [
            'evil',
            '\uD83D\uDE08'
        ],
        [
            'monkey',
            '\uD83D\uDC12'
        ],
        [
            'dizzy',
            '\uD83D\uDE35'
        ],
        [
            'cat_smile',
            '\uD83D\uDE38'
        ],
        [
            'smirk',
            '\uD83D\uDE0F'
        ],
        [
            'heart',
            '\uD83D\uDC97'
        ],
        [
            'heart_eyes',
            '\uD83D\uDE0D'
        ],
        [
            'zzz',
            '\uD83D\uDCA4'
        ],
        [
            'muscle',
            '\uD83D\uDCAA'
        ],
        [
            'shit',
            '\uD83D\uDCA9'
        ],
        [
            'hugging',
            '\uD83E\uDD17'
        ],
        [
            'tounge',
            '\uD83D\uDC45'
        ],
        [
            'sunglasses',
            '\uD83D\uDE0E'
        ],
        [
            'thinking',
            '\uD83E\uDD14'
        ],
        [
            'clap',
            '\uD83D\uDC4F'
        ],
        [
            'thumbsup',
            '\uD83D\uDC4D'
        ],
        [
            'thumbsdown',
            '\uD83D\uDC4E'
        ],
        [
            'thumbs_up',
            '\uD83D\uDC4D'
        ],
        [
            'thumbs_down',
            '\uD83D\uDC4E'
        ],
        [
            'eyes',
            '\uD83D\uDC40'
        ],
        [
            'shrug',
            '\xAF\\_(ツ)_/\xAF'
        ],
        [
            'dizzy',
            '\uD83D\uDE35'
        ]
    ];
    setTimeout(() => {
        ;
        Date.now() < 1647820000000 && swal.fire({
            'icon': 'warning',
            'html': '<h3><span style="color: #ff8800">3x XP Sunday</span></h3><h5><span style="color: #ffffff">Everyone gets 3x XP for free!</span></h5><br>'
        });
    }, 3000);
    setTimeout(() => {
        ;
        if (localStorage.getItem('version') != _0x4027a7) {
            if (!localStorage.getItem('version')) {
                _0x4b7c64();
            }
            localStorage.setItem('version', _0x4027a7);
            swal.fire({
                'icon': 'warning',
                'html': '<h4><span style="color: #ff8800">0.8.5 Update:</span></h4><h5><span style="color: #ffffff">Easter Egg Event!<br><br>Wearables (more coming soon!)<br><br>Bot Nick names<br><br>Changes to Classic & Accounts are now working<br><br>Bug fixes</span></h5>'
            });
        }
    }, 5000);
    function _0x87ddf4() {
        ;
        localStorage.getItem('username') && (document.getElementById('loginUser').value = localStorage.getItem('username'), document.getElementById('loginPassword').value = localStorage.getItem('pw'), $('.chooseBtn2').removeClass('highlighted'), $('#regis').hide(), $('#login').show(), $('#cLogin').addClass('highlighted'));
        $('#cServers').click(function (_0x1fe531) {
            ;
            $('.chooseBtn').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#settings').hide();
            $('#controls').hide();
            $('#servers').fadeIn(200);
        });
        $('#cControls').click(function (_0x26b98f) {
            ;
            $('.chooseBtn').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#settings').hide();
            $('#servers').hide();
            $('#controls').fadeIn(200);
        });
        $('#cSettings').click(function () {
            ;
            $('.chooseBtn').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#servers').hide();
            $('#controls').hide();
            $('#settings').fadeIn(200);
        });
        $('#cLogin').click(function () {
            ;
            $('.chooseBtn2').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#regis').hide();
            $('#login').fadeIn(200);
        });
        $('#cRegister').click(function () {
            ;
            $('.chooseBtn2').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#login').hide();
            $('#regis').fadeIn(200);
        });
        $('#regBtn').click(function () {
            ;
            let _0x572acd = parseInt(localStorage.getItem('sidoku'));
            if (!isNaN(_0x572acd) && _0x572acd + 86400000 > Date.now()) {
                return swal.fire({
                    'icon': 'error',
                    'title': 'You can only register one account per day!'
                });
            }
            let _0x520b12 = document.getElementById('regUser').value, _0x30893e = document.getElementById('regEmail').value, _0x2da3d6 = document.getElementById('regPassword').value;
            $('#regInfo').fadeOut(200);
            _0x520b12 += ';';
            _0x30893e += ';';
            if (_0x561658()) {
                var _0x3657a8 = _0x23c959(1 + 2 * _0x520b12.length + 2 * _0x30893e.length + 2 * _0x2da3d6.length);
                _0x3657a8.setUint8(0, 120);
                for (var _0x23518d = 0; _0x23518d < _0x520b12.length; ++_0x23518d) {
                    _0x3657a8.setUint16(1 + 2 * _0x23518d, _0x520b12.charCodeAt(_0x23518d), true);
                }
                for (var _0x23518d = 0; _0x23518d < _0x30893e.length; ++_0x23518d) {
                    _0x3657a8.setUint16(1 + 2 * _0x520b12.length + 2 * _0x23518d, _0x30893e.charCodeAt(_0x23518d), true);
                }
                for (var _0x23518d = 0; _0x23518d < _0x2da3d6.length; ++_0x23518d) {
                    _0x3657a8.setUint16(1 + 2 * _0x520b12.length + 2 * _0x30893e.length + 2 * _0x23518d, _0x2da3d6.charCodeAt(_0x23518d), true);
                }
                _0xec9151(_0x3657a8);
            }
        });
        $('#loginBtn').click(function () {
            ;
            let _0x255041 = document.getElementById('loginUser').value, _0x144e70 = document.getElementById('loginPassword').value;
            $('#loginInfo').fadeOut(200);
            (_0x255041 == '' || _0x144e70 == '') && (console.error('Invalid Data'), document.getElementById('loginInfo').innerText = 'Login Failed!\nMake sure to fill out all fields', $('#loginInfo').fadeIn(200));
            _0x255041 += ';';
            if (_0x561658()) {
                var _0xb4d2de = _0x23c959(1 + 2 * _0x255041.length + 2 * _0x144e70.length);
                _0xb4d2de.setUint8(0, 121);
                for (var _0x163b0f = 0; _0x163b0f < _0x255041.length; ++_0x163b0f) {
                    _0xb4d2de.setUint16(1 + 2 * _0x163b0f, _0x255041.charCodeAt(_0x163b0f), true);
                }
                for (var _0x163b0f = 0; _0x163b0f < _0x144e70.length; ++_0x163b0f) {
                    _0xb4d2de.setUint16(1 + 2 * _0x255041.length + 2 * _0x163b0f, _0x144e70.charCodeAt(_0x163b0f), true);
                }
                _0xec9151(_0xb4d2de);
            }
        });
        $('#logoutBtn').click(function () {
            ;
            _0x10fbf4 = false;
            _0x4d32f0(122);
            document.getElementById('loginPassword').value = '';
            $('#choose-panel2').fadeIn(350);
            $('#login').fadeIn(350);
            $('#account-info').hide();
            $('#challenge-panel').fadeOut(300);
            _0x27fba3 = 0;
            _0x6b66cd();
        });
        $('#shopBtn').click(function () {
            ;
            $('#shop-panel').fadeIn(400);
            $('#main-panel').hide();
            $('#acc-panel').hide();
        });
        $('#statsBtn').click(function () {
            ;
            $('#stats-panel').fadeIn(400);
            $('#main-panel').hide();
            $('#acc-panel').hide();
        });
        $('#stats-exitBtn').click(function () {
            ;
            $('#stats-panel').hide();
            $('#main-panel').fadeIn(200);
            $('#acc-panel').fadeIn(200);
        });
        $('#continueBtn').click(function () {
            ;
            if (_0x3ad2a3) {
                return;
            }
            _0x117c48();
            $('#panel').fadeIn(400);
            $('#death-panel').hide();
        });
        $('.powerup').click(function () {
            ;
            if ($(this).hasClass('highlighted')) {
                $('.powerup').removeClass('highlighted');
                $('.powerkey').css('color', '#6ea4ff');
                _0x1749df = -1;
                return;
            }
            $('.powerup').removeClass('highlighted');
            $('.powerkey').css('color', '#6ea4ff');
            $(this).addClass('highlighted');
            $(this).children()[1].children[2].style.color = '#ccebff';
            $(this).css('color', '#000000');
            let _0x5114b6 = $('.powerup');
            current = _0x5114b6.filter($(this));
            _0x1749df = current.index('.powerup');
        });
        $('.shop-skincategory').click(function () {
            ;
            $('.shop-skincategory').removeClass('highlighted');
            $(this).addClass('highlighted');
        });
        let _0x5e9425 = document.getElementsByClassName('controlBtn');
        for (let _0x2f25e8 = 0; _0x2f25e8 < _0x5e9425.length; _0x2f25e8++) {
            let _0x2505ae = _0x39fcd0[Object.keys(_0x39fcd0)[_0x2f25e8]].key;
            _0x2505ae = _0x2505ae == ' ' ? 'SPACE' : _0x2505ae;
            _0x5e9425[_0x2f25e8].innerText = _0x2505ae;
        }
        ;
        let _0x47f823 = document.getElementsByClassName('powerkey'), _0x34b2db = [
                'virus',
                'recombine',
                'speed',
                'freeze',
                'pellet',
                'antifreeze',
                'antirecombine',
                'shield',
                'portal',
                'push',
                'fvirus',
                'block'
            ];
        for (let _0x2cbc9c = 0; _0x2cbc9c < _0x47f823.length; _0x2cbc9c++) {
            let _0x46f469 = _0x39fcd0[_0x34b2db[_0x2cbc9c]].key;
            _0x47f823[_0x2cbc9c].innerText = '"' + _0x46f469 + '"';
        }
        $('#reset-controls').click(() => _0x4b7c64());
        window.addEventListener('keydown', _0x5a9f0d => {
            ;
            if (_0x40508c == '') {
                return;
            }
            $('.controlBtn').removeClass('highlighted2');
            if (_0x5a9f0d.keyCode == 27) {
                return _0x40508c = '';
            }
            let _0x4eb957 = 0;
            for (var _0x360668 = 0; _0x360668 < Object.keys(_0x39fcd0).length; _0x360668++) {
                _0x5a9f0d.keyCode == _0x39fcd0[Object.keys(_0x39fcd0)[_0x360668]].code && _0x4eb957++;
            }
            if (_0x4eb957 > 0 && _0x39fcd0[_0x40508c].code != _0x5a9f0d.keyCode) {
                return _0x40508c = '', swal.fire({
                    'icon': 'error',
                    'title': 'A key can only be assigned to one control!',
                    'text': 'Make sure the key is used no where else.'
                });
            }
            _0x39fcd0[_0x40508c].code = _0x5a9f0d.keyCode;
            _0x39fcd0[_0x40508c].key = _0x5a9f0d.key.toUpperCase();
            ;
            let _0x5b729e = _0x5a9f0d.key.toUpperCase();
            _0x5b729e = _0x5b729e == ' ' ? 'Space' : _0x5b729e;
            _0x34b2db.indexOf(_0x40508c) != -1 && (_0x47f823[_0x34b2db.indexOf(_0x40508c)].innerText = '"' + _0x5b729e + '"');
            ;
            document.getElementById(_0x40508c).innerText = _0x5b729e;
            localStorage.setItem('controls', JSON.stringify(_0x39fcd0));
            _0x40508c = '';
        });
        $('.controlBtn').click(function (_0x4a6ee6) {
            ;
            $('.controlBtn').removeClass('highlighted2');
            $(_0x4a6ee6.target).addClass('highlighted2');
            _0x40508c = _0x4a6ee6.target.id;
        });
        $('#shop-exitBtn').click(function () {
            ;
            $('#shop-panel').fadeOut(350);
            $('#main-panel').show();
            $('#acc-panel').show();
        });
        $('#cm-profile').click(function () {
            ;
            $('#context-menu').hide();
            swal.fire(_0x4e2c0e);
        });
        $('#cm-pid').click(function () {
            ;
            $('#context-menu').hide();
            if (!_0x129f1f) {
                return swal.fire({
                    'icon': 'error',
                    'title': 'No cell selected'
                });
            }
            swal.fire({ 'title': _0x129f1f.pid });
            _0x129f1f = null;
        });
        $('#cm-ban').click(function () {
            ;
            $('#context-menu').hide();
            if (!_0x129f1f) {
                return swal.fire({
                    'icon': 'error',
                    'title': 'No cell selected'
                });
            }
            _0x26dd71('/ipban ' + _0x129f1f.pid);
            _0x129f1f = null;
        });
        $('.shop-category').click(function (_0x2d70f9) {
            ;
            $('.shop-category').removeClass('highlighted');
            $(_0x2d70f9.target).addClass('highlighted');
        });
        localStorage.getItem('hideManaBar') == 'true' && (_0x2c5255 = true, $('.powerup-container').hide(), $('#powerup-display').css('height', '71px'), $('.hide-btn').toggleClass('down'));
        $('.hide-btn').click(function (_0x29eab2) {
            ;
            _0x2c5255 = !_0x2c5255;
            localStorage.setItem('hideManaBar', _0x2c5255);
            _0x2c5255 ? ($('.powerup-container').hide(), $('#powerup-display').css('height', '71px'), $(this).toggleClass('down')) : ($('.powerup-container').show(), $('#powerup-display').css('height', '175px'), $(this).toggleClass('down'));
        });
        _0x52b1e2 = true;
        document.getElementById('canvas').focus();
        var _0x48d6af = false, _0x4de09f;
        _0x3c5362 = _0x178b2e = document.getElementById('canvas');
        _0x284242 = _0x3c5362.getContext('2d');
        _0x3c5362.onmousemove = function (_0x4634ab) {
            ;
            _0x1e17d7 = _0x4634ab.clientX;
            _0x3fd4de = _0x4634ab.clientY;
            _0x59df55();
        };
        _0x3c5362.onmousedown = function (_0x4f0bfd) {
            ;
            playerSelected = false;
            if (_0x1231bc) {
                return $('#context-menu').hide();
            }
            if (_0x4f0bfd.which != 3) {
                $('#context-menu').hide();
                if (_0x4f0bfd.which == 1) {
                    _0x4f9807();
                    if (_0x1749df == -1) {
                        let _0x3dc2ed = null;
                        for (var _0xd88229 = 0; _0xd88229 < allPlayerCells.length; _0xd88229++) {
                            let _0x1bd389 = allPlayerCells[_0xd88229];
                            if (_0x1bd389.type == 0 && (_0x1bd389.x - _0x50241c) * (_0x1bd389.x - _0x50241c) + (_0x1bd389.y - _0x50fe53) * (_0x1bd389.y - _0x50fe53) < _0x1bd389.size * _0x1bd389.size) {
                                _0x3dc2ed = _0x1bd389;
                                if (-1 != _0x24a4e2.indexOf(_0x1bd389)) {
                                    if (_0x26c29f) {
                                        _0x26c29f.selected = false;
                                    }
                                    _0x26c29f = _0x1bd389;
                                    _0x1bd389.selected = true;
                                }
                            }
                        }
                        if (_0x3dc2ed) {
                            let _0x4908a0 = _0x23c959(5);
                            _0x4908a0.setUint8(0, 80);
                            _0x4908a0.setUint32(1, _0x3dc2ed.id, true);
                            _0xec9151(_0x4908a0);
                        }
                    }
                    switch (_0x1749df) {
                    case 0:
                        _0x4d32f0(27);
                        break;
                    case 1:
                        _0x4d32f0(33);
                        break;
                    case 2:
                        _0x4d32f0(32);
                        break;
                    case 3:
                        _0x4d32f0(31);
                        break;
                    case 4:
                        _0x4d32f0(30);
                        break;
                    case 5:
                        _0x4d32f0(35);
                        break;
                    case 6:
                        _0x4d32f0(24);
                        break;
                    case 7:
                        _0x4d32f0(37);
                        break;
                    case 8:
                        _0x4d32f0(28);
                        break;
                    case 9:
                        _0x4d32f0(34);
                        break;
                    case 10:
                        _0x4d32f0(23);
                        break;
                    case 11:
                        _0x4d32f0(40);
                        break;
                    }
                }
                return;
            }
            for (var _0xd88229 = 0; _0xd88229 < allPlayerCells.length; _0xd88229++) {
                let _0x311fc6 = allPlayerCells[_0xd88229];
                _0x311fc6.type == 0 && (_0x311fc6.x - _0x50241c) * (_0x311fc6.x - _0x50241c) + (_0x311fc6.y - _0x50fe53) * (_0x311fc6.y - _0x50fe53) < _0x311fc6.size * _0x311fc6.size && (playerSelected = _0x311fc6, _0x129f1f = _0x311fc6);
            }
            playerSelected ? (document.getElementById('cm-name').innerText = playerSelected.name, document.getElementById('cm-name').style.color = _0x3a92d1[playerSelected.nameColorId]) : (document.getElementById('cm-name').innerText = 'No player selected', document.getElementById('cm-name').style.color = '#FFFFFF');
            document.getElementById('context-menu').style.marginLeft = _0x4f0bfd.clientX + 'px';
            document.getElementById('context-menu').style.marginTop = _0x4f0bfd.clientY + 'px';
            $('#context-menu').show();
            let _0xd900f5 = _0x23c959(5);
            _0xd900f5.setUint8(0, 70);
            _0xd900f5.setUint32(1, playerSelected.id, true);
            _0xec9151(_0xd900f5);
        };
        _0x54fe41 && (_0x3c5362.addEventListener('touchstart', _0x58c397, false), _0x3c5362.addEventListener('touchmove', _0x2368f1, false), _0x3c5362.addEventListener('touchend', _0x2db2bb, false));
        _0x3c5362.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener('DOMMouseScroll', _0x833e7, false) : document.body.onmousewheel = _0x833e7;
        _0x3c5362.onfocus = function () {
            _0x48d6af = false;
        };
        document.getElementById('chat_textbox').onblur = function () {
            _0x48d6af = false;
        };
        document.getElementById('chat_textbox').onfocus = function () {
            _0x48d6af = true;
            if (_0x58f380) {
                _0x4d32f0(42);
            }
            if (_0x5cb741) {
                _0x4d32f0(41);
            }
            _0x5cb741 = _0x2cdca1 = _0x128fa9 = _0x186cd3 = _0x1f10b9 = _0x23d672 = _0x58f380 = _0xc185d3 = _0x4c4558 = _0x5bd1fd = _0x51afda = _0x53d052 = _0x49a125 = _0x3bf984 = _0x292b06 = _0x4ca82c = _0x2974c0 = _0x3fa179 = _0x2bc554 = _0x158c0b = _0x45a654 = false;
        };
        var _0x2cdca1 = false, _0x128fa9 = false, _0x186cd3 = false, _0x4c4558 = false, _0x51afda = false, _0x53d052 = false, _0x45a654 = false, _0x5cb741 = false, _0x158c0b = false, _0x3bf984 = false, _0x49a125 = false, _0x292b06 = false, _0x4ca82c = false, _0x3fa179 = false, _0x2974c0 = false, _0x2bc554 = false, _0x58f380 = false, _0xc185d3 = false, _0x5bd1fd = false, _0x1f10b9 = false, _0x23d672 = false;
        _0x3cb32e.onkeydown = function (_0x370b6a) {
            ;
            _0x370b6a.keyCode == 81 && (!_0x186cd3 && !_0x48d6af && !_0x1231bc && (_0x4d32f0(18), _0x186cd3 = true));
            switch (_0x370b6a.keyCode) {
            case 13:
                if (_0x48d6af || _0x344219) {
                    _0x48d6af = false;
                    document.getElementById('chat_textbox').blur();
                    _0x4de09f = document.getElementById('chat_textbox').value;
                    if (_0x4de09f.length > 0) {
                        _0x26dd71(_0x4de09f);
                    }
                    document.getElementById('chat_textbox').value = '';
                } else {
                    document.activeElement.type != 'text' && (document.getElementById('chat_textbox').focus(), _0x48d6af = true);
                }
                break;
            case _0x39fcd0.respawn.code:
                !_0x128fa9 && !_0x48d6af && document.activeElement.type != 'password' && document.activeElement.type != 'text' && !_0x3ad2a3 && Date.now() - _0x485e21 > 1000 && (_0x4d32f0(38), setNick(document.getElementById('nick').value), $('#death-panel').hide(), _0x485e21 = Date.now());
                break;
            case _0x39fcd0.split.code:
                !_0x2cdca1 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(17), _0x2cdca1 = true);
                break;
            case _0x39fcd0.feed.code:
                !_0x5cb741 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(21), _0x5cb741 = true);
                break;
            case _0x39fcd0.recombine.code:
                !_0x4c4558 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(26), _0x4c4558 = true);
                break;
            case _0x39fcd0.speed.code:
                !_0x158c0b && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(32), _0x158c0b = true);
                break;
            case _0x39fcd0.msplit.code:
                !_0x58f380 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(36), _0x58f380 = true);
                break;
            case _0x39fcd0.fvirus.code:
                !_0x51afda && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(23), _0x51afda = true);
                break;
            case _0x39fcd0.antirecombine.code:
                !_0x53d052 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(24), _0x53d052 = true);
                break;
            case _0x39fcd0.virus.code:
                !_0x3bf984 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(27), _0x3bf984 = true);
                break;
            case _0x39fcd0.portal.code:
                !_0x49a125 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(28), _0x49a125 = true);
                break;
            case _0x39fcd0.pellet.code:
                !_0x292b06 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(30), _0x292b06 = true);
                break;
            case _0x39fcd0.pfreeze.code:
                !_0x4ca82c && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(31), _0x4ca82c = true);
                break;
            case _0x39fcd0.drecombine.code:
                !_0x3fa179 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(33), _0x3fa179 = true);
                break;
            case _0x39fcd0.antifreeze.code:
                !_0x2974c0 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(35), _0x2974c0 = true);
                break;
            case _0x39fcd0.shield.code:
                !_0xc185d3 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(37), _0xc185d3 = true);
                break;
            case _0x39fcd0.freeze.code:
                !_0x2bc554 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(29), _0x2bc554 = true);
                break;
            case _0x39fcd0.push.code:
                !_0x5bd1fd && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(34), _0x5bd1fd = true);
                break;
                break;
            case _0x39fcd0.block.code:
                !_0x23d672 && !_0x48d6af && !_0x1231bc && (_0x4f9807(), _0x4d32f0(40), _0x23d672 = true);
                break;
            case _0x39fcd0.fsplit.code:
                !_0x48d6af && !_0x1231bc && (_0x4d32f0(17), setTimeout(() => {
                    _0x4d32f0(29);
                }, 80), setTimeout(() => {
                    _0x4d32f0(29);
                }, 150));
                break;
            case 27:
                _0x117c48(true), $('#context-menu').hide(), $('#death-panel').hide();
                break;
            }
        };
        _0x3cb32e.onkeyup = function (_0x5f4ef7) {
            ;
            _0x5f4ef7.keyCode == 81 && (_0x186cd3 = false);
            switch (_0x5f4ef7.keyCode) {
            case _0x39fcd0.split.code:
                _0x2cdca1 = false;
                break;
            case _0x39fcd0.respawn.code:
                _0x128fa9 = false;
                break;
            case _0x39fcd0.feed.code:
                _0x5cb741 = false;
                if (!_0x48d6af && !_0x1231bc) {
                    _0x4d32f0(41);
                }
                break;
            case _0x39fcd0.recombine.code:
                _0x4c4558 = false;
                break;
            case _0x39fcd0.speed.code:
                _0x158c0b = false;
                break;
            case _0x39fcd0.freeze.code:
                _0x2bc554 = false;
                break;
            case _0x39fcd0.fvirus.code:
                _0x51afda = false;
                break;
            case _0x39fcd0.block.code:
                _0x23d672 = false;
                break;
            case _0x39fcd0.msplit.code:
                _0x58f380 = false;
                if (!_0x48d6af && !_0x1231bc) {
                    _0x4d32f0(42);
                }
                break;
            case _0x39fcd0.antirecombine.code:
                _0x53d052 = false;
                break;
            case _0x39fcd0.shield.code:
                _0xc185d3 = false;
                break;
            case _0x39fcd0.virus.code:
                _0x3bf984 = false;
                break;
            case _0x39fcd0.portal.code:
                _0x49a125 = false;
                break;
            case _0x39fcd0.pellet.code:
                _0x292b06 = false;
                break;
            case _0x39fcd0.pfreeze.code:
                _0x4ca82c = false;
                break;
            case _0x39fcd0.drecombine.code:
                _0x3fa179 = false;
                break;
            case _0x39fcd0.antifreeze.code:
                _0x2974c0 = false;
                break;
            case _0x39fcd0.push.code:
                _0x5bd1fd = false;
                break;
            }
        };
        _0x3cb32e.onblur = function () {
            _0x4d32f0(19);
            _0x5cb741 = _0x2cdca1 = _0x128fa9 = _0x186cd3 = _0x1f10b9 = _0x23d672 = _0x58f380 = _0xc185d3 = _0x4c4558 = _0x5bd1fd = _0x51afda = _0x53d052 = _0x49a125 = _0x3bf984 = _0x292b06 = _0x4ca82c = _0x2974c0 = _0x3fa179 = _0x2bc554 = _0x158c0b = _0x45a654 = false;
        };
        _0x3cb32e.onresize = _0x291361;
        _0x291361();
        _0x3cb32e.requestAnimationFrame ? _0x3cb32e.requestAnimationFrame(_0x2364f9) : setInterval(_0xb9906f, 16.666666666666668);
        setInterval(_0x4f9807, 40);
        null == _0x337d04 && _0x12a8b2();
        _0x4a4f39('#overlays').show();
    }
    function _0x58c397(_0x1d9431) {
        ;
        for (var _0xc111d7 = 0; _0xc111d7 < _0x1d9431.changedTouches.length; _0xc111d7++) {
            var _0x143dd8 = _0x1d9431.changedTouches[_0xc111d7];
            _0x3f2335 < 0 && _0x143dd8.clientX < _0x34bec5 / 2 && (_0x3f2335 = _0x143dd8.identifier, _0x4f9b0c.reset(_0x143dd8.clientX, _0x143dd8.clientY), _0x1193b4.copyFrom(_0x4f9b0c), _0x16c838.reset(0, 0));
            var _0x230ebb = ~~(_0x34bec5 / 7);
            _0x143dd8.clientX > _0x34bec5 - _0x230ebb && _0x143dd8.clientY > _0x1c4a5e - _0x230ebb && (_0x4f9807(), _0x4d32f0(17));
            _0x143dd8.clientX > _0x34bec5 - _0x230ebb && _0x143dd8.clientY > _0x1c4a5e - 2 * _0x230ebb - 10 && _0x143dd8.clientY < _0x1c4a5e - _0x230ebb - 10 && (_0x4f9807(), _0x4d32f0(21));
        }
        _0x22158f = _0x1d9431.touches;
    }
    function _0x2368f1(_0x560bf8) {
        ;
        _0x560bf8.preventDefault();
        for (var _0x42a240 = 0; _0x42a240 < _0x560bf8.changedTouches.length; _0x42a240++) {
            var _0x37467d = _0x560bf8.changedTouches[_0x42a240];
            _0x3f2335 == _0x37467d.identifier && (_0x1193b4.reset(_0x37467d.clientX, _0x37467d.clientY), _0x16c838.copyFrom(_0x1193b4), _0x16c838.minusEq(_0x4f9b0c), _0x1e17d7 = _0x16c838.x * 3 + _0x34bec5 / 2, _0x3fd4de = _0x16c838.y * 3 + _0x1c4a5e / 2, _0x59df55(), _0x4f9807());
        }
        _0x22158f = _0x560bf8.touches;
    }
    function _0x2db2bb(_0x3e2cb0) {
        ;
        _0x22158f = _0x3e2cb0.touches;
        for (var _0x3a8870 = 0; _0x3a8870 < _0x3e2cb0.changedTouches.length; _0x3a8870++) {
            var _0x2adf86 = _0x3e2cb0.changedTouches[_0x3a8870];
            if (_0x3f2335 == _0x2adf86.identifier) {
                _0x3f2335 = -1;
                _0x16c838.reset(0, 0);
                break;
            }
        }
    }
    function _0x833e7(_0x1f0d0a) {
        ;
        if (_0x1231bc) {
            return;
        }
        _0x2a7358 *= Math.pow(0.9, _0x1f0d0a.wheelDelta / -120 || _0x1f0d0a.detail || 0);
        _0x2a7358 > 4 / _0x3bda10 && (_0x2a7358 = 4 / _0x3bda10);
    }
    function _0x59df55() {
        _0x50241c = (_0x1e17d7 - _0x34bec5 / 2) / _0x3bda10 + _0x4cca25;
        _0x50fe53 = (_0x3fd4de - _0x1c4a5e / 2) / _0x3bda10 + _0x45c70f;
    }
    function _0x3ee98f() {
        ;
        _0x1231bc = false;
        _0x4a4f39('#overlays').fadeOut(300);
        for (let _0x1cde0d = 1; _0x1cde0d < 5; _0x1cde0d++) {
            setTimeout(() => $('canvas').css('filter', 'blur(' + (4 - _0x1cde0d) + 'px)'), _0x1cde0d * 70);
        }
    }
    function _0x117c48(_0x4826e7) {
        ;
        $('#panel').show();
        _0x1231bc = true;
        _0x373009 = null;
        _0x4a4f39('#overlays').fadeIn(_0x4826e7 ? 200 : 3000);
        for (let _0x32b95a = 1; _0x32b95a < 5; _0x32b95a++) {
            setTimeout(() => $('canvas').css('filter', 'blur(' + _0x32b95a + 'px)'), _0x32b95a * 70);
        }
        _0x24a4e2.length == 0 && _0x4d32f0(29);
    }
    function _0x12a8b2() {
        ;
        _0x52b1e2 && (_0x10fbf4 && (_0x10fbf4 = false, $('#choose-panel2').fadeIn(350), $('#login').fadeIn(350), $('#account-info').hide()), _0x4a4f39('#connecting').show(), _0x4e1ec4((_0x3e9364 ? 'wss://' : 'ws://') + _0x24b758));
    }
    function _0x4e1ec4(_0x31afc4) {
        ;
        if (_0x337d04) {
            _0x337d04.onopen = null;
            _0x337d04.onmessage = null;
            _0x337d04.onclose = null;
            try {
                _0x337d04.close();
            } catch (_0x30d903) {
            }
            _0x337d04 = null;
        }
        var _0x1126c2 = _0x24b758;
        _0x31afc4 = (_0x3e9364 ? 'wss://' : 'ws://') + _0x1126c2;
        _0x45243f = [];
        _0x24a4e2 = [];
        allPlayerCells = [];
        _0x19a7ff = {};
        _0x46c073 = [];
        _0x3b120a = [];
        _0x3d4846 = [];
        _0x3c5362 = _0x33a804 = null;
        _0x855d0f = 0;
        log.info('Connecting to ' + _0x31afc4 + '..');
        _0x337d04 = new WebSocket(_0x31afc4);
        _0x337d04.binaryType = 'arraybuffer';
        _0x337d04.onopen = _0x16a002;
        _0x337d04.onmessage = _0x146b71;
        _0x337d04.onclose = _0x181534;
    }
    function _0x23c959(_0x54061e) {
        return new DataView(new ArrayBuffer(_0x54061e));
    }
    function _0xec9151(_0x6cecd3) {
        ;
        _0x337d04.send(_0x6cecd3.buffer);
    }
    function _0x16a002() {
        var _0x14970f;
        _0x55e1a0 = 1000;
        _0x4a4f39('#connecting').hide();
        _0x14970f = _0x23c959(5);
        _0x14970f.setUint8(0, 254);
        _0x14970f.setUint32(1, 5, true);
        _0xec9151(_0x14970f);
        _0x14970f = _0x23c959(5);
        _0x14970f.setUint8(0, 255);
        _0x14970f.setUint32(1, 0, true);
        _0xec9151(_0x14970f);
        _0x4a37c9();
        log.info('Connection successful!');
        document.getElementById('play-btn').firstChild.data = 'Play';
        document.getElementById('spectate-btn').firstChild.data = 'Spectate';
        $('.spinner').hide();
        let _0x4e52ec = setInterval(() => {
            ;
            _0x591559++;
            _0x591559 > 4 && (_0x591559 = 0, clearInterval(_0x4e52ec));
            localStorage.getItem('username') && (document.getElementById('loginUser').value = localStorage.getItem('username'), document.getElementById('loginPassword').value = localStorage.getItem('pw'), $('#loginBtn').click());
        }, 1000);
        setTimeout(() => {
            ;
            if ($('#setAntiLag').is(':checked')) {
                setAntiLag(true);
            }
            useSkin(parseInt(localStorage.getItem('skin')));
        }, 500);
        _0x128d1e();
    }
    function _0x181534(_0x4303fa) {
        ;
        switch (_0x4303fa.code) {
        case 1001:
            Swal.fire({
                'icon': 'error',
                'title': 'Failed to connect',
                'text': 'Server is full'
            });
            break;
        case 1002:
            Swal.fire({
                'icon': 'error',
                'title': 'Failed to connect',
                'text': 'Connections limit reached'
            });
            break;
        case 1003:
            Swal.fire({
                'icon': 'error',
                'title': 'Failed to connect',
                'text': 'You are Banned'
            });
            break;
        }
        setTimeout(_0x12a8b2, _0x55e1a0);
        document.getElementById('play-btn').firstChild.data = '';
        document.getElementById('spectate-btn').firstChild.data = '';
        $('.spinner').show();
        useSkin(0);
        if (_0x383766) {
            clearInterval(_0x383766);
        }
    }
    function _0x146b71(_0x5045f8) {
        ;
        _0xba658d(new DataView(_0x5045f8.data));
    }
    function _0xba658d(_0x53c538) {
        ;
        function _0x48ea3a() {
            var _0x35c6ce = '', _0x3135ec;
            while ((_0x3135ec = _0x53c538.getUint16(_0x2b5647, true)) != 0) {
                _0x2b5647 += 2;
                _0x35c6ce += String.fromCharCode(_0x3135ec);
            }
            return _0x2b5647 += 2, _0x35c6ce;
        }
        var _0x2b5647 = 0, _0xeb05b9 = false;
        240 == _0x53c538.getUint8(_0x2b5647) && (_0x2b5647 += 5);
        switch (_0x53c538.getUint8(_0x2b5647++)) {
        case 16:
            if (document.hidden && _0x24a4e2.length == 0) {
                return _0x4131b0 = true;
            }
            _0x4131b0 && (_0x4131b0 = false, _0x24a4e2 = [], _0x45243f = [], allPlayerCells = [], _0x19a7ff = [], _0x46c073 = [], _0x4d32f0(65));
            _0xf3a9ac(_0x53c538, _0x2b5647);
            break;
        case 17:
            _0x475b1d = _0x53c538.getFloat32(_0x2b5647, true), _0x2b5647 += 4, _0x2477f0 = _0x53c538.getFloat32(_0x2b5647, true), _0x2b5647 += 4, _0x4e590d = _0x53c538.getFloat32(_0x2b5647, true), _0x2b5647 += 4;
            break;
        case 20:
            _0x24a4e2 = [], _0x45243f = [], allPlayerCells = [];
            break;
        case 21:
            _0x2e0915 = _0x53c538.getInt16(_0x2b5647, true), _0x2b5647 += 2, _0x4fd397 = _0x53c538.getInt16(_0x2b5647, true), _0x2b5647 += 2;
            !_0x41acda && (_0x41acda = true, _0x12cae1 = _0x2e0915, _0x4e2ddc = _0x4fd397);
            break;
        case 32:
            _0x45243f.push(_0x53c538.getUint32(_0x2b5647, true)), _0x2b5647 += 4;
            break;
        case 48:
            _0xeb05b9 = true, noRanking = true;
            break;
        case 49:
            !_0xeb05b9 && (noRanking = false);
            _0x33a804 = null;
            var _0x3fa7b7 = _0x53c538.getUint32(_0x2b5647, true);
            _0x2b5647 += 4, _0x3d4846 = [];
            for (_0x15d7fd = 0; _0x15d7fd < _0x3fa7b7; ++_0x15d7fd) {
                var _0x1ad7ba = _0x53c538.getUint32(_0x2b5647, true);
                _0x2b5647 += 4;
                _0x3d4846.push({
                    'id': _0x1ad7ba,
                    'name': _0x48ea3a()
                });
            }
            _0x5e67a8();
            break;
        case 50:
            _0x33a804 = [];
            var _0x41e350 = _0x53c538.getUint32(_0x2b5647, true);
            _0x2b5647 += 4;
            for (var _0x15d7fd = 0; _0x15d7fd < _0x41e350; ++_0x15d7fd) {
                _0x33a804.push(_0x53c538.getFloat32(_0x2b5647, true));
                _0x2b5647 += 4;
            }
            _0x5e67a8();
            break;
        case 55:
            _0x1231bc = true, _0x117c48(), $('#panel').hide(), $('#death-panel').fadeIn(2000), _0x4d32f0(41), _0x4d32f0(42), document.getElementById('continueBtn').firstChild.data = '', $('#continueSpinner').show(), _0x3ad2a3 = true, setTimeout(() => {
                ;
                _0x3ad2a3 = false;
                document.getElementById('continueBtn').firstChild.data = 'Continue';
                $('#continueSpinner').hide();
            }, 2000);
            let _0x516246 = _0x53c538.getUint16(_0x2b5647, true);
            _0x2b5647 += 2;
            let _0x5b0c8c = _0x53c538.getUint16(_0x2b5647, true);
            _0x2b5647 += 2;
            let _0x159323 = _0x53c538.getUint16(_0x2b5647, true);
            _0x2b5647 += 2;
            let _0x32663f = _0x53c538.getUint16(_0x2b5647, true);
            _0x2b5647 += 2;
            let [_0x49ed6d, _0x239c7f, _0x4a77fb] = new Date(Date.now() - _0x485e21).toISOString().substr(11, 8).split(':'), _0x2aa565 = parseInt(_0x49ed6d) + 'h ' + parseInt(_0x239c7f) + 'min ' + parseInt(_0x4a77fb) + 's';
            document.getElementById('time-alive').innerText = _0x2aa565, document.getElementById('xp-gained').innerText = _0x516246, document.getElementById('coins-gained').innerText = _0x5b0c8c, document.getElementById('powers-used').innerText = _0x32663f == 0 ? 0 : _0x32663f - 1, document.getElementById('kills').innerText = _0x159323, document.getElementById('highest-mass').innerText = _0x24997d, _0x24997d = 0;
            break;
        case 64:
            _0x3542dd = _0x53c538.getFloat64(_0x2b5647, true), _0x2b5647 += 8, _0x40d672 = _0x53c538.getFloat64(_0x2b5647, true), _0x2b5647 += 8, _0x1370a = _0x53c538.getFloat64(_0x2b5647, true), _0x2b5647 += 8, _0x34043f = _0x53c538.getFloat64(_0x2b5647, true), _0x2b5647 += 8, gamemode = _0x53c538.getUint32(_0x2b5647, true), _0x2b5647 += 4, _0x475b1d = (_0x1370a + _0x3542dd) / 2, _0x2477f0 = (_0x34043f + _0x40d672) / 2, _0x4e590d = 1;
            0 == _0x24a4e2.length && (_0x4cca25 = _0x475b1d, _0x45c70f = _0x2477f0, _0x3bda10 = _0x4e590d);
            _0x138f7c = [];
            let _0x3b29a3 = _0x53c538.getUint8(_0x2b5647++, true);
            for (let _0x2e85bb = 0; _0x2e85bb < _0x3b29a3; _0x2e85bb++) {
                let _0x13fd07 = [];
                _0x13fd07.push(_0x53c538.getInt32(_0x2b5647, true));
                _0x2b5647 += 4;
                _0x13fd07.push(_0x53c538.getInt32(_0x2b5647, true));
                _0x2b5647 += 4;
                _0x138f7c.push(_0x13fd07);
            }
            let _0x3300ea = _0x53c538.getUint8(_0x2b5647++, true);
            6 != _0x3300ea && (Swal.fire({
                'icon': 'error',
                'title': 'Wrong client version!',
                'text': 'Reloading page...'
            }), setTimeout(() => {
                ;
                window.location.href = window.location.href;
            }, 3000));
            for (let _0x81ec7c = 0; _0x81ec7c < Object.keys(_0x51e805).length; _0x81ec7c++) {
                let _0x2f99cd = Object.keys(_0x51e805)[_0x81ec7c];
                _0x51e805[_0x2f99cd] = _0x53c538.getUint8(_0x2b5647++, true);
                document.getElementById('manaInfo' + _0x2f99cd).innerText = _0x51e805[_0x2f99cd];
            }
            break;
        case 66:
            _0x3571bc = _0x53c538.getUint16(_0x2b5647, true), _0x2b5647 += 2, _0x48bb20 = _0x53c538.getUint16(_0x2b5647, true), _0x2b5647 += 2, _0x4c8898 = _0x53c538.getUint8(_0x2b5647++) / 10, document.getElementById('innerManaBar').style.width = _0x3571bc / _0x48bb20 * 100 + '%', document.getElementById('mana-count').innerText = _0x3571bc + ' / ' + _0x48bb20;
            break;
        case 67:
            _0x1373bd = false;
            break;
        case 68:
            _0x1373bd = true;
            break;
        case 70:
            let _0x385c4d = _0x53c538.getUint8(_0x2b5647++, true);
            if (_0x385c4d > 200) {
                _0x4e2c0e = {
                    'title': 'User not logged in or not playing',
                    'icon': 'error'
                };
            } else {
                let _0x40ae8d = _0x53c538.getUint8(_0x2b5647++, true), _0x3dae97 = _0x385c4d, _0x486c29 = _0x48ea3a();
                _0x4e2c0e = {
                    'title': _0x486c29,
                    'icon': 'info',
                    'text': 'Level: ' + _0x40ae8d
                };
            }
            break;
        case 98:
            _0x5c2010 = Date.now() - _0x4c78c0;
            break;
        case 99:
            _0x4d199c(_0x53c538, _0x2b5647);
            break;
        case 100:
            let _0x1326ee = _0x53c538.getUint8(_0x2b5647++, true), _0x17bce1 = _0x53c538.getUint8(_0x2b5647++, true);
            if (_0x1326ee === 1) {
                switch (_0x17bce1) {
                case 1:
                    console.log('Succ purchase'), swal.fire({
                        'title': 'Purchase Successful!',
                        'icon': 'success'
                    }), _0x27fba3 |= Math.pow(2, _0x1cab76 - 1), _0x6b66cd(), console.log(_0x403000);
                    _0x1cab76 == 4 ? (_0x403000++, _0x403000 != 10 ? document.getElementById('maxManaPrice').innerText = (250000 + (_0x403000 + 1) * 75000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Coins' : (document.getElementById('purchaseBtn' + _0x1cab76).style['background-color'] = '#00cc00', document.getElementById('purchaseBtn' + _0x1cab76).innerText = 'Owned'), document.getElementById('pbb' + _0x403000).style['background-color'] = '#1aa7ec') : (document.getElementById('purchaseBtn' + _0x1cab76).style['background-color'] = '#00cc00', document.getElementById('purchaseBtn' + _0x1cab76).innerText = 'Owned');
                    break;
                case 200:
                    console.log('Not logged in'), swal.fire({
                        'title': 'You need to log in to buy items',
                        'icon': 'error'
                    });
                    break;
                case 201:
                    console.log('Invalid ID'), swal.fire({
                        'title': 'Invalid ID',
                        'icon': 'error'
                    });
                    break;
                case 202:
                    console.log('Not enough coins'), swal.fire({
                        'title': 'Not enough coins',
                        'icon': 'error'
                    });
                    break;
                case 203:
                    console.log('Already purchased');
                    break;
                }
            } else {
                _0x1326ee === 2 && (_0x17bce1 == 1 ? (localStorage.setItem('m', 0), swal.fire({
                    'icon': 'info',
                    'title': 'You have been unmuted.'
                })) : (localStorage.m = Date.now() + 7200000, swal.fire({
                    'icon': 'error',
                    'title': 'You have been muted.'
                })));
            }
            break;
        case 101:
            document.getElementById('plrCount1').innerText = _0x53c538.getUint8(_0x2b5647++) + ' / ' + _0x53c538.getUint8(_0x2b5647++);
            break;
        case 120:
            var _0x4ddcd4 = _0x53c538.getUint8(_0x2b5647, true);
            _0x4ddcd4 > 0 && (document.getElementById('regInfo').style.color = '#FFF', document.getElementById('regInfo').style['background-color'] = '#FF4D4D');
            switch (_0x4ddcd4) {
            case 0:
                document.getElementById('regInfo').style.color = '#005c06', document.getElementById('regInfo').style['background-color'] = '#abf5b0', document.getElementById('regInfo').innerText = 'Successfully registered!\nYou can now log into your account.', localStorage.setItem('username', document.getElementById('regUser').value), localStorage.setItem('pw', document.getElementById('regPassword').value), localStorage.setItem('sidoku', Date.now());
                break;
            case 1:
                document.getElementById('regInfo').innerText = 'Registration failed:\nUsername already exists';
                break;
            case 2:
                document.getElementById('regInfo').innerText = 'Registration failed:\nPassword too short (atleast 6 characters)';
                break;
            case 3:
                document.getElementById('regInfo').innerText = 'Registration failed:\nInvalid E-mail';
                break;
            case 4:
                document.getElementById('regInfo').innerText = 'Registration failed:\nUsername too short (atleast 3 characters)';
                break;
            case 5:
                document.getElementById('regInfo').innerText = 'Registration failed:\nUsername contains illegal characters (allowed: a-z, A-Z, 0-9, _)!';
                break;
            default:
                console.log('Failed Regis, code' + _0x4ddcd4), document.getElementById('regInfo').innerText = 'Registration failed:\nAn unexpected error has occoured, try again.';
                break;
            }
            $('#regInfo').fadeIn(200);
            break;
        case 121:
            var _0x4ddcd4 = _0x53c538.getUint8(_0x2b5647++, true);
            switch (_0x4ddcd4) {
            case 0:
                _0x591559 = 100, _0x10fbf4 = true, console.log('Succ login'), localStorage.setItem('username', document.getElementById('loginUser').value), localStorage.setItem('pw', document.getElementById('loginPassword').value), $('#choose-panel2').hide(), $('#login').hide(), $('#account-info').fadeIn(400), $('#challenge-panel').fadeIn(400), document.getElementById('username').innerText = document.getElementById('loginUser').value, _0x41d485(), _0x27fba3 = _0x53c538.getInt32(_0x2b5647, true), _0x2b5647 += 4;
                var _0x16113f = 1;
                for (let _0x306a82 = 0; _0x306a82 < 32; _0x306a82++) {
                    document.getElementById('purchaseBtn' + (_0x306a82 + 1)) && (_0x27fba3 & _0x16113f ? (document.getElementById('purchaseBtn' + (_0x306a82 + 1)).style['background-color'] = '#00cc00', document.getElementById('purchaseBtn' + (_0x306a82 + 1)).innerText = 'Owned') : (document.getElementById('purchaseBtn' + (_0x306a82 + 1)).style['background-color'] = '#458bff', document.getElementById('purchaseBtn' + (_0x306a82 + 1)).innerText = 'Purchase'));
                    _0x16113f *= 2;
                }
                _0x48d72e = _0x53c538.getInt32(_0x2b5647, true), _0x2b5647 += 4, _0x16113f = 1;
                for (let _0x2af3bd = 0; _0x2af3bd < 32; _0x2af3bd++) {
                    document.getElementById('wearableBtn' + (_0x2af3bd + 1)) && (_0x48d72e & _0x16113f ? ($('#wearableBtn' + (_0x2af3bd + 1)).removeClass('highlighted4'), document.getElementById('wearableBtn' + (_0x2af3bd + 1)).innerText = 'Equip Wearable') : ($('#wearableBtn' + (_0x2af3bd + 1)).addClass('highlighted4'), document.getElementById('wearableBtn' + (_0x2af3bd + 1)).innerText = 'Locked'));
                    _0x16113f *= 2;
                }
                _0x403000 = _0x53c538.getUint8(_0x2b5647++), document.getElementById('maxManaPrice').innerText = _0x403000 == 10 ? '1 000 000 Coins' : (250000 + (_0x403000 + 1) * 75000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Coins';
                for (let _0x287795 = 0; _0x287795 < _0x403000; _0x287795++) {
                    document.getElementById('pbb' + (_0x287795 + 1)).style['background-color'] = '#1aa7ec';
                }
                let _0x30e018 = _0x53c538.getUint8(_0x2b5647++, true);
                _0x2f7433 = _0x30e018 & 1, _0x4b66e1 = _0x30e018 & 2;
                if ($('#setGoldNickname').is(':checked')) {
                    setGoldenNickname(true);
                }
                let _0x7aa09b = JSON.parse(localStorage.getItem('wearables'));
                if (Array.isArray(_0x7aa09b)) {
                    for (let _0x3b28bc = 0; _0x3b28bc < _0x7aa09b.length; _0x3b28bc++) {
                        if (_0x2afebb.indexOf(_0x7aa09b[_0x3b28bc]) == -1) {
                            useWearable(_0x7aa09b[_0x3b28bc]);
                        }
                    }
                }
                _0x6b66cd();
                break;
            case 101:
                _0x591559 = 100, console.warn('Failed login 101'), document.getElementById('loginInfo').innerText = 'Login Failed!\nUsername does not exist or incorrect password', $('#loginInfo').fadeIn(200);
                break;
            case 102:
                console.warn('Failed login 102'), document.getElementById('loginInfo').innerText = 'Login Failed!\nAccount already logged in', $('#loginInfo').fadeIn(200);
                break;
            case 199:
                console.warn('Failed login 199'), document.getElementById('loginInfo').innerText = 'Login Failed!\nUnexpected error, try again', $('#loginInfo').fadeIn(200);
                break;
            case 2:
                _0x1a74fa = _0x53c538.getUint8(_0x2b5647++, true);
                var _0x4de71f = _0x53c538.getInt32(_0x2b5647++, true);
                document.getElementById('level').innerText = _0x1a74fa, document.getElementById('xp-bar').innerText = Math.round(_0x4de71f / (5 * (_0x1a74fa * _0x1a74fa) + 500 * _0x1a74fa + 1000) * 1000) / 10 + ' % ', document.getElementById('xp-bar').style.width = _0x4de71f / (5 * (_0x1a74fa * _0x1a74fa) + 500 * _0x1a74fa + 1000) * 100 + '%';
                break;
            case 3:
                var _0x1c3b4b = _0x53c538.getInt32(_0x2b5647, true);
                _0x2b5647 += 4, document.getElementById('coinText').innerText = _0x1c3b4b.toLocaleString('en-GB'), document.getElementById('shopCoinsDash').innerText = _0x1c3b4b.toLocaleString('en-GB');
                break;
            case 4:
                let _0x549393 = _0x53c538.getUint16(_0x2b5647, true);
                _0x2b5647 += 2, document.getElementById('challenge-innerProgress').style.width = Math.min(_0x549393 / 300 * 100, 100) + '%', document.getElementById('challenge-progressText').innerText = _0x549393 + ' / 300';
            }
            break;
        }
    }
    function _0x6b66cd() {
        ;
        _0x27fba3 & 1 ? (document.getElementById('setGoldNickname').classList.remove('invis'), document.getElementById('lockedGoldNickname').classList.add('invis')) : (document.getElementById('setGoldNickname').classList.add('invis'), document.getElementById('lockedGoldNickname').classList.remove('invis'));
        _0x4b66e1 ? (document.getElementById('setRedNickname').classList.remove('invis'), document.getElementById('lockedRedNickname').classList.add('invis')) : (document.getElementById('setRedNickname').classList.add('invis'), document.getElementById('lockedRedNickname').classList.remove('invis'));
        _0x2f7433 ? (document.getElementById('setBlackNickname').classList.remove('invis'), document.getElementById('lockedBlackNickname').classList.add('invis')) : (document.getElementById('setBlackNickname').classList.add('invis'), document.getElementById('lockedBlackNickname').classList.remove('invis'));
    }
    function _0x4d199c(_0x14e888, _0x108ece) {
        ;
        function _0x4fcada() {
            var _0x243f98 = '', _0x47f985;
            while ((_0x47f985 = _0x14e888.getUint16(_0x108ece, true)) != 0) {
                _0x108ece += 2;
                _0x243f98 += String.fromCharCode(_0x47f985);
            }
            return _0x108ece += 2, _0x243f98;
        }
        var _0x3e21a1 = _0x14e888.getUint8(_0x108ece++), _0x5d5a34 = null;
        _0x3e21a1 & 128 && (_0x5d5a34 = 'server');
        _0x3e21a1 & 64 && (_0x5d5a34 = 'admin');
        _0x3e21a1 & 32 && (_0x5d5a34 = 'moderator');
        _0x3e21a1 & 16 && (_0x5d5a34 = 'helper');
        _0x3e21a1 & 2 && (_0x5d5a34 = 'yt');
        _0x3e21a1 & 1 && (_0x5d5a34 = 'top1');
        var _0x50a12b = _0x14e888.getUint8(_0x108ece++), _0x4a0667 = _0x14e888.getUint8(_0x108ece++), _0x173ee3 = _0x14e888.getUint8(_0x108ece++), _0x3694e8 = (_0x50a12b << 16 | _0x4a0667 << 8 | _0x173ee3).toString(16);
        let _0x4a3902 = _0x14e888.getUint8(_0x108ece++);
        while (_0x3694e8.length < 6) {
            _0x3694e8 = '0' + _0x3694e8;
        }
        _0x3694e8 = '#' + _0x3694e8;
        _0x5449fb.push({
            'name': _0x4fcada(),
            'color': _0x3694e8,
            'colorId': _0x4a3902,
            'message': _0x4fcada(),
            'icon': _0x5d5a34,
            'time': Date.now()
        });
        _0x5563bd();
    }
    function _0x2bd897(_0x15038d) {
        ;
        for (var _0x4f9dc1 = 0; _0x4f9dc1 < _0x51c51b.length; _0x4f9dc1++) {
            _0x15038d = _0x15038d.replace(':' + _0x51c51b[_0x4f9dc1][0].toLocaleLowerCase() + ':', _0x51c51b[_0x4f9dc1][1]);
        }
        return _0x15038d;
    }
    function _0x5563bd() {
        ;
        if (_0x344219) {
            _0x3be989 = null;
            return;
        }
        _0x3be989 = document.createElement('canvas');
        var _0xd520 = _0x3be989.getContext('2d'), _0x4d19f4 = Math.min(Math.max(_0x34bec5 / 1200, 0.75), 0.9);
        _0x3be989.width = 1000 * _0x4d19f4;
        _0x3be989.height = 550 * _0x4d19f4;
        _0xd520.scale(_0x4d19f4, _0x4d19f4);
        var _0x808f87 = Date.now(), _0x1213ea = 0;
        if (_0x5449fb.length >= 1) {
            _0x1213ea = _0x5449fb[_0x5449fb.length - 1].time;
        } else {
            return;
        }
        var _0x15baa7 = _0x5449fb.length, _0x4988ae = _0x15baa7 - 15;
        if (_0x4988ae < 0) {
            _0x4988ae = 0;
        }
        for (var _0x488daf = 0; _0x488daf < _0x15baa7 - _0x4988ae; _0x488daf++) {
            var _0x1930fc = _0x5449fb[_0x488daf + _0x4988ae].icon;
            switch (_0x1930fc) {
            case 'server':
                _0xd520.drawImage(_0x5f0f9b, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            case 'admin':
                _0xd520.drawImage(_0xa0ccba, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            case 'moderator':
                _0xd520.drawImage(_0xa65b68, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            case 'yt':
                _0xd520.drawImage(_0x191809, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            case 'helper':
                _0xd520.drawImage(_0x5bf7e7, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            case 'top1':
                _0xd520.drawImage(_0x3b02f5, 15, _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
                break;
            }
            var _0x3657b1 = new _0x16fea1(18, _0x1930fc == 'server' ? '#cfcfcf' : _0xb4b504[_0x5449fb[_0x488daf + _0x4988ae].colorId]);
            _0x3657b1.setValue(_0x5449fb[_0x488daf + _0x4988ae].name);
            var _0x349d86 = _0x3657b1.getWidth(), _0x393fbb = _0x3657b1.render();
            _0xd520.drawImage(_0x393fbb, 15 + (_0x1930fc ? 22 : 0), _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x488daf - _0x4988ae));
            var _0x5998d5 = new _0x16fea1(18, _0x1930fc == 'server' ? '#1c77ff' : _0x194e56 ? '#cfcfcf' : '#292929');
            _0x5998d5.setValue(': ' + _0x2bd897(_0x5449fb[_0x488daf + _0x4988ae].message));
            _0x393fbb = _0x5998d5.render();
            _0xd520.drawImage(_0x393fbb, 15 + _0x349d86 * 1.8 + (_0x1930fc ? 22 : 0), _0x3be989.height / _0x4d19f4 - 24 * (_0x15baa7 - _0x4988ae - _0x488daf));
        }
    }
    function _0xf3a9ac(_0x1a21ce, _0x477840) {
        ;
        window.data = _0x1a21ce;
        _0x579782 = +new Date();
        var _0x3dbac0 = Math.random();
        _0x2ba9ca = false;
        var _0x281095 = _0x1a21ce.getUint16(_0x477840, true);
        _0x477840 += 2;
        for (_0x3cdda7 = 0; _0x3cdda7 < _0x281095; ++_0x3cdda7) {
            var _0x1f26bb = _0x19a7ff[_0x1a21ce.getUint32(_0x477840, true)], _0x2d2a48 = _0x19a7ff[_0x1a21ce.getUint32(_0x477840 + 4, true)];
            _0x477840 += 8;
            _0x1f26bb && _0x2d2a48 && (_0x2d2a48.destroy(), _0x2d2a48.ox = _0x2d2a48.x, _0x2d2a48.oy = _0x2d2a48.y, _0x2d2a48.oSize = _0x2d2a48.size, _0x2d2a48.nx = _0x1f26bb.x, _0x2d2a48.ny = _0x1f26bb.y, _0x2d2a48.nSize = _0x2d2a48.size, _0x2d2a48.updateTime = _0x579782);
        }
        for (var _0x3cdda7 = 0;;) {
            var _0x14432b = _0x1a21ce.getUint32(_0x477840, true);
            _0x477840 += 4;
            if (0 == _0x14432b) {
                break;
            }
            ++_0x3cdda7;
            var _0x34af18 = _0x1a21ce.getUint16(_0x477840, true);
            _0x477840 += 4;
            var _0x4bda2f, _0x4e4fbd, _0x53bd52 = _0x1a21ce.getInt32(_0x477840, true);
            _0x477840 += 4;
            _0x4e4fbd = _0x1a21ce.getInt32(_0x477840, true);
            _0x477840 += 4;
            _0x4bda2f = _0x1a21ce.getInt16(_0x477840, true);
            _0x477840 += 2;
            for (var _0x3a56c1 = _0x1a21ce.getUint8(_0x477840++), _0x4d9a4a = _0x1a21ce.getUint8(_0x477840++), _0x94bcf6 = _0x1a21ce.getUint8(_0x477840++), _0x555e8c = (_0x3a56c1 << 16 | _0x4d9a4a << 8 | _0x94bcf6).toString(16); 6 > _0x555e8c.length;) {
                _0x555e8c = '0' + _0x555e8c;
            }
            var _0x22055a = '#' + _0x555e8c, _0x3280fa = _0x1a21ce.getUint8(_0x477840++), _0x231e9a = _0x1a21ce.getUint8(_0x477840++), _0x3732f7 = _0x1a21ce.getUint8(_0x477840++), _0x5c71b2 = _0x1a21ce.getUint8(_0x477840++), _0x4cba40 = _0x1a21ce.getUint8(_0x477840++), _0x4591a2 = !!(_0x4cba40 & 1), _0x5f26c3 = !!(_0x4cba40 & 2), _0xc0b3fa = !!(_0x4cba40 & 4), _0x51df96 = !!(_0x4cba40 & 8), _0x5ec266 = !!(_0x4cba40 & 16), _0x425237 = !!(_0x4cba40 & 32), _0x337000 = _0x1a21ce.getUint8(_0x477840++), _0x57ee87 = !!(_0x337000 & 1), _0x5e94bc = !!(_0x337000 & 32), _0x5d364f = !!(_0x337000 & 16), _0x384ab2 = !!(_0x337000 & 128), _0x33f766 = !!(_0x337000 & 2), _0x2e3976 = !!(_0x337000 & 8), _0x4266d1 = !!(_0x337000 & 64), _0xfc726f = 0, _0x4626c3 = '#000000';
            _0x337000 & 4 && (_0xfc726f = _0x1a21ce.getUint16(_0x477840, true), _0x477840 += 2);
            for (var _0x526123, _0x228dee = '';;) {
                _0x526123 = _0x1a21ce.getUint16(_0x477840, true);
                _0x477840 += 2;
                if (0 == _0x526123) {
                    break;
                }
                _0x228dee += String.fromCharCode(_0x526123);
            }
            var _0x45ed2e = null;
            _0x19a7ff.hasOwnProperty(_0x14432b) ? (_0x45ed2e = _0x19a7ff[_0x14432b], _0x45ed2e.nameColorId != _0x3732f7 && _0x45ed2e.setName(_0x45ed2e.name, _0x3732f7, true), _0x45ed2e.updatePos(), _0x45ed2e.ox = _0x45ed2e.x, _0x45ed2e.oy = _0x45ed2e.y, _0x45ed2e.oSize = _0x45ed2e.size, _0x45ed2e.color = _0x22055a, _0x45ed2e.nameClr = _0x4626c3, _0x45ed2e.nameColorId = _0x3732f7, _0x45ed2e['_skin'] = _0xfc726f) : (_0x45ed2e = new _0x144540(_0x14432b, _0x53bd52, _0x4e4fbd, _0x4bda2f, _0x22055a, _0x228dee, _0xfc726f, _0x3732f7), _0x46c073.push(_0x45ed2e), _0x19a7ff[_0x14432b] = _0x45ed2e, _0x45ed2e.ka = _0x53bd52, _0x45ed2e.la = _0x4e4fbd, _0x45ed2e.colorId = _0x3280fa);
            _0x45ed2e.pid = _0x34af18;
            _0x45ed2e.type = _0x231e9a;
            _0x45ed2e.sliding = _0xc0b3fa;
            _0x45ed2e.particle = _0x51df96;
            _0x45ed2e.isVirus = _0x57ee87;
            _0x45ed2e.isEjected = _0x5e94bc;
            _0x45ed2e.hasShield = _0x33f766;
            _0x45ed2e.isFrozen = _0x384ab2;
            _0x45ed2e.isMelted = _0x5f26c3;
            _0x45ed2e.isAntiRec = _0x5ec266;
            _0x45ed2e.isRecombined = _0x2e3976;
            _0x45ed2e.isPush = _0x4591a2;
            _0x45ed2e.slowFade = _0x4266d1;
            _0x45ed2e.invisible = _0x425237;
            _0x45ed2e.wearables = _0x5c71b2;
            _0x45ed2e.isAgitated;
            _0x45ed2e.nx = _0x53bd52;
            _0x45ed2e.ny = _0x4e4fbd;
            _0x45ed2e.setSize(_0x4bda2f);
            _0x45ed2e.updateCode = _0x3dbac0;
            _0x45ed2e.updateTime = _0x579782;
            _0x45ed2e.flag = _0x337000;
            _0x228dee && _0x45ed2e.setName(_0x228dee, _0x3732f7);
            _0x45ed2e.type == 19 && (_0x45ed2e.skinId = Math.ceil(Math.random() * 4));
            allPlayerCells.indexOf(_0x45ed2e) == -1 && _0x45ed2e.type == 0 && allPlayerCells.push(_0x45ed2e);
            -1 != _0x45243f.indexOf(_0x14432b) && -1 == _0x24a4e2.indexOf(_0x45ed2e) && (_0x24a4e2.push(_0x45ed2e), 1 == _0x24a4e2.length && (_0x4cca25 = _0x45ed2e.x, _0x45c70f = _0x45ed2e.y));
        }
        _0x281095 = _0x1a21ce.getUint32(_0x477840, true);
        _0x477840 += 4;
        for (_0x3cdda7 = 0; _0x3cdda7 < _0x281095; _0x3cdda7++) {
            var _0x3d28d7 = _0x1a21ce.getUint32(_0x477840, true);
            _0x477840 += 4;
            _0x45ed2e = _0x19a7ff[_0x3d28d7];
            null != _0x45ed2e && _0x45ed2e.destroy();
        }
    }
    function _0x4f9807() {
        var _0x171d56;
        if (_0x561658()) {
            _0x171d56 = _0x1e17d7 - _0x34bec5 / 2;
            var _0x34bddb = _0x3fd4de - _0x1c4a5e / 2;
            64 <= _0x171d56 * _0x171d56 + _0x34bddb * _0x34bddb && !(0.01 > Math.abs(_0x4796a2 - _0x50241c) && 0.01 > Math.abs(_0x58bd6f - _0x50fe53)) && (_0x4796a2 = _0x50241c, _0x58bd6f = _0x50fe53, _0x171d56 = _0x23c959(21), _0x171d56.setUint8(0, 16), _0x171d56.setFloat64(1, _0x50241c, true), _0x171d56.setFloat64(9, _0x50fe53, true), _0x171d56.setUint32(17, 0, true), _0xec9151(_0x171d56));
        }
    }
    function _0x4a37c9() {
        ;
        if (_0x561658() && null != _0x373009) {
            var _0x2491e4 = _0x23c959(1 + 2 * _0x373009.length);
            _0x2491e4.setUint8(0, 5);
            for (var _0x3fb7f9 = 0; _0x3fb7f9 < _0x373009.length; ++_0x3fb7f9) {
                _0x2491e4.setUint16(1 + 2 * _0x3fb7f9, _0x373009.charCodeAt(_0x3fb7f9), true);
            }
            _0xec9151(_0x2491e4);
        }
    }
    function _0x26dd71(_0x3207b3) {
        ;
        if (_0x561658() && _0x3207b3.length < 200 && _0x3207b3.length > 0 && !_0x344219) {
            if (parseInt(localStorage.m) > Date.now() && _0x3207b3.charAt(0) != '/') {
                _0x3207b3 = 'lsmtrue';
            }
            _0x3207b3 == '/fps' && (_0x3207b3 = 'has ' + _0x277dc9 + ' fps.');
            _0x3207b3 == '/ping' && (_0x3207b3 = 'has a ping of ' + _0x5c2010 + ' ms.');
            _0x3207b3 == '/discord' && setTimeout(() => {
                ;
                Swal.fire({
                    'icon': 'info',
                    'html': '\n                    <h4><span style="color: #ffffff">Join our <a target="_blank" href="https://discord.gg/Fxre3xrujE">Discord Server</a>!</span></h4>\n                    \n                    '
                });
            }, 500);
            var _0x5e2c3e = _0x23c959(2 + 2 * _0x3207b3.length), _0x39fc6e = 0;
            _0x5e2c3e.setUint8(_0x39fc6e++, 99);
            _0x5e2c3e.setUint8(_0x39fc6e++, 0);
            for (var _0x5086f6 = 0; _0x5086f6 < _0x3207b3.length; ++_0x5086f6) {
                _0x5e2c3e.setUint16(_0x39fc6e, _0x3207b3.charCodeAt(_0x5086f6), true);
                _0x39fc6e += 2;
            }
            _0xec9151(_0x5e2c3e);
        }
    }
    function _0x561658() {
        ;
        return null != _0x337d04 && _0x337d04.readyState == _0x337d04.OPEN;
    }
    function _0x4d32f0(_0x17a739) {
        ;
        if (_0x561658()) {
            var _0x5a0bb4 = _0x23c959(1);
            _0x5a0bb4.setUint8(0, _0x17a739);
            _0xec9151(_0x5a0bb4);
        }
    }
    function _0x128d1e() {
        _0x383766 = setInterval(() => {
            _0x4d32f0(10);
        }, 1000);
    }
    _0x128d1e();
    function _0x2364f9() {
        ;
        _0xb9906f();
        _0x3cb32e.requestAnimationFrame(_0x2364f9);
    }
    function _0x291361() {
        ;
        window.scrollTo(0, 0);
        _0x34bec5 = _0x3cb32e.innerWidth;
        _0x1c4a5e = _0x3cb32e.innerHeight;
        _0x178b2e.width = _0x34bec5;
        _0x178b2e.height = _0x1c4a5e;
        _0xb9906f();
        $('#panel').css('transform', 'scale(' + window.innerWidth / 2560 + ')');
        $('#powerup-display').css('transform', 'scale(' + window.innerWidth / 2560 + ')');
        $('#stats-panel').css('transform', 'scale(' + window.innerWidth / 2560 + ')');
        $('#death-panel').css('transform', 'scale(' + window.innerWidth / 2560 + ')');
    }
    function _0x1d6822() {
        var _0x49b1fb;
        return _0x49b1fb = Math.max(_0x1c4a5e / 1080, _0x34bec5 / 1920), _0x49b1fb * _0x2a7358;
    }
    function _0x31876d() {
        ;
        _0x4f7253 || !_0x24a4e2.length ? newViewZoom = 300 : newViewZoom = 300 + _0x26e2ed() / 500;
        newViewZoom = Math.pow(Math.min(64 / newViewZoom, 1), 0.35) * _0x1d6822();
        _0x3bda10 = (9 * _0x3bda10 + newViewZoom) / 10;
    }
    function _0xb9906f() {
        var _0x192bd0, _0x3b485b = Date.now();
        ++_0x4141d8;
        _0x579782 = _0x3b485b;
        if (_0x4141d8 > 144 && _0x277dc9 < 60 && _0x4141d8 % Math.ceil(60 / _0x277dc9) !== 0) {
            return;
        }
        _0x31876d();
        if (0 < _0x24a4e2.length) {
            var _0x59a1f7 = _0x192bd0 = 0;
            for (var _0x365d2a = 0; _0x365d2a < _0x24a4e2.length; _0x365d2a++) {
                _0x24a4e2[_0x365d2a].updatePos();
                _0x192bd0 += _0x24a4e2[_0x365d2a].x / _0x24a4e2.length;
                _0x59a1f7 += _0x24a4e2[_0x365d2a].y / _0x24a4e2.length;
            }
            _0x475b1d = _0x192bd0;
            _0x2477f0 = _0x59a1f7;
            _0x4e590d = _0x3bda10;
            _0x4cca25 = (_0x4cca25 + _0x192bd0) / 2;
            _0x45c70f = (_0x45c70f + _0x59a1f7) / 2;
        } else {
            _0x4cca25 = (29 * _0x4cca25 + _0x475b1d) / 30;
            _0x45c70f = (29 * _0x45c70f + _0x2477f0) / 30;
        }
        _0x59df55();
        _0x1f1b93 || _0x284242.clearRect(0, 0, _0x34bec5, _0x1c4a5e);
        _0x1f1b93 ? _0x194e56 ? (_0x284242.fillStyle = '#111111', _0x284242.globalAlpha = 0.05, _0x284242.fillRect(0, 0, _0x34bec5, _0x1c4a5e), _0x284242.globalAlpha = 1) : (_0x284242.fillStyle = '#F2FBFF', _0x284242.globalAlpha = 0.05, _0x284242.fillRect(0, 0, _0x34bec5, _0x1c4a5e), _0x284242.globalAlpha = 1) : _0xa57c5a();
        _0x284242.save();
        _0x284242.translate(_0x34bec5 / 2, _0x1c4a5e / 2);
        _0x284242.scale(_0x3bda10, _0x3bda10);
        _0x284242.translate(-_0x4cca25, -_0x45c70f);
        _0x290972 && _0xa6b4d4(_0x284242);
        _0x46c073.sort(function (_0x40559a, _0x33ea11) {
            ;
            return _0x40559a.size === _0x33ea11.size ? _0x40559a.id - _0x33ea11.id : _0x40559a.size - _0x33ea11.size;
        });
        for (_0x365d2a = 0; _0x365d2a < _0x46c073.length; _0x365d2a++) {
            _0x46c073[_0x365d2a].drawOneCell(_0x284242);
        }
        if (_0x41acda) {
            _0x12cae1 = (3 * _0x12cae1 + _0x2e0915) / 4;
            _0x4e2ddc = (3 * _0x4e2ddc + _0x4fd397) / 4;
            _0x284242.save();
            _0x284242.strokeStyle = '#FFAAAA';
            _0x284242.lineWidth = 10;
            _0x284242.lineCap = 'round';
            _0x284242.lineJoin = 'round';
            _0x284242.globalAlpha = 0.5;
            _0x284242.beginPath();
            for (_0x365d2a = 0; _0x365d2a < _0x24a4e2.length; _0x365d2a++) {
                _0x284242.moveTo(_0x24a4e2[_0x365d2a].x, _0x24a4e2[_0x365d2a].y);
                _0x284242.lineTo(_0x12cae1, _0x4e2ddc);
            }
            _0x284242.stroke();
            _0x284242.restore();
        }
        _0x284242.restore();
        _0x31a427 && _0x31a427.width && _0x284242.drawImage(_0x31a427, _0x34bec5 - _0x31a427.width - 10, 10);
        if (_0x3be989 != null) {
            _0x284242.drawImage(_0x3be989, 0, _0x1c4a5e - _0x3be989.height - 50);
        }
        _0x855d0f = Math.max(_0x855d0f, _0x26e2ed());
        userMass = _0x26e2ed();
        if (~~(_0x855d0f / 100) > _0x24997d) {
            _0x24997d = ~~(_0x855d0f / 100);
        }
        let _0x1cce0d = window.innerHeight / 1440;
        (true || 0 != _0x855d0f) && (_0x3735e6 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0x4443d6 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0x22844f = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0xeab01e = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0x4d9339 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0x57bf12 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#FFFFFF'), _0x2b0e35 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), _0x1373bd ? '#00FF00' : '#FF0000'), _0x21a5f0 = new _0x16fea1(Math.ceil(_0x1cce0d * 24), '#AAFFEE'), _0xeab01e.setValue('Mass: ' + ~~(userMass / 100)), _0x22844f.setValue('Score: ' + ~~(_0x855d0f / 100)), _0x3735e6.setValue('Loaded entities: ' + _0x46c073.length), _0x4443d6.setValue('FPS: ' + _0x277dc9 + ' | Ping: ' + _0x5c2010), _0x4d9339.setValue('Cells: ' + _0x24a4e2.length), _0x57bf12.setValue('You Control: Yourself'), _0x2b0e35.setValue('Frozen: ' + _0x1373bd), _0x21a5f0.setValue('Mana: ' + _0x3571bc + ' / ' + _0x48bb20 + ' (' + _0x4c8898 + 'x)'), _0x59a1f7 = _0x22844f.render(), _0x365d2a = _0xeab01e.render(), f = _0x3735e6.render(), g = _0x4d9339.render(), h = _0x57bf12.render(), j = _0x21a5f0.render(), _0x3adf6e = _0x4443d6.render(), k = _0x2b0e35.render(), _0x192bd0 = j.width, _0x284242.globalAlpha = 0.2, _0x284242.fillStyle = '#000000', _0x284242.fillRect(10, Math.ceil(_0x1cce0d * 10), _0x192bd0 + 30, Math.ceil(_0x1cce0d * 244)), _0x284242.globalAlpha = 1, _0x284242.drawImage(f, 15, Math.ceil(_0x1cce0d * 15)), _0x284242.drawImage(_0x59a1f7, 15, Math.ceil(_0x1cce0d * 45)), _0x284242.drawImage(_0x365d2a, 15, Math.ceil(_0x1cce0d * 75)), _0x284242.drawImage(g, 15, Math.ceil(_0x1cce0d * 105)), _0x284242.drawImage(h, 15, Math.ceil(_0x1cce0d * 135)), _0x284242.drawImage(k, 15, Math.ceil(_0x1cce0d * 165)), _0x284242.drawImage(_0x3adf6e, 15, Math.ceil(_0x1cce0d * 195)), _0x284242.drawImage(j, 15, Math.ceil(_0x1cce0d * 225)));
        _0x44a2b0(_0x284242);
        _0x3e8910(_0x284242);
        var _0x3a86f7 = Date.now() - _0x3b485b;
        _0x3a86f7 > 16.666666666666668 ? _0x164a9c -= 0.01 : _0x3a86f7 < 15.384615384615385 && (_0x164a9c += 0.01);
        0.4 > _0x164a9c && (_0x164a9c = 0.4);
        1 < _0x164a9c && (_0x164a9c = 1);
    }
    function _0x3e8910(_0x440be0) {
        ;
        _0x440be0.save();
        if (_0x54fe41) {
            for (var _0x1d76c6 = 0; _0x1d76c6 < _0x22158f.length; _0x1d76c6++) {
                var _0x1fadee = _0x22158f[_0x1d76c6];
                _0x1fadee.identifier == _0x3f2335 ? (_0x440be0.beginPath(), _0x440be0.strokeStyle = '#0096ff', _0x440be0.lineWidth = 6, _0x440be0.arc(_0x4f9b0c.x, _0x4f9b0c.y, 40, 0, Math.PI * 2, true), _0x440be0.stroke(), _0x440be0.beginPath(), _0x440be0.strokeStyle = '#0096ff', _0x440be0.lineWidth = 2, _0x440be0.arc(_0x4f9b0c.x, _0x4f9b0c.y, 60, 0, Math.PI * 2, true), _0x440be0.stroke(), _0x440be0.beginPath(), _0x440be0.strokeStyle = '#0096ff', _0x440be0.arc(_0x1193b4.x, _0x1193b4.y, 40, 0, Math.PI * 2, true), _0x440be0.stroke()) : (_0x440be0.beginPath(), _0x440be0.beginPath(), _0x440be0.strokeStyle = '#0096ff', _0x440be0.lineWidth = '6', _0x440be0.arc(_0x1fadee.clientX, _0x1fadee.clientY, 40, 0, Math.PI * 2, true), _0x440be0.stroke());
            }
        }
        _0x440be0.restore();
    }
    function _0xa57c5a() {
        var _0x92eb1 = _0x30be0d ? 1000 : 500;
        _0x284242.lineWidth = _0x30be0d ? 8 : 5;
        _0x284242.fillStyle = _0x194e56 ? '#000000' : '#666666';
        _0x284242.fillRect(0, 0, _0x34bec5, _0x1c4a5e);
        _0x284242.save();
        _0x284242.translate(_0x34bec5 / 2, _0x1c4a5e / 2);
        _0x284242.scale(_0x3bda10, _0x3bda10);
        _0x284242.translate(-_0x4cca25, -_0x45c70f);
        _0x284242.fillStyle = _0x194e56 ? '#121212' : '#F2FBFF';
        _0x284242.beginPath();
        if (_0x138f7c.length > 0) {
            let _0x6ded85 = [
                _0x3542dd + _0x138f7c[0][0],
                _0x40d672 + _0x138f7c[0][1]
            ];
            _0x284242.moveTo(_0x6ded85[0], _0x6ded85[1]);
            for (var _0x37a251 = 1; _0x37a251 < _0x138f7c.length; _0x37a251++) {
                _0x284242.lineTo(_0x6ded85[0] + _0x138f7c[_0x37a251][0], _0x6ded85[1] + _0x138f7c[_0x37a251][1]);
                _0x6ded85[0] += _0x138f7c[_0x37a251][0];
                _0x6ded85[1] += _0x138f7c[_0x37a251][1];
            }
        }
        _0x284242.fill();
        _0x284242.restore();
        if (_0x412d29) {
            _0x284242.save();
            _0x284242.scale(_0x3bda10, _0x3bda10);
            _0x284242.strokeStyle = _0x194e56 ? '#AAAAAA' : '#000000';
            _0x284242.globalAlpha = 0.4;
            var _0xe4a94e = _0x34bec5 / _0x3bda10, _0x221859 = _0x1c4a5e / _0x3bda10;
            for (var _0x542251 = -0.5 + (-_0x4cca25 + _0xe4a94e / 2) % _0x92eb1; _0x542251 < _0xe4a94e; _0x542251 += _0x92eb1) {
                _0x284242.moveTo(_0x542251, 0);
                _0x284242.lineTo(_0x542251, _0x221859);
            }
            _0x284242.stroke();
            _0x284242.beginPath();
            for (_0x542251 = -0.5 + (-_0x45c70f + _0x221859 / 2) % _0x92eb1; _0x542251 < _0x221859; _0x542251 += _0x92eb1) {
                _0x284242.moveTo(0, _0x542251);
                _0x284242.lineTo(_0xe4a94e, _0x542251);
            }
            _0x284242.stroke();
            _0x284242.restore();
        }
    }
    function _0xa6b4d4(_0x105cca) {
        ;
        _0x105cca.strokeStyle = '#0095ff';
        _0x105cca.beginPath();
        _0x105cca.lineWidth = 50;
        _0x105cca.lineCap = 'round';
        _0x105cca.lineJoin = 'round';
        if (_0x561658()) {
            if (_0x138f7c.length > 0) {
                let _0x3b9060 = [
                    _0x3542dd + _0x138f7c[0][0],
                    _0x40d672 + _0x138f7c[0][1]
                ];
                _0x105cca.moveTo(_0x3b9060[0], _0x3b9060[1]);
                for (var _0x4f0555 = 1; _0x4f0555 < _0x138f7c.length; _0x4f0555++) {
                    _0x105cca.lineTo(_0x3b9060[0] + _0x138f7c[_0x4f0555][0], _0x3b9060[1] + _0x138f7c[_0x4f0555][1]);
                    _0x3b9060[0] += _0x138f7c[_0x4f0555][0];
                    _0x3b9060[1] += _0x138f7c[_0x4f0555][1];
                }
            }
        }
        _0x105cca.stroke();
        _0x105cca.closePath();
    }
    function _0x44a2b0(_0x55a075) {
        ;
        if (_0x3ddf7a && _0x12d60e.width) {
            var _0x1f5f5c = ~~(_0x34bec5 / 7);
            _0x55a075.drawImage(_0x12d60e, _0x34bec5 - _0x1f5f5c, _0x1c4a5e - _0x1f5f5c, _0x1f5f5c, _0x1f5f5c);
        }
        if (_0x3ddf7a && _0x12d60e.width) {
            var _0x1f5f5c = ~~(_0x34bec5 / 7);
            _0x55a075.drawImage(_0x3132e1, _0x34bec5 - _0x1f5f5c, _0x1c4a5e - 2 * _0x1f5f5c - 10, _0x1f5f5c, _0x1f5f5c);
        }
    }
    function _0x26e2ed() {
        ;
        for (var _0x2b8091 = 0, _0xc5cfa7 = 0; _0xc5cfa7 < _0x24a4e2.length; _0xc5cfa7++) {
            _0x2b8091 += _0x24a4e2[_0xc5cfa7].nSize * _0x24a4e2[_0xc5cfa7].nSize;
        }
        return _0x2b8091;
    }
    function _0x5e67a8() {
        ;
        _0x31a427 = null;
        var _0x26df20 = null != _0x33a804;
        if (_0x26df20 || 0 != _0x3d4846.length) {
            if (_0x26df20 || _0x23bf3a) {
                _0x31a427 = document.createElement('canvas');
                var _0x20a7b6 = _0x31a427.getContext('2d'), _0x2f2482 = 60;
                _0x2f2482 = !_0x26df20 ? _0x2f2482 + 24 * _0x3d4846.length : _0x2f2482 + 180;
                var _0x4f3c18 = Math.min(0.22 * _0x1c4a5e, Math.min(200, 0.3 * _0x34bec5)) * 0.005;
                _0x31a427.width = 200 * _0x4f3c18;
                _0x31a427.height = _0x2f2482 * _0x4f3c18;
                _0x20a7b6.scale(_0x4f3c18, _0x4f3c18);
                _0x20a7b6.globalAlpha = 0.4;
                _0x20a7b6.fillStyle = '#000000';
                _0x20a7b6.fillRect(0, 0, 200, _0x2f2482);
                _0x20a7b6.globalAlpha = 1;
                _0x20a7b6.fillStyle = '#FFFFFF';
                var _0x4ee818 = 'Leaderboard';
                _0x20a7b6.font = '30px Ubuntu';
                _0x20a7b6.fillText(_0x4ee818, 100 - _0x20a7b6.measureText(_0x4ee818).width * 0.5, 40);
                var _0x539d3a, _0x108414;
                if (!_0x26df20) {
                    for (_0x20a7b6.font = '20px Ubuntu', _0x539d3a = 0, _0x108414 = _0x3d4846.length; _0x539d3a < _0x108414; ++_0x539d3a) {
                        _0x4ee818 = _0x3d4846[_0x539d3a].name || 'An unnamed cell';
                        !_0x23bf3a && (_0x4ee818 = 'An unnamed cell');
                        var _0x35d5cf = -1 != _0x45243f.indexOf(_0x3d4846[_0x539d3a].id);
                        if (_0x35d5cf) {
                            _0x24a4e2[0].name && (_0x4ee818 = _0x24a4e2[0].name);
                        }
                        _0x35d5cf ? _0x20a7b6.fillStyle = '#FFAAAA' : _0x20a7b6.fillStyle = '#ffffff';
                        if (!noRanking) {
                            _0x4ee818 = _0x539d3a + 1 + '. ' + _0x4ee818;
                        }
                        var _0x58bff7 = _0x20a7b6.measureText(_0x4ee818).width > 200 ? 2 : 100 - _0x20a7b6.measureText(_0x4ee818).width * 0.5;
                        _0x20a7b6.fillText(_0x4ee818, _0x58bff7, 70 + 24 * _0x539d3a);
                    }
                } else {
                    for (_0x539d3a = _0x4ee818 = 0; _0x539d3a < _0x33a804.length; ++_0x539d3a) {
                        var _0x53047c = _0x4ee818 + _0x33a804[_0x539d3a] * Math.PI * 2;
                        _0x20a7b6.fillStyle = _0x3d97a1[_0x539d3a + 1];
                        _0x20a7b6.beginPath();
                        _0x20a7b6.moveTo(100, 140);
                        _0x20a7b6.arc(100, 140, 80, _0x4ee818, _0x53047c, false);
                        _0x20a7b6.fill();
                        _0x4ee818 = _0x53047c;
                    }
                }
            }
        }
    }
    function _0x144540(_0x45bc88, _0x5135c9, _0x5284e0, _0x4db251, _0x138450, _0x1b09c0, _0x29c51c, _0x1967c8) {
        ;
        this.id = _0x45bc88;
        this.ox = this.x = _0x5135c9;
        this.oy = this.y = _0x5284e0;
        this.oSize = this.size = _0x4db251;
        this.color = _0x138450;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(_0x1b09c0, _0x1967c8);
        this['_skin'] = _0x29c51c;
        this.nameColorId = _0x1967c8;
        this.time = Date.now();
    }
    function _0x16fea1(_0x5cc8d3, _0x48ff83, _0x7d7490, _0x272e23) {
        ;
        _0x5cc8d3 && (this['_size'] = _0x5cc8d3);
        _0x48ff83 && (this['_color'] = _0x48ff83);
        this['_stroke'] = !!_0x7d7490;
        _0x272e23 && (this['_strokeColor'] = _0x272e23);
    }
    var _0x549136 = _0x3cb32e.location.protocol, _0x458e36 = 'https:' == _0x549136, _0x178b2e, _0x284242, _0x3c5362, _0x31a427, _0x3be989, _0x34bec5, _0x1c4a5e, _0x337d04 = null, _0x4cca25 = 0, _0x45c70f = 0, _0x45243f = [], _0x24a4e2 = [], _0x19a7ff = {}, _0x46c073 = [], _0x3b120a = [], _0x3d4846 = [], _0x5449fb = [], _0x1e17d7 = 0, _0x3fd4de = 0, _0x50241c = -1, _0x50fe53 = -1, _0x4141d8 = 0, _0x1a40d1 = 0, _0x277dc9 = 0, _0x4c78c0 = 0, _0x5c2010 = ' / ', _0x579782 = 0, _0x373009 = null, _0x138f7c = [], _0x3542dd = 0, _0x40d672 = 0, _0x1370a = 10000, _0x34043f = 10000, _0x3bda10 = 1, _0x5cde4b = true, _0x23bf3a = true, _0x39086d = true, _0x1cd92a = true, _0x3fe011 = false, _0x2ba9ca = false, _0x855d0f = 0, _0x194e56 = true, _0x2c21b6 = true, _0x1a5b36 = false, _0x412d29 = false, _0x30be0d = false, _0x4f7253 = true, _0x290972 = true, _0x3b9e66 = false, _0x44da90 = false, _0x354750 = false, _0x1efcaf = false, _0x344219 = false, _0x475b1d = _0x4cca25 = ~~(_0x3542dd + _0x1370a), _0x2477f0 = _0x45c70f = ~~(_0x40d672 + _0x34043f), _0x4e590d = 1, _0x33a804 = null, _0x52b1e2 = false, _0x1231bc = true, _0x41acda = false, _0x2e0915 = 0, _0x4fd397 = 0, _0x12cae1 = 0, _0x4e2ddc = 0, _0x3d97a1 = [
            '#333333',
            '#FF3333',
            '#33FF33',
            '#3333FF'
        ], _0x1f1b93 = false, _0x2a7358 = 0.2, _0x3ddf7a = 'ontouchstart' in _0x3cb32e && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), _0x12d60e = new Image(), _0x3132e1 = new Image(), _0x3b02f5 = new Image(), _0x5bf7e7 = new Image(), _0xa65b68 = new Image(), _0x191809 = new Image(), _0xa0ccba = new Image(), _0x5f0f9b = new Image();
    shieldImg128 = new Image();
    shieldImg512 = new Image();
    antifreezeImg = new Image();
    antifreezeImg128 = new Image();
    freezeImg = new Image();
    antiRecImg = new Image();
    antiRecImg128 = new Image();
    recImg = new Image();
    pushImg = new Image();
    noRanking = false;
    _0x12d60e.src = 'assets/img/split.png';
    _0x3132e1.src = 'assets/img/feed.png';
    shieldImg128.src = './animations/shield128.png';
    shieldImg512.src = './animations/shield512.png';
    antifreezeImg128.src = './animations/antifreeze128.png';
    antifreezeImg.src = './animations/antifreeze.png';
    freezeImg.src = './animations/frozen.png';
    antiRecImg.src = './animations/antirec.png';
    antiRecImg128.src = './animations/antirec128.png';
    recImg.src = './animations/recombine.png';
    pushImg.src = './animations/push.png';
    let _0xac73a7 = new Image();
    _0xac73a7.src = './wearables/1.png';
    let _0x30b05e = [{
            'img': _0xac73a7,
            'scale': 1.46,
            'mx': 1.425,
            'my': 2.8
        }];
    _0xa65b68.src = 'assets/img/chat_icons/mod.png';
    _0xa0ccba.src = 'assets/img/chat_icons/admin.png';
    _0x5f0f9b.src = 'assets/img/chat_icons/info.png';
    _0x5bf7e7.src = 'assets/img/chat_icons/helper.png';
    _0x3b02f5.src = 'assets/img/chat_icons/rank1.png';
    _0x191809.src = 'assets/img/chat_icons/yt.png';
    var _0x4ddbbd = document.createElement('canvas');
    _0x3cb32e.isSpectating = false;
    _0x3cb32e.setNick = function (_0x41e26f) {
        ;
        clearInterval(_0x3f065b);
        _0x561658() && (_0x485e21 = Date.now(), _0x3ee98f(), _0x373009 = _0x41e26f, _0x4a37c9(), _0x855d0f = 0);
    };
    $(window).load(() => {
        ;
        document.getElementById('setGoldNickname').addEventListener('change', _0x47d851 => {
            ;
            if (_0x47d851.isTrusted) {
                setGoldenNickname($('#' + _0x47d851.target.id).is(':checked'));
            }
        });
        document.getElementById('setRedNickname').addEventListener('change', _0x5bf63c => {
            ;
            if (_0x5bf63c.isTrusted) {
                setRedNickname($('#' + _0x5bf63c.target.id).is(':checked'));
            }
        });
        document.getElementById('setBlackNickname').addEventListener('change', _0x37fdb8 => {
            ;
            if (_0x37fdb8.isTrusted) {
                setBlackNickname($('#' + _0x37fdb8.target.id).is(':checked'));
            }
        });
    });
    _0x3cb32e.purchase = function (_0x43996c) {
        ;
        _0x1cab76 = _0x43996c;
        let _0x11d8eb = _0x23c959(2);
        _0x11d8eb.setUint8(0, 50);
        _0x11d8eb.setUint8(1, _0x43996c);
        _0xec9151(_0x11d8eb);
    };
    _0x3cb32e.setSkins = function (_0x389212) {
        _0x5cde4b = _0x389212;
    };
    _0x3cb32e.setNames = function (_0x10b9c6) {
        _0x23bf3a = _0x10b9c6;
    };
    _0x3cb32e.setWearables = function (_0x3860f8) {
        _0x39086d = _0x3860f8;
    };
    _0x3cb32e.setParticles = function (_0x322420) {
        _0x1cd92a = _0x322420;
    };
    _0x3cb32e.setDarkTheme = function (_0x5d91b1) {
        _0x194e56 = _0x5d91b1;
    };
    _0x3cb32e.setColors = function (_0x554d02) {
        _0x3fe011 = _0x554d02;
    };
    _0x3cb32e.setShowMass = function (_0x1262e0) {
        _0x2c21b6 = _0x1262e0;
    };
    _0x3cb32e.setTransparentCells = function (_0x379b25) {
        _0x1a5b36 = _0x379b25;
    };
    _0x3cb32e.setBigGrid = function (_0x286c3c) {
        _0x30be0d = _0x286c3c;
    };
    _0x3cb32e.setGrid = function (_0x1a88b6) {
        _0x412d29 = _0x1a88b6;
    };
    _0x3cb32e.setFixedZoom = function (_0x5807d5) {
        _0x4f7253 = _0x5807d5;
    };
    _0x3cb32e.setBorder = function (_0x2c9cce) {
        _0x290972 = _0x2c9cce;
    };
    _0x3cb32e.setAntiLag = function (_0xe19e97) {
        _0x3b9e66 = _0xe19e97;
        _0x4d32f0(100);
    };
    setGoldenNickname = function (_0x3b446b) {
        ;
        _0x27fba3 & 1 && (_0x44da90 = _0x3b446b, _0x4d32f0(101));
        _0x41d485();
        $('#setGoldNickname').prop('checked', _0x44da90 && _0x27fba3 & 1);
    };
    setRedNickname = function (_0x2869b5) {
        ;
        _0x4b66e1 && (_0x1efcaf = _0x2869b5, _0x4d32f0(102));
        _0x41d485();
        $('#setRedNickname').prop('checked', _0x1efcaf && _0x4b66e1);
    };
    setBlackNickname = function (_0x235054) {
        ;
        _0x2f7433 && (_0x354750 = _0x235054, _0x4d32f0(103));
        _0x41d485();
        $('#setBlackNickname').prop('checked', _0x354750 && _0x2f7433);
    };
    _0x3cb32e.setChatHide = function (_0x11b8a0) {
        ;
        _0x344219 = _0x11b8a0;
        _0x344219 ? _0x4a4f39('#chat_textbox').hide() : _0x4a4f39('#chat_textbox').show();
    };
    _0x3cb32e.spectate = function () {
        ;
        _0x561658() && (_0x373009 = null, _0x3cb32e.isSpectating = true, _0x4d32f0(1), _0x3ee98f());
    };
    _0x3cb32e.setAcid = function (_0x249cae) {
        _0x1f1b93 = _0x249cae;
    };
    _0x3cb32e.easterSwal = () => {
        ;
        Swal.fire({
            'icon': 'warning',
            'title': 'The Easter Egg Hunt has begun!',
            'html': '<h4><span style="color: #f5bd78">Find 300 Easter Eggs on the Map to unlock the special Bunny Ears Wearable!</span></h4>\n            <img src="assets/img/easter_bunny.png" style="width:319px; height: 300px; margin-top: 5%;">',
            'backdrop': 'linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5))',
            'width': '530px'
        });
    };
    _0x3cb32e.openSkinsList = function (_0x14e7a1) {
        ;
        if (!_0x576f47) {
            document.getElementById('freeskinlist').innerHTML = '';
            for (var _0x14833a = 1; _0x14833a < 41; _0x14833a++) {
                let _0x2758d1 = '\n                <div class="shop-skin">\n                    <img class="shop-skinImage" alt="Skin ' + _0x14833a + '" src="./skins/' + _0x14833a + '.png">\n                    <div id="skinBtn' + _0x14833a + '" class="shop-useSkinBtn" role="button" onclick="useSkin(' + _0x14833a + ')">Use Skin</div>\n                </div>';
                document.getElementById('freeskinlist').innerHTML += _0x2758d1;
            }
            for (var _0x14833a = 1; _0x14833a < 21; _0x14833a++) {
                let _0x253dd3 = '\n                <div class="shop-skin">\n                    <img class="shop-skinImage" alt="Skin ' + (_0x14833a + 1000) + '" src="./skins/' + (_0x14833a + 1000) + '.png">\n                    <div id="skinBtn' + (_0x14833a + 1000) + '" class="shop-useSkinBtn" ' + (_0x1a74fa >= _0x14833a * 10 ? '' : 'style="background-color: #828282"') + ' role="button" onclick="' + (_0x1a74fa >= _0x14833a * 10 ? 'useSkin(' + (_0x14833a + 1000) + ')' : '') + '">' + (_0x1a74fa >= _0x14833a * 10 ? 'Use Skin' : 'Level ' + _0x14833a * 10) + '</div>\n                </div>';
                document.getElementById('levelskinlist').innerHTML += _0x253dd3;
            }
        }
        _0x576f47 = true;
    };
    _0x3cb32e.useSkin = function (_0x57015e) {
        ;
        if (!_0x1231bc || Date.now() - _0x2c7222 < 300 || Date.now() < _0x25a302) {
            return;
        }
        Date.now() - _0x2c7222 < 5000 ? (_0x1e4670++, _0x25a302 = Date.now() + _0x1e4670 * 300) : _0x1e4670 = 0;
        _0x2c7222 = Date.now();
        _0x3a7b2b == _0x57015e || _0x57015e == 0 ? (_0x57015e = 0, $('#skins-btn').css('background-image', 'url()'), $('#skins-btn').text('Skins')) : ($('#skins-btn').css('background-image', 'url(./skins/' + _0x57015e + '.png)'), $('#skins-btn').text(''));
        let _0x4c7e11 = _0x23c959(3);
        _0x4c7e11.setUint8(0, 2, true);
        _0x4c7e11.setUint16(1, _0x57015e, true);
        _0xec9151(_0x4c7e11);
        $('#skinBtn' + _0x3a7b2b).removeClass('highlighted3');
        $('#skinBtn' + _0x3a7b2b).text('Use Skin');
        _0x57015e != 0 && ($('#skinBtn' + _0x57015e).text('Unequip Skin'), $('#skinBtn' + _0x57015e).addClass('highlighted3'));
        _0x3a7b2b = _0x57015e;
        localStorage.setItem('skin', _0x57015e);
    };
    _0x3cb32e.useWearable = function (_0x18f79d) {
        ;
        if (!_0x1231bc || document.getElementById('wearableBtn' + _0x18f79d).innerText == 'Locked') {
            return;
        }
        _0x2afebb.indexOf(_0x18f79d) != -1 ? (_0x2afebb = _0x2afebb.filter(_0x5dc0e4 => {
            return _0x5dc0e4 != _0x18f79d;
        }), $('#wearableBtn' + _0x18f79d).removeClass('highlighted3'), $('#wearableBtn' + _0x18f79d).text('Equip Wearable')) : (_0x2afebb.push(_0x18f79d), $('#wearableBtn' + _0x18f79d).text('Unequip Wearable'), $('#wearableBtn' + _0x18f79d).addClass('highlighted3'));
        localStorage.setItem('wearables', JSON.stringify(_0x2afebb));
        let _0x5c5f81 = _0x23c959(3);
        _0x5c5f81.setUint8(0, 3, true);
        _0x5c5f81.setUint16(1, _0x18f79d, true);
        _0xec9151(_0x5c5f81);
    };
    null != _0x3cb32e.localStorage && (_0x4a4f39(window).load(function () {
        ;
        _0x4a4f39('.save').each(function () {
            var _0x58920e = $(this).data('box-id'), _0x4692d8 = _0x3cb32e.localStorage.getItem('checkbox-' + _0x58920e);
            if (_0x4692d8 == 'true' && $(this).attr('type') == 'checkbox') {
                $(this).prop('checked', 'true');
                $(this).trigger('change');
            } else {
                _0x4692d8 != null && $(this).val(_0x4692d8);
            }
            _0x4a4f39('#server').val(_0x24b758);
        });
        _0x4a4f39('.save').change(function () {
            var _0x4bfed9 = $(this).data('box-id'), _0x43f807 = $(this).attr('type') == 'checkbox' ? $(this).is(':checked') : $(this).val();
            _0x3cb32e.localStorage.setItem('checkbox-' + _0x4bfed9, _0x43f807);
        });
    }), null == _0x3cb32e.localStorage.AB8 && (_0x3cb32e.localStorage.AB8 = ~~(100 * Math.random())), !isNaN(_0x3cb32e.localStorage.recurringUser) ? _0x3cb32e.localStorage.recurringUser = parseInt(_0x3cb32e.localStorage.recurringUser) + 1 : (_0x3cb32e.localStorage.recurringUser = 1, setTimeout(() => {
        ;
        swal.fire({
            'icon': 'warning',
            'html': '<h4><span style="color: #f5bd78">Welcome to Agarpowers.io</span></h4><h5><span style="color: #ffffff">Write <span style="color: #6ea4ff">/help</span> in the chat to find out how to play and  <span style="color: #6ea4ff">/commandlist</span> to see all commands. <br><br>If you cannot connect, reload page.<br><br>Note that the game is in early stages of development, if you encounter issues contact Staff at our discord.</span></h5>'
        });
    }, 1000)));
    function _0x41d485() {
        ;
        $('#setGoldNickname').prop('checked', false);
        $('#setBlackNickname').prop('checked', false);
        $('#setRedNickname').prop('checked', false);
    }
    setTimeout(function () {
    }, 300000);
    ;
    _0x3cb32e.connect = _0x4e1ec4;
    ;
    _0x4a4f39.ajax({
        'type': 'POST',
        'dataType': 'json',
        'url': 'checkdir.php',
        'data': _0x10d50b,
        'success': function (_0x57e75f) {
            ;
            response = JSON.parse(_0x57e75f.names);
            for (var _0x2220aa = 0; _0x2220aa < response.length; _0x2220aa++) {
                -1 == _0xeb3a00.indexOf(response[_0x2220aa]) && _0xeb3a00.push(response[_0x2220aa]);
            }
        }
    });
    let _0xb4b504 = [
            '#ffffff',
            '#5cff07',
            '#d907ff',
            '#07fff5',
            '#fa0787',
            '#ffc107',
            '#ff5e07',
            '#0700ff',
            '#0770ff',
            '#5e07ff',
            '#07fd50',
            '#ffe607',
            '#aaff07',
            '#ff0708',
            '#ff07ff',
            '#f2ff07',
            '#07cbff',
            '#4ac6ff',
            '#c2fdff',
            '#19d219',
            '#24ffe9',
            '#ffd700',
            '#690069',
            '#6112e0',
            '#898989'
        ], _0x3cab69 = [
            70,
            85,
            108,
            135,
            50,
            30
        ], _0x582f6d = [];
    for (var _0x3adf6e = 0; _0x3adf6e < _0xb4b504.length; _0x3adf6e++) {
        for (var _0x19e014 = 0; _0x19e014 < _0x3cab69.length; _0x19e014++) {
            let _0xfd6b04 = document.createElement('canvas'), _0x4808c9 = _0xfd6b04.getContext('2d');
            _0xfd6b04.width = _0x3cab69[_0x19e014] * 2;
            _0xfd6b04.height = _0x3cab69[_0x19e014] * 2;
            _0x4808c9.fillStyle = _0xb4b504[_0x3adf6e];
            _0x4808c9.strokeStyle = _0xb4b504[_0x3adf6e];
            _0x4808c9.beginPath();
            _0x4808c9.arc(_0x3cab69[_0x19e014], _0x3cab69[_0x19e014], _0x3cab69[_0x19e014], 0, Math.PI * 2, false);
            _0x4808c9.stroke();
            _0x4808c9.fill();
            _0x4808c9.closePath();
            _0x582f6d.push([]);
            _0x582f6d[_0x19e014].push(_0x4808c9);
        }
    }
    var _0x55e1a0 = 1000, _0x4796a2 = -1, _0x58bd6f = -1, _0x164a9c = 1, _0x22844f = null, _0xeab01e = null, _0x3735e6 = null, _0x4443d6 = null, _0x4d9339 = null, _0x57bf12 = null, _0x21a5f0 = null, _0x2b0e35 = null, _0xe95bc5 = [null], _0x5364b4 = [
            '',
            '6 Mana:   Reco',
            '4 Mana:   Speed',
            '12 Mana: Virus',
            '15 Mana: Portal',
            '3 Mana:   Growth',
            '5 Mana:   Freeze',
            '2 Mana:   360 Push',
            '12 Mana: Frozen Virus',
            '10 Mana: AntiReco',
            '8 Mana:   AntiFreeze',
            '8 Mana:   Shield',
            '20 Mana: Gold Block'
        ], _0x14f18a = [
            '#FFFFFF',
            '#ff0015',
            '#ffcc00',
            '#11ff00',
            '#760096',
            '#8aff7a',
            '#00fbff',
            '#e300c5',
            '#b8f3ff',
            '#6112e0',
            '#ff9100',
            '#7A7496',
            '#FFD700'
        ], _0x3a92d1 = [
            '#FFFFFF',
            '#FFCB12',
            '#00FF00',
            '#FF0000',
            '#000000',
            '#2F3C7E',
            '#720091',
            '#f500f1',
            '#b0a4b0',
            '#000000',
            '#ffa8fe'
        ], _0x518e76 = [
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#FFCB12',
            '#FBEAEB',
            '#ffa200',
            '#000000',
            '#34164f',
            '#00FF00',
            '#40003f'
        ], _0x1d2626 = {}, _0x11e281 = {}, _0xeb3a00 = ''.split(';'), _0x8ab6ed = [], _0x83bfb0 = ['_canvas\'blob'];
    _0x144540.prototype = {
        'id': 0,
        'pid': 0,
        'points': null,
        'pointsAcc': null,
        'name': null,
        'colorId': null,
        'nameClr': null,
        'nameCache': null,
        'sizeCache': null,
        'x': 0,
        'y': 0,
        'size': 0,
        'type': 0,
        'nameColorId': 0,
        'ox': 0,
        'oy': 0,
        'oSize': 0,
        'nx': 0,
        'ny': 0,
        'nSize': 0,
        'selected': false,
        'flag': 0,
        'updateTime': 0,
        'updateCode': 0,
        'drawTime': 0,
        'wearables': 0,
        'destroyed': false,
        'sliding': false,
        'particle': false,
        'isVirus': false,
        'isEjected': false,
        'isAgitated': false,
        'slowFade': false,
        'hasShield': false,
        'isMelted': false,
        'isAntiRec': false,
        'meltedFrames': -1,
        'isRecombined': false,
        'recombineFrames': -1,
        'isPush': false,
        'invisible': false,
        'pushFrames': -1,
        'isFrozen': false,
        'wasSimpleDrawing': true,
        'time': 0,
        'destroy': function () {
            var _0x34955e;
            for (_0x34955e = 0, len = _0x46c073.length; _0x34955e < len; _0x34955e++) {
                if (_0x46c073[_0x34955e] === this) {
                    _0x46c073.splice(_0x34955e, 1);
                    break;
                }
            }
            delete _0x19a7ff[this.id];
            _0x34955e = _0x24a4e2.indexOf(this);
            tmp2 = allPlayerCells.indexOf(this);
            -1 != _0x34955e && (_0x2ba9ca = true, _0x24a4e2.splice(_0x34955e, 1));
            tmp2 != -1 && allPlayerCells.splice(tmp2, 1);
            _0x34955e = _0x45243f.indexOf(this.id);
            if (-1 != _0x34955e) {
                _0x45243f.splice(_0x34955e, 1);
            }
            this.destroyed = true;
        },
        'getNameSize': function () {
            ;
            return Math.max(~~(0.3 * this.size), 24);
        },
        'setName': function (_0x494d0f, _0x221b02, _0x2ae110) {
            ;
            if (!_0x221b02) {
                _0x221b02 = 0;
            }
            this.name = _0x494d0f;
            if (this.name == '') {
                return;
            }
            if (null == this.nameCache || _0x2ae110) {
                var _0x2b04fa = _0x3a92d1[_0x221b02], _0x9f74c6 = _0x518e76[_0x221b02];
                this.nameCache = new _0x16fea1(this.getNameSize(), _0x2b04fa, true, _0x9f74c6);
                this.nameCache.setValue(this.name);
            } else {
                this.nameCache.setSize(this.getNameSize());
                this.nameCache.setValue(this.name);
            }
        },
        'setSize': function (_0x515c73) {
            ;
            this.nSize = _0x515c73;
            var _0x8e0eab = ~~(this.size * this.size * 0.01);
            if (null === this.sizeCache) {
                this.sizeCache = new _0x16fea1(this.getNameSize() * 0.5, '#FFFFFF', true, '#000000');
            } else {
                this.sizeCache.setSize(this.getNameSize() * 0.5);
            }
        },
        'createPoints': function () {
            ;
            for (var _0x521edc = this.getNumPoints(); this.points.length > _0x521edc;) {
                var _0x1fef53 = ~~(Math.random() * this.points.length);
                this.points.splice(_0x1fef53, 1);
                this.pointsAcc.splice(_0x1fef53, 1);
            }
            0 == this.points.length && 0 < _0x521edc && (this.points.push({
                'ref': this,
                'size': this.size,
                'x': this.x,
                'y': this.y
            }), this.pointsAcc.push(Math.random() - 0.5));
            while (this.points.length < _0x521edc) {
                var _0x237fc2 = ~~(Math.random() * this.points.length), _0x5abe22 = this.points[_0x237fc2];
                this.points.splice(_0x237fc2, 0, {
                    'ref': this,
                    'size': _0x5abe22.size,
                    'x': _0x5abe22.x,
                    'y': _0x5abe22.y
                });
                this.pointsAcc.splice(_0x237fc2, 0, this.pointsAcc[_0x237fc2]);
            }
        },
        'getNumPoints': function () {
            ;
            if (0 == this.id) {
                return 16;
            }
            var _0x4990d6 = _0x164a9c;
            if (20 > this.size) {
                _0x4990d6 = 0;
            }
            if (this.isVirus) {
                _0x4990d6 = 10;
            }
            var _0x3f1ea9 = this.size / 5;
            if (this.size < 100) {
                _0x3f1ea9 = 30;
            }
            if (!this.isVirus) {
                _0x3f1ea9 *= _0x3bda10;
            }
            _0x3f1ea9 *= _0x164a9c;
            if (this.flag & 32) {
                _0x3f1ea9 *= 0.25;
            }
            if (this.type == 4 || this.type == 18) {
                _0x3f1ea9 = 100;
            }
            return Math.max(_0x3f1ea9, _0x4990d6);
        },
        'movePoints': function () {
            ;
            this.createPoints();
            for (var _0x139e02 = this.points, _0x1e5cfb = this.pointsAcc, _0xc984b7 = _0x139e02.length, _0x4fb2c3 = 0; _0x4fb2c3 < _0xc984b7; ++_0x4fb2c3) {
                var _0x3baf2e = _0x1e5cfb[(_0x4fb2c3 - 1 + _0xc984b7) % _0xc984b7], _0x2ed6d9 = _0x1e5cfb[(_0x4fb2c3 + 1) % _0xc984b7];
                _0x1e5cfb[_0x4fb2c3] *= 0.7;
                10 < _0x1e5cfb[_0x4fb2c3] && (_0x1e5cfb[_0x4fb2c3] = 10);
                -10 > _0x1e5cfb[_0x4fb2c3] && (_0x1e5cfb[_0x4fb2c3] = -10);
                _0x1e5cfb[_0x4fb2c3] = (_0x3baf2e + _0x2ed6d9 + 8 * _0x1e5cfb[_0x4fb2c3]) / 10;
            }
            for (var _0x1eeceb = this, _0x35ff06 = this.isVirus ? 0 : (this.id / 1000 + _0x579782 / 10000) % (2 * Math.PI), _0x5eaecd = 0; _0x5eaecd < _0xc984b7; ++_0x5eaecd) {
                var _0xe12ddb = _0x139e02[_0x5eaecd].size, _0x3213ed = _0x139e02[(_0x5eaecd - 1 + _0xc984b7) % _0xc984b7].size, _0x39364b = _0x139e02[(_0x5eaecd + 1) % _0xc984b7].size;
                _0xe12ddb += _0x1e5cfb[_0x5eaecd];
                0 > _0xe12ddb && (_0xe12ddb = 0);
                _0xe12ddb = this.isAgitated ? (19 * _0xe12ddb + this.size) / 20 : (12 * _0xe12ddb + this.size) / 13;
                _0x139e02[_0x5eaecd].size = (_0x3213ed + _0x39364b + 8 * _0xe12ddb) / 10;
                _0x3213ed = 2 * Math.PI / _0xc984b7;
                _0x39364b = this.points[_0x5eaecd].size;
                this.isVirus && 0 == _0x5eaecd % 2 && (_0x39364b += 10);
                _0x139e02[_0x5eaecd].x = this.x + Math.cos(_0x3213ed * _0x5eaecd + _0x35ff06) * _0x39364b;
                _0x139e02[_0x5eaecd].y = this.y + Math.sin(_0x3213ed * _0x5eaecd + _0x35ff06) * _0x39364b;
            }
        },
        'updatePos': function () {
            ;
            if (0 == this.id) {
                return 1;
            }
            var _0x236968;
            _0x236968 = (_0x579782 - this.updateTime) / (_0x3b9e66 && this.type != 0 ? 450 : 120);
            _0x236968 = 0 > _0x236968 ? 0 : 1 < _0x236968 ? 1 : _0x236968;
            var _0xbb0476 = 0 > _0x236968 ? 0 : 1 < _0x236968 ? 1 : _0x236968;
            this.getNameSize();
            if (this.destroyed && 1 <= _0xbb0476) {
            }
            return this.x = _0x236968 * (this.nx - this.ox) + this.ox, this.y = _0x236968 * (this.ny - this.oy) + this.oy, this.size = _0xbb0476 * (this.nSize - this.oSize) + this.oSize, _0xbb0476;
        },
        'shouldRender': function () {
            ;
            return 0 == this.id ? true : !(this.x + this.size + 40 < _0x4cca25 - _0x34bec5 / 2 / _0x3bda10 || this.y + this.size + 40 < _0x45c70f - _0x1c4a5e / 2 / _0x3bda10 || this.x - this.size - 40 > _0x4cca25 + _0x34bec5 / 2 / _0x3bda10 || this.y - this.size - 40 > _0x45c70f + _0x1c4a5e / 2 / _0x3bda10);
        },
        'getStrokeColor': function () {
            ;
            if (this.selected) {
                return '#ffbb00';
            }
            let _0x4c89a9 = this.type == 0 ? _0xb4b504[this.colorId] : this.color;
            var _0x500127 = (~~(parseInt(_0x4c89a9.substr(1, 2), 16) * 0.7)).toString(16), _0x162315 = (~~(parseInt(_0x4c89a9.substr(3, 2), 16) * 0.7)).toString(16), _0x2d5926 = (~~(parseInt(_0x4c89a9.substr(5, 2), 16) * 0.7)).toString(16);
            if (_0x500127.length == 1) {
                _0x500127 = '0' + _0x500127;
            }
            if (_0x162315.length == 1) {
                _0x162315 = '0' + _0x162315;
            }
            if (_0x2d5926.length == 1) {
                _0x2d5926 = '0' + _0x2d5926;
            }
            return '#' + _0x500127 + _0x162315 + _0x2d5926;
        },
        'drawOneCell': function (_0x255307) {
            ;
            if (this.shouldRender() && !(this.type == 9 && this.color == '#690069') && !this.invisible && (!this.particle || _0x1cd92a)) {
                if (this.type == 1) {
                    if (!this.destroyed) {
                        let _0x5ced73 = this.particle ? 5 : 0;
                        this.updatePos();
                        _0x255307.drawImage(_0x582f6d[_0x5ced73][this.colorId].canvas, this.x - 70, this.y - 70);
                    }
                    return;
                } else {
                    if (this.type == 3) {
                        if (!this.destroyed) {
                            this.updatePos();
                            let _0x9f6b95 = this.size > 120 ? 3 : this.size > 100 ? 2 : this.size > 60 ? 1 : 4;
                            _0x255307.drawImage(_0x582f6d[_0x9f6b95][this.colorId].canvas, this.x - _0x3cab69[_0x9f6b95], this.y - _0x3cab69[_0x9f6b95]);
                        }
                        return;
                    } else {
                        if (this.type == 5) {
                            !this.destroyed && (this.updatePos(), _0x255307.drawImage(_0x582f6d[4][this.colorId].canvas, this.x - 45, this.y - 45));
                            return;
                        }
                    }
                }
                var _0x300ff1 = 0 != this.id && !this.isVirus && !this.isAgitated;
                if (10 > this.getNumPoints()) {
                    _0x300ff1 = true;
                }
                if (this.wasSimpleDrawing && !_0x300ff1) {
                    for (var _0x313ebd = 0; _0x313ebd < this.points.length; _0x313ebd++) {
                        this.points[_0x313ebd].size = this.size;
                    }
                }
                var _0x1ffd34 = this.size;
                if (!this.wasSimpleDrawing) {
                    for (var _0x313ebd = 0; _0x313ebd < this.points.length; _0x313ebd++) {
                        _0x1ffd34 = Math.max(this.points[_0x313ebd].size, _0x1ffd34);
                    }
                }
                this.wasSimpleDrawing = _0x300ff1;
                _0x255307.save();
                this.drawTime = _0x579782;
                _0x313ebd = this.updatePos();
                this.destroyed && (_0x255307.globalAlpha *= 1 - _0x313ebd);
                _0x255307.lineWidth = this.type == 9 ? 1 : 30;
                _0x255307.lineCap = 'round';
                _0x255307.lineJoin = this.isVirus ? 'miter' : 'round';
                if (_0x3fe011) {
                    _0x255307.fillStyle = '#FFFFFF';
                    _0x255307.strokeStyle = '#AAAAAA';
                } else {
                    _0x255307.fillStyle = this.type == 0 ? _0xb4b504[this.colorId] : this.color;
                    if (_0x300ff1) {
                        _0x255307.strokeStyle = this.getStrokeColor();
                    } else {
                        _0x255307.strokeStyle = this.type == 0 ? this.selected ? '#ffbb00' : _0xb4b504[this.colorId] : this.color;
                    }
                }
                _0x255307.beginPath();
                if (this.type == 11) {
                    var _0x54aafd = this.size * 0.05;
                    _0x255307.lineWidth = _0x54aafd;
                    _0x255307.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                    _0x255307.stroke();
                } else {
                    if (_0x300ff1) {
                        var _0x54aafd = this.type == 7 ? 70 : this.type == 4 || this.type == 18 ? this.size * 0.005 : this.type == 9 ? 0 : this.size * 0.02;
                        _0x54aafd = this.type == 0 ? _0x54aafd * 3 : this.type == 6 ? 0 : _0x54aafd;
                        if (this.type == 19) {
                            _0x54aafd = 0;
                        }
                        _0x255307.lineWidth = _0x54aafd;
                        _0x255307.arc(this.x, this.y, this.size - _0x54aafd * 0.5 + 5, 0, 2 * Math.PI, false);
                        if (this.type != 19) {
                            _0x255307.stroke();
                        }
                    } else {
                        this.movePoints();
                        _0x255307.beginPath();
                        var _0x1fd1b8 = this.getNumPoints();
                        _0x255307.moveTo(this.points[0].x, this.points[0].y);
                        for (_0x313ebd = 1; _0x313ebd <= _0x1fd1b8; ++_0x313ebd) {
                            var _0x45915a = _0x313ebd % _0x1fd1b8;
                            _0x255307.lineTo(this.points[_0x45915a].x, this.points[_0x45915a].y);
                        }
                    }
                }
                _0x255307.closePath();
                if (Date.now() - this.time < 1000 && this.type != 0 && this.type != 3 && this.type != 19) {
                    this.slowFade ? _0x255307.globalAlpha = (Date.now() - this.time) * 0.001 * (this.type == 2 ? 0.7 : 1) / (_0x1a5b36 && this.type != 1 ? 2 : 1) : _0x255307.globalAlpha = (Date.now() - this.time) * 0.003 * (this.type == 2 ? 0.21 : 1) / (_0x1a5b36 && this.type != 1 ? 2 : 1);
                } else {
                    if (this.type == 2) {
                        _0x255307.globalAlpha = 0.7;
                    } else {
                        if (this.type === 1) {
                            _0x255307.globalAlpha = 0.5;
                        } else {
                            this.type == 19 ? _0x255307.globalAlpha = 0 : _0x255307.globalAlpha = _0x1a5b36 ? 0.5 : 0.9;
                        }
                    }
                }
                _0x255307.globalAlpha = this.type == 9 ? 0.05 : this.type == 10 ? 0.1 : _0x255307.globalAlpha;
                var _0x301c47 = this['_skin'];
                switch (this.type) {
                case 2:
                    if (this.sliding) {
                        _0x301c47 = 'obj/freeze';
                    }
                    break;
                case 4:
                    _0x301c47 = 'obj/portal3';
                    break;
                case 6:
                    _0x301c47 = 'obj/growth';
                    break;
                case 7:
                    _0x301c47 = 'obj/shield';
                    break;
                case 8:
                    _0x301c47 = 'obj/afreeze';
                    break;
                case 11:
                    _0x301c47 = 'obj/block';
                    break;
                case 12:
                    _0x301c47 = 'obj/arec';
                    break;
                case 13:
                    _0x301c47 = 'obj/freeze';
                    break;
                case 14:
                    break;
                case 15:
                    _0x301c47 = 'obj/speedc';
                    break;
                case 16:
                    _0x301c47 = 'obj/coin';
                    break;
                case 17:
                    _0x301c47 = 'obj/manapellet';
                    break;
                case 18:
                    _0x301c47 = 'obj/goldenportal';
                    break;
                case 19:
                    _0x301c47 = 'obj/egg' + this.skinId;
                }
                (_0x5cde4b || this.type == 19) && _0x301c47 != 0 ? (!_0x1d2626.hasOwnProperty(_0x301c47) && (_0x1d2626[_0x301c47] = new Image(), _0x1d2626[_0x301c47].src = './skins/' + _0x301c47 + '.png'), 0 != _0x1d2626[_0x301c47].width && _0x1d2626[_0x301c47].complete ? _0x313ebd = _0x1d2626[_0x301c47] : _0x313ebd = null) : _0x313ebd = null;
                _0x300ff1 || _0x255307.stroke();
                _0x255307.fill();
                if (this.type == 19) {
                    _0x255307.globalAlpha = 1;
                }
                _0x313ebd && (_0x255307.save(), _0x255307.clip(), _0x255307.drawImage(_0x313ebd, this.x - _0x1ffd34, this.y - _0x1ffd34, 2 * _0x1ffd34, 2 * _0x1ffd34), _0x255307.restore());
                this.isFrozen && (_0x255307.save(), _0x255307.clip(), _0x255307.globalAlpha = 0.55, _0x255307.drawImage(freezeImg, this.x - _0x1ffd34, this.y - _0x1ffd34, 2 * _0x1ffd34, 2 * _0x1ffd34), _0x255307.restore());
                this.isAntiRec && (_0x255307.save(), _0x255307.clip(), _0x255307.globalAlpha = 0.9, _0x255307.drawImage(this.size * _0x3bda10 < 50 ? antiRecImg128 : antiRecImg, this.x - _0x1ffd34, this.y - _0x1ffd34, 2 * _0x1ffd34, 2 * _0x1ffd34), _0x255307.restore());
                if (shieldImg128.complete && shieldImg512.complete && this.type == 0 && this.hasShield) {
                    _0x255307.globalAlpha = 0.72;
                    let _0x3f0495 = Math.floor(_0x4141d8 / 8) % 8, _0x1e9cec = this.size * _0x3bda10 < 50 ? 128 : 512;
                    _0x255307.drawImage(this.size * _0x3bda10 < 50 ? shieldImg128 : shieldImg512, _0x3f0495 * _0x1e9cec, 0, _0x1e9cec, _0x1e9cec, this.x - _0x1ffd34 * 1.4, this.y - _0x1ffd34 * 1.4, 2 * _0x1ffd34 * 1.4, 2 * _0x1ffd34 * 1.4);
                }
                if (antifreezeImg.complete && this.type == 0) {
                    _0x255307.globalAlpha = 0.97;
                    ;
                    this.isMelted && (this.meltedFrames = 0, this.isMelted = false);
                    if (this.meltedFrames != -1) {
                        let _0x5b7f6a = this.meltedFrames, _0x19e5e1 = this.size * _0x3bda10 < 40 ? 128 : 338;
                        _0x255307.drawImage(this.size * _0x3bda10 < 50 ? antifreezeImg128 : antifreezeImg, _0x5b7f6a * _0x19e5e1, 0, _0x19e5e1, _0x19e5e1, this.x - _0x1ffd34 * 1.2, this.y - _0x1ffd34 * 1.2, 2 * _0x1ffd34 * 1.2, 2 * _0x1ffd34 * 1.2);
                        if (this.meltedFrames == 20) {
                            this.meltedFrames = -1;
                        } else {
                            _0x4141d8 % 4 == 0 && this.meltedFrames++;
                        }
                    }
                }
                if (recImg.complete && this.type == 0) {
                    _0x255307.globalAlpha = 0.97;
                    ;
                    this.isRecombined && (this.recombineFrames = 0, this.isRecombined = false);
                    if (this.recombineFrames != -1) {
                        let _0x383b28 = this.recombineFrames;
                        _0x255307.drawImage(recImg, _0x383b28 * 450, 0, 450, 450, this.x - _0x1ffd34 * 2, this.y - _0x1ffd34 * 2, 2 * _0x1ffd34 * 2, 2 * _0x1ffd34 * 2);
                        if (this.recombineFrames == 9) {
                            this.recombineFrames = -1;
                        } else {
                            _0x4141d8 % 2 == 0 && this.recombineFrames++;
                        }
                    }
                }
                if (pushImg.complete && this.type == 0) {
                    _0x255307.globalAlpha = 0.9;
                    ;
                    this.isPush && (this.pushFrames = 0, this.isPush = false);
                    if (this.pushFrames != -1) {
                        let _0x12aad1 = this.pushFrames;
                        _0x255307.drawImage(pushImg, _0x12aad1 * 350, 0, 350, 350, this.x - _0x1ffd34 * 1.3, this.y - _0x1ffd34 * 1.3, 2 * _0x1ffd34 * 1.3, 2 * _0x1ffd34 * 1.3);
                        if (this.pushFrames == 13) {
                            this.pushFrames = -1;
                        } else {
                            _0x4141d8 % 2 == 0 && this.pushFrames++;
                        }
                    }
                }
                if (this.type == 0 && this.wearables != 0 && _0x39086d) {
                    ;
                    for (let _0x2b76da = 0; _0x2b76da < 8; _0x2b76da++) {
                        let _0x47936b = _0x30b05e[_0x2b76da];
                        this.wearables & Math.pow(2, _0x2b76da) && _0x47936b.img.complete && (_0x255307.globalAlpha = 1, _0x255307.drawImage(_0x47936b.img, this.x - _0x1ffd34 * _0x47936b.mx, this.y - _0x1ffd34 * _0x47936b.my, 2 * _0x1ffd34 * _0x47936b.scale, 2 * _0x1ffd34 * _0x47936b.scale));
                    }
                }
                (_0x3fe011 || 15 < this.size) && !_0x300ff1 && (_0x255307.strokeStyle = '#000000', _0x255307.globalAlpha *= 0.1, _0x255307.stroke());
                _0x255307.globalAlpha = 1;
                _0x313ebd = -1 != _0x24a4e2.indexOf(this);
                var _0x3790e7;
                if (0 != this.id && this.size * _0x3bda10 > 25) {
                    var _0x19e27b = ~~this.x, _0x40790b = ~~this.y, _0x2c2d08 = this.getNameSize(), _0x589587 = Math.ceil(10 * _0x3bda10) * 0.1, _0x34da90 = 1 / _0x589587;
                    if ((_0x23bf3a || _0x313ebd) && this.name && this.nameCache && (null == _0x45915a || -1 == _0x8ab6ed.indexOf(_0x301c47))) {
                        _0x3790e7 = this.nameCache;
                        _0x3790e7.setValue(this.name);
                        _0x3790e7.setSize(_0x2c2d08);
                        _0x3790e7.setScale(_0x589587);
                        var _0x183f3f = _0x3790e7.render(), _0x30c664 = ~~(_0x183f3f.width * _0x34da90), _0x318533 = ~~(_0x183f3f.height * _0x34da90);
                        _0x255307.drawImage(_0x183f3f, _0x19e27b - ~~(_0x30c664 * 0.5), _0x40790b - ~~(_0x318533 * 0.5), _0x30c664, _0x318533);
                        _0x300ff1 += _0x183f3f.height * 0.5 * _0x589587 + 4;
                    }
                    if (_0x2c21b6 && (_0x313ebd && 200 < this.size && this.type == 0 || 0 == _0x24a4e2.length && 200 < this.size && this.type == 0)) {
                        var _0x30c664 = ~~(this.size * this.size * 0.01);
                        _0x313ebd = this.sizeCache;
                        _0x313ebd.setValue(_0x30c664);
                        _0x313ebd.setScale(_0x589587);
                        _0x45915a = _0x313ebd.render();
                        _0x30c664 = ~~(_0x45915a.width * _0x34da90);
                        _0x318533 = ~~(_0x45915a.height * _0x34da90);
                        var _0x53c2d0 = this.name ? _0x40790b + ~~(_0x318533 * 0.7) : _0x40790b - ~~(_0x318533 * 0.5);
                        _0x255307.drawImage(_0x45915a, _0x19e27b - ~~(_0x30c664 * 0.5), _0x53c2d0, _0x30c664, _0x318533);
                    }
                }
                _0x255307.restore();
            }
        }
    };
    _0x16fea1.prototype = {
        '_value': '',
        '_color': '#000000',
        '_stroke': false,
        '_strokeColor': '#000000',
        '_size': 16,
        '_canvas': null,
        '_ctx': null,
        '_dirty': false,
        '_scale': 1,
        'setSize': function (_0x1a94c2) {
            ;
            this['_size'] != _0x1a94c2 && (this['_size'] = _0x1a94c2, this['_dirty'] = true);
        },
        'setScale': function (_0x3ef398) {
            ;
            this['_scale'] != _0x3ef398 && (this['_scale'] = _0x3ef398, this['_dirty'] = true);
        },
        'setStrokeColor': function (_0x2cae40) {
            ;
            this['_strokeColor'] != _0x2cae40 && (this['_strokeColor'] = _0x2cae40, this['_dirty'] = true);
        },
        'setValue': function (_0x2f2a2a) {
            ;
            _0x2f2a2a != this['_value'] && (this['_value'] = _0x2f2a2a, this['_dirty'] = true);
        },
        'render': function () {
            ;
            null == this['_canvas'] && (this['_canvas'] = document.createElement('canvas'), this['_ctx'] = this['_canvas'].getContext('2d'));
            if (this['_dirty']) {
                this['_dirty'] = false;
                var _0x905d29 = this['_canvas'], _0x14575b = this['_ctx'], _0xc2a9f0 = this['_value'], _0x54a9b1 = this['_scale'], _0x339e51 = this['_size'], _0x11fd5f = _0x339e51 + 'px Ubuntu';
                _0x14575b.font = _0x11fd5f;
                var _0x680214 = ~~(0.2 * _0x339e51), _0x4a3542 = _0x339e51 * 0.1, _0x29ed5e = _0x680214 * 0.5;
                _0x905d29.width = _0x14575b.measureText(_0xc2a9f0).width * _0x54a9b1 + 3;
                _0x905d29.height = (_0x339e51 + _0x680214) * _0x54a9b1;
                _0x14575b.font = _0x11fd5f;
                _0x14575b.globalAlpha = 1;
                _0x14575b.lineWidth = _0x4a3542;
                _0x14575b.strokeStyle = this['_strokeColor'];
                _0x14575b.fillStyle = this['_color'];
                _0x14575b.scale(_0x54a9b1, _0x54a9b1);
                this['_stroke'] && _0x14575b.strokeText(_0xc2a9f0, 0, _0x339e51 - _0x29ed5e);
                _0x14575b.fillText(_0xc2a9f0, 0, _0x339e51 - _0x29ed5e);
            }
            return this['_canvas'];
        },
        'getWidth': function () {
            ;
            return _0x284242.measureText(this['_value']).width + 6;
        }
    };
    Date.now || (Date.now = function () {
        return new Date().getTime();
    });
    var _0x4e110b = {
        'init': function (_0x8173c4) {
            ;
            function _0x1204f4(_0x175dfa, _0x203809, _0x49c612, _0x17058c, _0x3bceb0) {
                ;
                this.x = _0x175dfa;
                this.y = _0x203809;
                this.w = _0x49c612;
                this.h = _0x17058c;
                this.depth = _0x3bceb0;
                this.items = [];
                this.nodes = [];
            }
            var _0x2ade05 = _0x8173c4.maxChildren || 2, _0x2431ea = _0x8173c4.maxDepth || 4;
            _0x1204f4.prototype = {
                'x': 0,
                'y': 0,
                'w': 0,
                'h': 0,
                'depth': 0,
                'items': null,
                'nodes': null,
                'exists': function (_0x4fed88) {
                    ;
                    for (var _0x359632 = 0; _0x359632 < this.items.length; ++_0x359632) {
                        var _0x33dcfd = this.items[_0x359632];
                        if (_0x33dcfd.x >= _0x4fed88.x && _0x33dcfd.y >= _0x4fed88.y && _0x33dcfd.x < _0x4fed88.x + _0x4fed88.w && _0x33dcfd.y < _0x4fed88.y + _0x4fed88.h) {
                            return true;
                        }
                    }
                    if (0 != this.nodes.length) {
                        var _0x1e2ef4 = this;
                        return this.findOverlappingNodes(_0x4fed88, function (_0x56bdd7) {
                            return _0x1e2ef4.nodes[_0x56bdd7].exists(_0x4fed88);
                        });
                    }
                    return false;
                },
                'retrieve': function (_0x5408c6, _0x4c6910) {
                    ;
                    for (var _0x324853 = 0; _0x324853 < this.items.length; ++_0x324853) {
                        _0x4c6910(this.items[_0x324853]);
                    }
                    if (0 != this.nodes.length) {
                        var _0x53498e = this;
                        this.findOverlappingNodes(_0x5408c6, function (_0x19cadc) {
                            ;
                            _0x53498e.nodes[_0x19cadc].retrieve(_0x5408c6, _0x4c6910);
                        });
                    }
                },
                'insert': function (_0x42640d) {
                    ;
                    0 != this.nodes.length ? this.nodes[this.findInsertNode(_0x42640d)].insert(_0x42640d) : this.items.length >= _0x2ade05 && this.depth < _0x2431ea ? (this.devide(), this.nodes[this.findInsertNode(_0x42640d)].insert(_0x42640d)) : this.items.push(_0x42640d);
                },
                'findInsertNode': function (_0x5f1a96) {
                    return _0x5f1a96.x < this.x + this.w / 2 ? _0x5f1a96.y < this.y + this.h / 2 ? 0 : 2 : _0x5f1a96.y < this.y + this.h / 2 ? 1 : 3;
                },
                'findOverlappingNodes': function (_0x5d53f7, _0x520f16) {
                    return _0x5d53f7.x < this.x + this.w / 2 && (_0x5d53f7.y < this.y + this.h / 2 && _0x520f16(0) || _0x5d53f7.y >= this.y + this.h / 2 && _0x520f16(2)) || _0x5d53f7.x >= this.x + this.w / 2 && (_0x5d53f7.y < this.y + this.h / 2 && _0x520f16(1) || _0x5d53f7.y >= this.y + this.h / 2 && _0x520f16(3)) ? true : false;
                },
                'devide': function () {
                    var _0x57feaa = this.depth + 1, _0x19f20d = this.w / 2, _0x565c49 = this.h / 2;
                    this.nodes.push(new _0x1204f4(this.x, this.y, _0x19f20d, _0x565c49, _0x57feaa));
                    this.nodes.push(new _0x1204f4(this.x + _0x19f20d, this.y, _0x19f20d, _0x565c49, _0x57feaa));
                    this.nodes.push(new _0x1204f4(this.x, this.y + _0x565c49, _0x19f20d, _0x565c49, _0x57feaa));
                    this.nodes.push(new _0x1204f4(this.x + _0x19f20d, this.y + _0x565c49, _0x19f20d, _0x565c49, _0x57feaa));
                    _0x57feaa = this.items;
                    this.items = [];
                    for (_0x19f20d = 0; _0x19f20d < _0x57feaa.length; _0x19f20d++) {
                        this.insert(_0x57feaa[_0x19f20d]);
                    }
                },
                'clear': function () {
                    ;
                    for (var _0x1ef1a9 = 0; _0x1ef1a9 < this.nodes.length; _0x1ef1a9++) {
                        this.nodes[_0x1ef1a9].clear();
                    }
                    this.items.length = 0;
                    this.nodes.length = 0;
                }
            };
            ;
            return {
                'root': new _0x1204f4(_0x8173c4.minX, _0x8173c4.minY, _0x8173c4.maxX - _0x8173c4.minX, _0x8173c4.maxY - _0x8173c4.minY, 0),
                'insert': function (_0x2c0fe7) {
                    ;
                    this.root.insert(_0x2c0fe7);
                },
                'retrieve': function (_0x5efdba, _0x58a76e) {
                    ;
                    this.root.retrieve(_0x5efdba, _0x58a76e);
                },
                'retrieve2': function (_0x40eb20, _0x40878f, _0x4e7a41, _0x5023c5, _0x329fdb) {
                    ;
                    0 = _0x40eb20;
                    0 = _0x40878f;
                    0 = _0x4e7a41;
                    0 = _0x5023c5;
                    this.root.retrieve(_0x18ac4b, _0x329fdb);
                },
                'exists': function (_0xa53da) {
                    ;
                    return this.root.exists(_0xa53da);
                },
                'clear': function () {
                    ;
                    this.root.clear();
                }
            };
        }
    };
    _0x4a4f39(function () {
        ;
        function _0x4e0f80() {
            ;
            0 < _0x24a4e2.length && (_0x26a973.color = _0x24a4e2[0].color, _0x26a973.setName(_0x24a4e2[0].name));
            _0x51364e.clearRect(0, 0, 32, 32);
            _0x51364e.save();
            _0x51364e.translate(16, 16);
            _0x51364e.scale(0.4, 0.4);
            _0x26a973.drawOneCell(_0x51364e);
            _0x51364e.restore();
            var _0x4ed0fb = document.getElementById('favicon'), _0x182c64 = _0x4ed0fb.cloneNode(true);
            _0x182c64.setAttribute('href', favCanvas.toDataURL('image/png'));
            _0x4ed0fb.parentNode.replaceChild(_0x182c64, _0x4ed0fb);
        }
        var _0x26a973 = new _0x144540(0, 0, 0, 2, '#458bff', '', '', 0);
        _0x26a973.isVirus = true;
        favCanvas = document.createElement('canvas');
        favCanvas.width = 32;
        favCanvas.height = 32;
        var _0x51364e = favCanvas.getContext('2d');
        _0x4e0f80();
        setInterval(_0x5563bd, 1000);
    });
    _0x3cb32e.onload = _0x87ddf4;
    let _0x237300 = 0, _0x5f2490 = false, _0x3f065b;
    window.addEventListener('keydown', _0x2c73bc => {
        ;
        if (_0x2c73bc.keyCode == _0x39fcd0.sdrop.code) {
            !_0x5f2490 && (_0x5f2490 = true, _0x3f065b = setInterval(() => {
                ;
                $('#canvas').trigger($.Event('keydown', { 'keyCode': _0x237300 }));
                $('#canvas').trigger($.Event('keyup', { 'keyCode': _0x237300 }));
            }, 60));
        } else {
            if (_0x2c73bc.keyCode == 13 || _0x2c73bc.keyCode == 27) {
                return _0x237300 = 0;
            }
            _0x237300 = _0x2c73bc.keyCode;
        }
    });
    window.addEventListener('keyup', _0x5b442e => {
        ;
        _0x5b442e.keyCode == _0x39fcd0.sdrop.code && (_0x5f2490 = false, clearInterval(_0x3f065b));
    });
    setInterval(() => {
        _0x277dc9 = _0x4141d8 - _0x1a40d1;
        _0x1a40d1 = _0x4141d8;
    }, 1000);
    setInterval(() => {
        ;
        _0x561658() ? (_0x4d32f0(98), _0x4c78c0 = Date.now()) : _0x5c2010 = ' / ';
    }, 5000);
}(window, window.jQuery));
