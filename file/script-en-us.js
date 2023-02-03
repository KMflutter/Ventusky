// (c) Marek Mojzik, 2015-2022

MapOptions %= function (D, B, x, k) {
    function pa(a, b) {
        return (a % b + b) % b
    }
    function Ia(a, b) {
        a.onmousedown = function (c) {
            var d = b.call(this, c || D.event);
            d && d.Ch && (D.getSelection ? (c = D.getSelection()) && c.removeAllRanges && c.removeAllRanges() : B.selection && B.selection.empty && B.selection.empty(), B.onmousemove = function (a) {
                return d.Ch.call(this, a || D.event, 1)
            }, B.onmouseup = function (b) {
                B.onmousemove = B.onmouseup = null;
                if (d.Dh) return d.Dh.call(a, b || D.event)
            })
        };
        a.ondragstart = function () {
            return !1
        };
        a.ontouchstart = function (c) {
            if (1 ===
                c.touches.length) {
                var d = b.call(a, c.touches[0]);
                if (d && d.Ch) {
                    var f = 0, r = {}, e = [];
                    B.ontouchstart = function (b) {
                        for (var c = 0; c < b.changedTouches.length; c++) r[b.changedTouches[c].identifier] = e.length, e.push(b.changedTouches[c]);
                        if (2 == e.length) return b = e[1].clientX - e[0].clientX, c = e[1].clientY - e[0].clientY, d.onchange && d.onchange.call(a, b / 2, c / 2), f = k.sqrt(b * b + c * c), !1
                    };
                    B.ontouchmove = function (b) {
                        B.oncontextmenu = function () {
                            return !1
                        };
                        for (var c = 0; c < b.changedTouches.length; c++) e[r[b.changedTouches[c].identifier]] = b.changedTouches[c];
                        b = b.touches[0];
                        c = 1;
                        if (1 < e.length) {
                            var c = e[0].clientX - e[1].clientX, g = e[0].clientY - e[1].clientY;
                            b = {
                                clientX: (e[0].clientX + e[1].clientX) / 2,
                                clientY: (e[0].clientY + e[1].clientY) / 2
                            };
                            c = k.sqrt(c * c + g * g) / f
                        }
                        return d.Ch.call(a, b, c) || !1
                    };
                    B.ontouchend = function (b) {
                        for (var c = [], g = 0; g < b.changedTouches.length; g++) c.push(e.splice(r[b.changedTouches[g].identifier], 1)[0]);
                        if (c[0] && !(1 < e.length)) if (1 == e.length) d.onchange && d.onchange.call(a, (e[0].clientX - c[0].clientX) / 2, (e[0].clientY - c[0].clientY) / 2), f = 0; else if (B.ontouchstart =
                            null, B.ontouchmove = null, B.ontouchend = null, B.ontouchcancel = null, B.oncontextmenu = null, d.Dh) return d.Dh.call(a, b.changedTouches[0])
                    };
                    return !1
                }
            }
        }
    }

    function ba(a) {
        return B.getElementById(a)
    }

    function ia() {
        if (D.Worker && D.URL && "function" == typeof D.Blob && !D.setImmediate && !sa) {
            var a = "hardwareConcurrency" in navigator ? navigator.hardwareConcurrency : 4;
            this.Kj = [];
            1 < a && a++;
            var b = [], c;
            for (c in ha) b.push(ha[c] == k ? c + ": Math" : c + ":" + ha[c].toString());
            var b = "{" + b.join(",") + "}", d = URL.createObjectURL(new Blob(["onmessage = (" +
            this.Bq.toString() + ")(" + b + ")"], {type: "application/javascript"}));
            this.hm(d);
            for (var f = this, b = 1; b < a; b++) setTimeout(function () {
                f.hm(d)
            }, 500 * b);
            this.ij = 0;
            this.Gm = {}
        }
    }

    var Ma = ("https:" == location.protocol ? "https:" : "http:") + "//www.ventusky.com/",
        xa = ("https:" == location.protocol ? "https:" : "http:") + "//data.ventusky.com/",
        eb = (/beta/.test(x.root) ? x.root : "https://cdnstatic.ventusky.com/") + "media/", Ta = [{
            userAgent: /iphone|ipad/i,
            yl: /windows/i,
            link: "https://itunes.apple.com/us/app/ventusky/id1280984498?mt=8"
        }, {
            userAgent: /android/i,
            yl: /windows/i, link: "https://play.google.com/store/apps/details?id=cz.ackee.ventusky"
        }], sa = 1024 >= k.min(D.innerWidth, D.innerHeight) && /ipad|iphone|android|mobile/i.test(navigator.userAgent),
        fb = sa ? 80 : 160, Ua = sa ? 512 : 1024, Va = sa ? 4 : 9,
        Wa = x.root + "panel.php?link={link}&lang={lang}&id={id}",
        Xa = x.root + "ventusky_location.json.php?lat={lat}&lon={lon}&zoom={zoom}",
        gb = "#5bc84c #f9bd08 #f67100 #b63365 #6b1527 #222222".split(" "), Ya = k.sqrt(5) / 2 + .5,
        va = [16, 9, Ya, 1, 3, 2, 4, 3, 5, 4, 1, 1], Ja = [95, 90, 85, 80, 75], ya = ["#FFF", "#000"],
        hb = ["#111", "rgba(255,255,255,0.7)"], qa = "off normal strong soft dark fast".split(" "),
        ib = {normal: "0DAKtpv2A", dark: "0jAEIuk3a", strong: "0oAleyk2A", soft: "0xIAb9A9A", fast: "0tsdFPK3a"},
        za = {normal: "0Ddq9WAHA", strong: "0Jdq9SG_A", fast: "0Etq9wj-A", soft: "0gYAF-g8A", dark: "0Ddq9WAHa"},
        oa = sa ? 10 : 50, Ka = [0, 20, 40, 60, 80],
        jb = "https://api.ventusky.com/v2/api.ventusky_hurricane.json.php?end_time_unix=5&start_time_unix=-2&" + +x.hurricanesUpdated,
        kb = xa + "{time:yyyy/MM/dd}/{model}/whole_world/hour_{time:HH}{minutesFolder}/{model}_pressure_low_high_{time:yyyyMMdd_HH}{minutes}.json?{cache}",
        La = [0, 10, 20, 30, 40], lb = x.root + "ventusky_mesta.php?q={q}&lang={lang}", Aa = ["", "#000", "#FFF"],
        mb = {
            land: "https://cdnstatic.ventusky.com/tiles/v1.1/land",
            border: "https://cdnstatic.ventusky.com/tiles/v1.0/border",
            cities: "https://cdnstatic.ventusky.com/tiles/v1.2/cities",
            cams: "https://cdnstatic.ventusky.com/tiles/v1.0/cams"
        }, Za = {"0-75": "i"}, nb = x.camTilesUpdated, $a = x.root + "webcam-{id}",
        ab = xa + "{time:yyyy/MM/dd}/{model}/tilled_world/hour_{time:HH}{minutesFolder}/{model}_{layer}_{tileX}_{tileY}_{time:yyyyMMdd_HH}{minutes}.jpg?{cache}",
        Na = xa + "{time:yyyy/MM/dd}/{model}/whole_world/hour_{time:HH}{minutesFolder}/{model}_{layer}_{time:yyyyMMdd_HH}{minutes}.jpg?{cache}",
        xa = {width: 2880, height: 1441, te: "13 km", oe: 5}, ra = {width: 1440, height: 721, te: "22 km", oe: 5},
        Ca = {width: 1440, height: 699, te: "22 km", oe: 5, qe: 89.25, Fe: -85.5}, Oa = {
            width: 1799,
            height: 1059,
            Wd: 600,
            Ud: 350,
            te: "3 km",
            Hf: 260,
            Gf: 270,
            oe: 7,
            Le: -60.9365,
            Me: -134.0955,
            qe: 52.6133,
            Fe: 21.1405,
            Ge: "eiw03q19c05i17u06u16k07y15l08w14m09s13t0am12z0bc12b0c211k0cq10z0dc10b0dy0zr0ej0z50f30yo0fm0y30g40xm0gn0x30h40wn0hm0w40i20vq0ii0v80iy0uu0jd0ue0js0u10k60tk0km0t70l00sr0ld0sh0lq0s10m40rp0mh0rb0mu0r00n60ql0nj0qb0nw0pw0o80pm0ok0p80ov0p00p60om0pi0oc0pu0nz0q40nq0qg0nd0qq0n50r00ms0rc0mj0rm0m70rw0lz0s60ln0sg0lf0sq0l30t00kv0ta0kj0tk0kb0tu0jz0u40js0uc0jh0um0j90uw0iy0v40ir0ve0ig0vm0i90vw0hy0w40hs0wc0hh0wm0ha0wu0h00x20gt0xc0gi0xk0gc0xs0g20y00fw0y80fm0yg0fg0yo0f60yw0f00z40eq0zc0ek0zk0ea0zs0e41000du1080do10g0de10n0da10u0d01120cu11a0ck11h0cg11o0c611w0c11220bs12a0bm12i0bd12o0b812w0az1320au13a0al13g0ag13o0a713u0a214209t14809p14e09g14m09b14s09314y08y15608p15c08l15i08c15p08815w07z16207v16807n16e07i16l07a16s07516y06x17406t17a06l17g06h17m06917s06517y05x18405t18a05l18g05h18m05918s05518y04x19404t19a04l19g04h19m04919s04519y03x1a403t1aa03m1ae03j1ak03b1aq0371au0331ay02z1b202v1b602r1ba02m1bf02i1bj02e1bo0281bt0241bx0201c101w1c501r1cb01m1cf01i1cj01d1co0191cs0151cw0111d100v1d600r1da00o1dd00m1de00m1dc00n1dc00o1da00p1da00q1d800r1d800s1d600t1d600t1d500v1d400v1d300x1d300w1d200y1d000z1d00101cy0101cz0111cx0131cw0131cw0141cu0151cu0161cs0171cs0181cq0191cq0191cp01b1cp01a1co01c1cm01d1cm01e1ck01e1cl01f1cj01h1ci01h1ci01i1cg01j1cg01k1ce01l1ce01m1cc01n1cd01m1cc01o1ca01p1ca01q1c801r1c801s1c601s1c701t1c601u1c401v1c401w1c201x1c201x1c101z1c101y1c00201by0211by0221bw0221bx0231bv0251bu0251bu0261bs0271bs0281bq0291bq0291bp02b1bp02a1bo02c1bm02d1bm02d1bl02f1bk02f1bk02g1bi02h1bi02i1bg02j1bg02j1bg02k1be02l1be02m1bc02n1bc02n1bb02p1ba02p1ba02q1b802r1b802r1b702t1b602t1b602u1b402v1b402w1b202w1b302x1b202y1b002z1b00301ay0311ay0311ay0321aw0331aw0341au0351au0351au0361as0371as0381aq0391aq0391aq03a1ao03b1ao03c1am03d1am03d1am03e1ak03f1ak03g1ai03h1ai03h1ai03i1ag03j1ag03k1ae03l1ae03l1ae03m1ac03n1ac03n1ab03p1aa03p1aa03q1a803r1a803r1a703t1a603t1a603u1a403v1a403v1a403w1a203x1a203y1a003z1a003z1a004019y04119y04119x04319w04319w04419u04519u04519u04619s04719s04819q04919q04919q04a19o04b19o04b19n04d19m04d19m04e19k04f19k04f19k04g19i04h19i04i19g04j19g04j19g04k19e04l19e04l19e04m19c04n19c04o19a04p19a04p19a04q19804r19804r19804s19604t19604t19504v19404v19404w19204x19204x19204y19004z19004z18z05118y05118y05218w05318w05318w05418u05518u05518u05618s05718s05718r05918q05918q05a18o05b18o05b18o05c18m05d18m05d18m05e18k05f18k05f18j05h18i05h18i05i18g05j18g05j18g05k18e05l18e05l18e05m18c05n18c05n18c05o18a05p18a05q18805r18805r18805s18605t18605t18605u18405v18405v18405w18205x18205x18205y18005z18005z18006017y06117y06217w06317w06317w06417u06517u06517u06617s06717s06717s06817q06917q06917q06a17o06b17o06b17o06c17m06d17m06d17m06e17k06f17k06f17k06g17i06h17i06i17g06j17g06j17g06k17e06l17e06l17e06m17c06n17c06n17c06o17a06p17a06p17a06q17806r17806r17806s17606t17606t17606u17406v17406v17406w17206x17206x17206y17006z17006z17007016y07116y07116y07216w07316w07316w07416u07516u07516u07616s07716s07716s07816q07916q07916q07a16o07b16o07b16o07c16m07d16m07d16m07e16k07f16k07f16k07g16i07h16i07h16i07i16g07j16g07j16g07k16e07l16e07l16e07m16c07n16c07n16c07o16a07p16a07p16a07q16807r16807r16807s16607t16607t16607t16607u16407v16407v16407w16207x16207x16207y16007z16007z16008015y08115y08115y08215w08315w08315w08415u08515u08515u08615s08715s08715s08815r08815q08915q08915q08a15o08b15o08b15o08c15m08d15m08d15m08e15k08f15k08f15k08g15i08h15i08h15i08i15g08j15g08j15g08j15g08k15e08l15e08l15e08m15c08n15c08n15c08o15a08p15a08p15a08q15808r15808r15808s15708s15608t15608t15608u15408v15408v15408w15208x15208x15208y15008z15008z15009014z09014y09114y09114y09214w09314w09314w09414u09514u09514u09614s09714s09714s09714s09814q09914q09914q09a14o09b14o09b14o09c14m09d14m09d14m09d14m09e14k09f14k09f14k09g14i09h14i09h14i09i14g09j14g09j14g09j14g09k14e09l14e09l14e09m14c09n14c09n14c09o14b09o14a09p14a09p14a09q14809r14809r14809s14609t14609t14609t14609u14409v14409v14409w14209x14209x14209y14109y14009z14009z1400a013y0a113y0a113y0a213x0a213w0a313w0a313w0a413u0a513u0a513u0a613s0a713s0a713s0a713s0a813q0a913q0a913q0aa13o0ab13o0ab13o0ab13o0ac13m0ad13m0ad13m0ae13k0af13k0af13k0af13k0ag13i0ah13i0ah13i0ai13g0aj13g0aj13g0aj13g0ak13e0al13e0al13e0am13c0an13c0an13c0an13c0ao13a0ap13a0ap13a0aq1390aq1380ar1380ar1380as1360at1360at1360au1350au1340av1340av1340aw1320ax1320ax1320ax1320ay1300az1300az1300b012y0b112y0b112y0b112y0b212w0b312w0b312w0b412v0b412u0b512u0b512u0b612s0b712s0b712s0b712s0b812q0b912q0b912q0ba12p0ba12o0bb12o0bb12o0bc12m0bd12m0bd12m0bd12m0be12k0bf12k0bf12k0bg12j0bg12i0bh12i0bh12i0bi12g0bj12g0bj12g0bj12g0bk12e0bl12e0bl12e0bm12d0bm12c0bn12c0bn12c0bo12b0bo12a0bp12a0bp12a0bq1280br1280br1280br1280bs1260bt1260bt1260bu1250bu1240bv1240bv1240bw1220bx1220bx1220bx1220by1200bz1200bz1200bz1200c011y0c111y0c111y0c211x0c211w0c311w0c311w0c411v0c411u0c511u0c511u0c611s0c711s0c711s0c711s0c811q0c911q0c911q0c911q0ca11o0cb11o0cb11o0cb11o0cc11m0cd11m0cd11m0ce11l0ce11k0cf11k0cf11k0cg11j0cg11i0ch11i0ch11i0ci11h0ci11g0cj11g0cj11g0ck11e0cl11e0cl11e0cl11e0cm11c0cn11c0cn11c0cn11c0co11a0cp11a0cp11a0cp11a0cq1180cr1180cr1180cr1180cs1160ct1160ct1160cu1150cu1140cv1140cv1140cw1130cw1120cx1120cx1120cy1110cy1100cz1100cz1100d010z0d010y0d110y0d110y0d210x0d210w0d310w0d310w0d410v0d410u0d510u0d510u0d610t0d610s0d710s0d710s0d810r0d810q0d910q0d910q0da10p0da10o0db10o0db10o0dc10n0dc10m0dd10m0dd10m0de10l0de10k0df10k0df10k0dg10j0dg10i0dh10i0dh10i0di10h0di10g0dj10g0dj10g0dj10g0dk10e0dl10e0dl10e0dl10e0dm10c0dn10c0dn10c0dn10c0do10a0dp10a0dp10a0dp10a0dq1080dr1080dr1080dr1080ds1070ds1060dt1060dt1060du1050du1040dv1040dv1040dw1030dw1020dx1020dx1020dy1010dy1000dz1000dz1000e00zz0e00zy0e10zy0e10zy0e10zy0e20zw0e30zw0e30zw0e30zw0e40zu0e50zu0e50zu0e50zu0e60zt0e60zs0e70zs0e70zs0e80zr0e80zq0e90zq0e90zq0ea0zp0ea0zo0eb0zo0eb0zo0eb0zo0ec0zm0ed0zm0ed0zm0ed0zm0ee0zl0ee0zk0ef0ga0320g80ef0fi04k0fi0eg0ey05o0ex0eg0eg06m0eg0eh0e307e0e10eh0dp0840dp0ei0dd08s0dc0ei0d109e0d10ej0cr0a00cp0ej0cg0ak0cg0ej0c80b20c60ek0bx0bk0bx0el0bp0c20bn0el0bg0ci0bg0el0b90cy0b60en0b00dc0az0eo0at0ds0ap0ep0al0e60ai0eq0af0ek0a90es0a60ey0a20et0a00fb09u0eu09t0fo09m0ew09o0g009e0ey09f0gd0980ez09a0gq08z0f00930h108u0f108z0hc08l0f308s0ho08f0f508m0i00870f608g0ia0820f708b0im07t0f90850iw07o0fb0800j607h0fc07u0jg07c0fd07q0jq0740ff07k0k006z0fh07f0ka06s0fi0790kk06n0fj0750ku06g0fk06z0l406a0fm06w0lc0640fo06p0lm05z0fp06l0lw05s0fq06g0m405n0fs06c0me05g0fu0660mm05c0fv0630mu0560fw05x0n40500fy05u0nc04u0fz05p0nk04q0g105l0ns04k0g205g0o004g0g305c0o90490g50570oi0440g70530oq03y0g804y0oy03u0g904v0p503o0gb04r0pc03k0gd04n0pk03e0ge04i0ps03a0gf04f0q00330gh04a0q802z0gi0480qe02u0gk0420qm02q0gl03z0qu02k0gm03v0r002g0go03s0r802a0gq03m0rg0260gr03k0rm0210gs03f0ru01w0gu03d0s001r0gv0380s801n0gx0350se01i0gy0300sm01d0h002y0ss0180h102u0sy0150h302q0t600z0h402m0tc00w0h502k0ti00q0h702f0tq00m0h902c0tw00h0ha0280u200e0hb0260u80080hd0210ug0040he01z1c101u1c501s1c701o1cb01m1ce01g1cj01e1cl01a1cp0181cr0141cw0111cy00x1d200v1d400r1d900o1db00k1df00i1dh00f1dk00d1dn0081dr0061dt002avu"
        },
        Da = {width: 526, height: 671, Wd: 526, Ud: 671, te: "5 km", oe: Infinity, Le: 42, Me: -10.5, qe: 63.5, Fe: 30},
        K = {
            gfs: {
                name: "GFS",
                start: x.gfsTimelineStart,
                end: x.gfsTimelineEnd,
                Jd: x.gfsUpdated,
                Pd: 360,
                source: ["NOAA"],
                ne: ["http://www.noaa.gov"],
                ji: Date.UTC(2020, 9, 1, 0),
                size: ra,
                C: 180,
                Md: {
                    "clouds-total": {},
                    "clouds-low": {start: Date.UTC(2018, 1, 6, 0)},
                    "clouds-middle": {start: Date.UTC(2018, 1, 6, 0)},
                    "clouds-high": {start: Date.UTC(2018, 1, 6, 0)},
                    "rain-3h": {variant: "typed"},
                    "rain-ac": {start: x.gfsAccumulationStart},
                    pressure: {},
                    cape: {},
                    cin: {start: Date.UTC(2018, 0, 1, 0)},
                    li: {start: Date.UTC(2018, 0, 1, 0)},
                    "cape-shear": {start: Date.UTC(2018, 4, 17, 0)},
                    shear: {start: Date.UTC(2018, 4, 17, 0)},
                    dew: {start: Date.UTC(2018, 1, 10, 0)},
                    helicity: {start: Date.UTC(2018, 0, 1, 0)},
                    "temperature-2m": {},
                    feel: {start: Date.UTC(2019, 1, 15, 0)},
                    "temperature-5cm": {start: Date.UTC(2018, 1, 6, 0)},
                    "temperature-950hpa": {},
                    "temperature-925hpa": {},
                    "temperature-900hpa": {},
                    "temperature-850hpa": {},
                    "temperature-800hpa": {},
                    "temperature-750hpa": {},
                    "temperature-700hpa": {},
                    "temperature-650hpa": {},
                    "temperature-600hpa": {},
                    "temperature-500hpa": {},
                    "temperature-300hpa": {},
                    "temperature-200hpa": {},
                    "temperature-10hpa": {start: Date.UTC(2018, 1, 6, 0)},
                    "temperature-anomaly-2m": {start: Date.UTC(2021, 4, 27, 0)},
                    "precipitation-anomaly": {C: 360, start: Date.UTC(2022, 0, 2, 0)},
                    "wind-10m": {},
                    "wind-100m": {start: Date.UTC(2018, 1, 6, 0)},
                    "wind-950hpa": {},
                    "wind-925hpa": {},
                    "wind-900hpa": {},
                    "wind-850hpa": {},
                    "wind-800hpa": {},
                    "wind-750hpa": {},
                    "wind-700hpa": {},
                    "wind-650hpa": {},
                    "wind-600hpa": {},
                    "wind-500hpa": {},
                    "wind-300hpa": {},
                    "wind-200hpa": {},
                    "wind-10hpa": {start: Date.UTC(2018, 1, 19, 0)},
                    gust: {},
                    "gust-ac": {start: x.gfsAccumulationStart},
                    humidity: {start: Date.UTC(2018, 2, 1, 0)},
                    "humidity-900hpa": {start: Date.UTC(2021, 2, 6, 0)},
                    "humidity-850hpa": {start: Date.UTC(2021, 2, 6, 0)},
                    "humidity-700hpa": {start: Date.UTC(2021, 2, 6, 0)},
                    snow: {},
                    "new-snow-ac": {start: x.gfsAccumulationStart},
                    freezing: {}
                }
            },
            gem: {
                name: "GEM",
                start: x.gemTimelineStart,
                end: x.gemTimelineEnd,
                Jd: x.gemUpdated,
                Pd: 720,
                source: ["CMC"],
                ne: ["https://www.canada.ca/en/index.html"],
                ji: Date.UTC(2022,
                    0, 1, 0),
                size: {width: 2400, height: 1201, te: "15 km", oe: 5},
                C: 180,
                Md: {
                    "clouds-total": {},
                    "rain-3h": {variant: "typed"},
                    "rain-ac": {start: x.gemAccumulationStart},
                    pressure: {},
                    "temperature-2m": {},
                    gust: {start: Date.UTC(2022, 8, 4, 0)},
                    "gust-ac": {start: x.iconAccumulationStart},
                    "temperature-950hpa": {},
                    "temperature-925hpa": {},
                    "temperature-900hpa": {},
                    "temperature-850hpa": {},
                    "temperature-800hpa": {},
                    "temperature-750hpa": {},
                    "temperature-700hpa": {},
                    "temperature-600hpa": {},
                    "temperature-500hpa": {},
                    "temperature-300hpa": {},
                    "temperature-200hpa": {},
                    "wind-10m": {},
                    "wind-950hpa": {},
                    "wind-925hpa": {},
                    "wind-900hpa": {},
                    "wind-850hpa": {},
                    "wind-800hpa": {},
                    "wind-750hpa": {},
                    "wind-700hpa": {},
                    "wind-600hpa": {},
                    "wind-500hpa": {},
                    "wind-300hpa": {},
                    "wind-200hpa": {},
                    snow: {},
                    dew: {start: Date.UTC(2022, 8, 4, 0)}
                }
            },
            ecmwf_lres: {
                name: "ECMWF",
                start: x["ecmwf-lresTimelineStart"],
                end: x["ecmwf-lresTimelineEnd"],
                Jd: x["ecmwf-lresUpdated"],
                Pd: 360,
                source: ["ECMWF"],
                ne: ["https://www.ecmwf.int"],
                ji: Date.UTC(2022, 4, 1, 0),
                size: {width: 900, height: 451, Wd: 900, Ud: 451, te: "35 km", oe: Infinity},
                Zi: [{
                    start: x["ecmwf-lresTimelineStart"],
                    end: x["ecmwf-lres6hStart"],
                    C: 180
                }, {start: x["ecmwf-lres6hStart"], end: x["ecmwf-lresTimelineEnd"], C: 360}],
                Md: {
                    "rain-3h": {},
                    "rain-ac": {start: x["ecmwf-lresAccumulationStart"]},
                    pressure: {},
                    "temperature-2m": {},
                    "temperature-925hpa": {},
                    "temperature-850hpa": {},
                    "temperature-700hpa": {},
                    "temperature-500hpa": {},
                    "temperature-300hpa": {},
                    "wind-10m": {},
                    "wind-925hpa": {},
                    "wind-850hpa": {},
                    "wind-700hpa": {},
                    "wind-500hpa": {},
                    "wind-300hpa": {}
                }
            },
            icon: {
                name: "ICON",
                start: x.iconTimelineStart,
                end: x.iconTimelineEnd,
                Jd: x.iconUpdated,
                Pd: 360,
                source: ["DWD"],
                ne: ["http://www.dwd.de"],
                ji: Date.UTC(2020, 9, 1, 0),
                g: [{G: "icon_eu", jf: 5}],
                size: xa,
                Zi: [{start: x.iconTimelineStart, end: x.icon3hStart, C: 60}, {
                    start: x.icon3hStart,
                    end: x.iconTimelineEnd,
                    C: 180
                }],
                Md: {
                    "clouds-fog": {},
                    "clouds-total": {},
                    "clouds-high": {start: Date.UTC(2018, 1, 10, 0)},
                    "clouds-low": {start: Date.UTC(2018, 1, 10, 0)},
                    "clouds-middle": {start: Date.UTC(2018, 1, 10, 0)},
                    "rain-1h": {variant: "typed", end: x.icon3hStart},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x.iconAccumulationStart},
                    pressure: {},
                    "temperature-2m": {},
                    feel: {start: Date.UTC(2019, 1, 15, 0)},
                    "temperature-5cm": {start: Date.UTC(2018, 1, 10, 0)},
                    "temperature-950hpa": {size: ra, start: Date.UTC(2018, 1, 10, 0)},
                    "temperature-850hpa": {size: ra},
                    "temperature-700hpa": {size: ra},
                    "temperature-500hpa": {size: ra},
                    "temperature-300hpa": {size: ra},
                    "wind-10m": {},
                    "wind-100m": {start: Date.UTC(2018, 1, 10, 0)},
                    "wind-250m": {start: Date.UTC(2018, 1, 10, 0)},
                    "wind-950hpa": {size: ra, start: Date.UTC(2018, 1, 10, 0)},
                    "wind-850hpa": {size: ra},
                    "wind-700hpa": {size: ra},
                    "wind-500hpa": {size: ra},
                    "wind-300hpa": {size: ra},
                    gust: {},
                    "gust-ac": {start: x.iconAccumulationStart},
                    snow: {start: Date.UTC(2017, 9, 1, 0)},
                    "new-snow-ac": {start: x.iconAccumulationStart},
                    dew: {start: Date.UTC(2018, 1, 10, 0)},
                    freezing: {},
                    wave: {
                        Mf: "icon_water",
                        C: 180,
                        size: Ca,
                        start: x["icon-waterTimelineStart"],
                        end: x["icon-waterTimelineEnd"],
                        Jd: x["icon-waterUpdated"],
                        Pd: 720
                    },
                    "wind-wave": {
                        Mf: "icon_water",
                        C: 180,
                        size: Ca,
                        start: x["icon-waterTimelineStart"],
                        end: x["icon-waterTimelineEnd"],
                        Jd: x["icon-waterUpdated"],
                        Pd: 720
                    },
                    "wind-wave-period": {
                        Mf: "icon_water",
                        C: 180,
                        size: Ca,
                        start: x["icon-waterTimelineStart"],
                        end: x["icon-waterTimelineEnd"],
                        Jd: x["icon-waterUpdated"],
                        Pd: 720
                    },
                    swell: {
                        Mf: "icon_water",
                        C: 180,
                        size: Ca,
                        start: x["icon-waterTimelineStart"],
                        end: x["icon-waterTimelineEnd"],
                        Jd: x["icon-waterUpdated"],
                        Pd: 720
                    },
                    "swell-period": {
                        Mf: "icon_water",
                        C: 180,
                        size: Ca,
                        start: x["icon-waterTimelineStart"],
                        end: x["icon-waterTimelineEnd"],
                        Jd: x["icon-waterUpdated"],
                        Pd: 720
                    }
                }
            },
            hrrr: {
                name: "HRRR",
                start: x.hrrrTimelineStart,
                end: x.hrrrTimelineEnd,
                Jd: x.hrrrUpdated,
                Pd: 60,
                source: ["NOAA"],
                ne: ["http://www.noaa.gov"],
                xf: "USA",
                ji: Date.UTC(2020, 9, 1, 0),
                size: Oa,
                C: 60,
                Md: {
                    "clouds-fog": {},
                    "clouds-total": {},
                    "clouds-low": {},
                    "clouds-middle": {},
                    "clouds-high": {},
                    "rain-1h": {variant: "typed"},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x.hrrrAccumulationStart},
                    pressure: {},
                    cape: {},
                    cin: {},
                    helicity: {},
                    dew: {},
                    radar: {variant: "typed", start: Date.UTC(2022, 4, 25, 0)},
                    "temperature-2m": {},
                    feel: {start: Date.UTC(2019, 1, 15, 0)},
                    "temperature-5cm": {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {start: x.hrrrAccumulationStart},
                    humidity: {},
                    snow: {},
                    "new-snow-ac": {start: x.hrrrAccumulationStart},
                    freezing: {}
                }
            },
            nbm: {
                name: "NBM",
                start: x.nbmTimelineStart,
                end: x.nbmTimelineEnd,
                Jd: x.nbmUpdated,
                Pd: 60,
                source: ["NOAA"],
                ne: ["http://www.noaa.gov"],
                xf: "USA",
                size: Oa,
                C: 60,
                Md: {
                    "clouds-total": {},
                    "rain-1h": {variant: "typed"},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x.nbmAccumulationStart},
                    "temperature-2m": {},
                    feel: {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {start: x.nbmAccumulationStart},
                    humidity: {}
                }
            },
            icon_eu: {
                name: "ICON",
                start: x["icon-euTimelineStart"],
                end: x["icon-euTimelineEnd"],
                Jd: x["icon-euUpdated"],
                Pd: 180,
                source: ["DWD"],
                ne: ["http://www.dwd.de"],
                xf: "EU",
                size: {
                    width: 1097,
                    height: 657,
                    Wd: 400,
                    Ud: 240,
                    te: "7 km",
                    Hf: 275,
                    Gf: 220,
                    oe: 6,
                    Le: 45,
                    Me: -23.5,
                    qe: 70.5,
                    Fe: 29.5
                },
                Zi: [{start: x["icon-euTimelineStart"], end: x["icon-eu3hStart"], C: 60}, {
                    start: x["icon-eu3hStart"],
                    end: x["icon-euTimelineEnd"],
                    C: 180
                }],
                Md: {
                    "clouds-fog": {},
                    "clouds-total": {},
                    "clouds-low": {start: Date.UTC(2018, 1, 10, 0)},
                    "clouds-middle": {start: Date.UTC(2018, 1, 10, 0)},
                    "clouds-high": {
                        start: Date.UTC(2018,
                            1, 10, 0)
                    },
                    "rain-1h": {variant: "typed", end: x["icon-eu3hStart"]},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x["icon-euAccumulationStart"]},
                    pressure: {},
                    "temperature-2m": {},
                    feel: {start: Date.UTC(2019, 1, 15, 0)},
                    "temperature-5cm": {start: Date.UTC(2018, 1, 10, 0)},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {start: x["icon-euAccumulationStart"]},
                    snow: {},
                    "new-snow-ac": {start: x["icon-euAccumulationStart"]},
                    humidity: {start: Date.UTC(2018, 2, 1, 0)},
                    freezing: {},
                    wave: {
                        Mf: "icon_eu_water", size: Da, C: 180, start: x["icon-eu-waterTimelineStart"],
                        end: x["icon-eu-waterTimelineEnd"], Jd: x["icon-eu-waterUpdated"], Pd: 720
                    },
                    "wind-wave": {
                        Mf: "icon_eu_water",
                        size: Da,
                        C: 180,
                        start: x["icon-eu-waterTimelineStart"],
                        end: x["icon-eu-waterTimelineEnd"],
                        Jd: x["icon-eu-waterUpdated"],
                        Pd: 720
                    },
                    "wind-wave-period": {
                        Mf: "icon_eu_water",
                        size: Da,
                        C: 180,
                        start: x["icon-eu-waterTimelineStart"],
                        end: x["icon-eu-waterTimelineEnd"],
                        Jd: x["icon-eu-waterUpdated"],
                        Pd: 720
                    },
                    swell: {
                        Mf: "icon_eu_water",
                        size: Da,
                        C: 180,
                        start: x["icon-eu-waterTimelineStart"],
                        end: x["icon-eu-waterTimelineEnd"],
                        Jd: x["icon-eu-waterUpdated"],
                        Pd: 720
                    },
                    "swell-period": {
                        Mf: "icon_eu_water",
                        size: Da,
                        C: 180,
                        start: x["icon-eu-waterTimelineStart"],
                        end: x["icon-eu-waterTimelineEnd"],
                        Jd: x["icon-eu-waterUpdated"],
                        Pd: 720
                    }
                }
            },
            icon_de: {
                name: "ICON",
                start: x["icon-deTimelineStart"],
                end: x["icon-deTimelineEnd"],
                Jd: x["icon-deUpdated"],
                Pd: 180,
                source: ["DWD"],
                ne: ["http://www.dwd.de"],
                xf: "DE",
                size: {
                    width: 1215,
                    height: 746,
                    Wd: 405,
                    Ud: 249,
                    te: "1.4 km",
                    Hf: 243,
                    Gf: 187,
                    oe: 7,
                    Le: 20.36,
                    Me: -3.96,
                    qe: 58.06,
                    Fe: 43.18,
                    Ge: "0hg00900r00d00n00e00n00b00q00700u0010qm00900r00k00g00q00a00t00700t00700r00a00m00g00e0pa00e00l00u00506100200s00g00c00q0010mf00f00j09600300p00d00d00p0010ke00e00l0bz00c00d0k30dy00e00a0ib0f200200m0h200i00g0g000d00a0g40h900200l00i0040ea0j400700e0e10jz00f0060c80l600500g0bz0m00ay0n100b0090a40nb00100j08y0p100b0080860p900200h0710qx00f00406a0r600500d05a0so0520sw04u0sx03w0tv03v0tw03u0tx02x0ut02x0us02j0v90250vm0240vo01j0w80150wn0130wm00t0ww00e0xd00d0xe0080xk0030xo0030xp0020xo0030xm0060xk0080xj0070xl0050xm0050xn0050xm0070xi0080xh0090xj0080xj0090xh00b0xe00f0xb00h0xb00g0xb00f0xd00d0xe00e0xd00f0xa00h0x900h0xa00h0xa00i0xa00i0x900j0x900j0x600m0x300n0x400m0x600m0x500n0x400o0x400p0x100q0wz00s0wy00s0x000r0x000s0x000s0wz00r0x000q0wy00u0wx00v0ww00w0wv00x0wv00x0wu00x0wu00w0wt00y0ws0100wr0110wr00z0ws00y0wt00y0wu00y0wr0120wn0150wm0160wm0150wm0140wo0120wp0130wn0150wk0170wk0160wl0160wl0170wl0170wk0180wj0190wg01c0we01c0wf01b0wh01b0wg01c0wf01c0wg01a0wf01b0we01e0wd01g0wc01g0wb01h0wb01h0wa01g0wa01g0w901i0w901j0w801l0w601m0w601m0w501l0w601k0w501m0w401o0w301p0w301o0w301n0w501m0w501n0w201q0w001s0vz01t0vy01t0vy01s0w001q0w101r0w001t0vw01v0vv01v0vw01u0vy01u0vx01v0vw01w0vw01w0vt01z0vq0200vs01y0vt01z0vs0200vs01z0vs01y0vs01z0vq0210vq0220vp0230vp0240vn0250vm0240vn0230vm0250vl0270vk0280vk0260vl0250vn0240vn0250vk0290vg02c0vg02c0vf02c0vg02a0vh0290vi02a0vg02c0vd02f0vc02g0vc02g0vb02f0va02g0v902j0v902j0v802j0v802j0v902h0va02h0v902j0v602m0v502n0v402p0v302n0v402m0v602l0v502n0v202q0v002q0v202o0v302o0v402o0v302p0v202q0uz02u0uw02v0uw02u0ux02t0uz02t0uy02u0uy02t0ux02t0uw02u0uw02w0uw02w0uv02x0uv02x0uu02y0ut02x0us02y0us0300ur0310ur0310uq0320up0330up0320un0330um0340uo0340un0350um0350un0330uo0330un0350ul0370uj0390ui03a0ui0390ui0380uk0360ul0370ui03a0uf03d0uf03b0ug03a0ui0390ui03b0ug03c0ue03e0ub03h0ua03g0uc03e0ud03e0ud03f0ud03f0ub03h0u803k0u703k0u703j0u803i0ua03i0u903j0u903i0u703k0u503l0u603m0u603m0u503n0u503n0u403o0u203o0u103p0u203p0u203q0u203q0u103p0u203o0u303o0u203q0tz03t0tz03t0ty03u0tx03u0ty03s0tz03s0ty03u0tv03x0tu03w0tv03w0tw03u0tx03v0tx03v0tv03x0ts0400tr0410tq0400tr03z0tt03y0tt03z0ts0400tq0420tn0450tm0450tn0430to0420tq0420tp0430tn0440tl0450tm0450tm0460tm0460tl0470tk0480tj0480ti0480th04a0ti0490ti04a0th04b0th0490ti0480ti0490tg04c0tf04d0tf04d0te04e0td04e0te04c0te04c0te04e0tc04g0tb04h0ta04i0ta04i0t904h0tb04f0ta04i0t704l0t704k0t704j0t804i0t704l0t504n0t404o0t404o0t304p0t204o0t404m0t404n0t204q0t104r0t004r0t104p0t204o0t304p0t204q0sz04t0sx04v0sx04v0sw04u0sx04t0sz04s0sz04t0sx04v0su04y0st04z0st04y0st04x0su04w0sw04w0su04y0sr0500sr04z0ss04z0st04y0st04z0ss0500sr0510sp0530sm0540so0520sp0530so0530sp0530so0540sm0560sk0570sj0570sl0560sl0560sl0570sl0560sl0550sk0570sj0590si05a0si05a0sh05a0sh05b0sh0590sh05a0sf05c0sf05d0se05d0se05d0sf05b0sg05b0sg05c0sd05f0sb05h0sb05g0sb05h0sa05g0sc05e0sd05f0sb05h0s805k0s705k0s805k0s705k0s705j0s905i0s805k0s605m0s405m0s505l0s705k0s705l0s605m0s605m0s305o0s205q0s105p0s205o0s405o0s305p0s205p0s205q0rz05t0rx05u0ry05s0rz05s0s005r0s005s0rz05s0ry05s0rx05u0rx05v0rx05u0rx05v0rx05v0rw05w0ru05w0ru05w0ru05x0ru05y0ru05y0rt05x0ru05w0rw05w0rt05y0rs0600rr0610rq0620rq0610rq0600rr05z0rs0600rp0630ro0640rn0650rm0660rm0640rn0630ro0630rn0650rk0680rk0660rl0660rl0650rn0650rm0660rk0680ri06a0rg06b0rh0690ri0690rh06a0rf06d0re06e0re06e0rd06e0rd06e0re06c0re06d0rd06f0rb06g0rb06g0rc06e0rd06e0rd06f0rd06f0ra06h0r906j0r806k0r706j0r906h0ra06h0ra06i0r906j0r606m0r506n0r406n0r406m0r606k0r706l0r606m0r406n0r306n0r406n0r406n0r406o0r406o0r306p0r206p0r006r0qz06r0r106q0r106r0r006s0r006r0r006s0qy06u0qv06v0qw06u0qy06t0qy06u0qx06v0qx06t0qx06t0qx06u0qw06w0qv06x0qv06x0qu06y0qt06y0qu06w0qu06w0qt06z0qs0700qr0700qs06y0qt06y0qt06y0qt06z0qr0710qp0720qp0730qo0730qp0710qq0710qr0700qp0730qn0750qm0760ql0770ql0750qm0740qn0740qn0750ql0770qj0770qk0760ql0760qm0760ql0770qk0780qi0790qh07b0qg07a0qh0790qi07a0qi0790qi07a0qh07b0qe07e0qc07f0qd07d0qe07c0qf07d0qf07d0qe07d0qd07d0qd07d0qd07f0qd07f0qc07g0qa07h0q807k0q707k0q807i0q907i0qa07h0qa07i0q907j0q607m0q407n0q507l0q607l0q607l0q707l0q607l0q507m0q407m0q407n0q507n0q407o0q307o0q407o0q307o0q107p0q107q0q107q0q207q0q107r0q107r0q007r0pz07s0py07s0py07t0pz07t0py07t0py07t0pz07r0q007r0py07u0pw07v0pw07w0pw07w0pv07x0pu07w0pw07u0pw07v0pv07x0pt07z0pt07y0pt07z0ps07z0pt07y0pt07x0ps07z0pr0810pq0820pq0820pp0830po0820pq0800pq0810pp0830pn0840pn0840po0830po0820pq0820pp0820po0840pl0870pk0880pk0860pl0850pm0850pn0850pl0870pj0880pi08a0ph08b0ph0890pi0880pk0870pk0880pi08a0pg08a0pg08a0pi0890pi08a0pg08c0pd08f0pc08f0pd08f0pc08e0pd08d0pf08c0pf08d0pc08g0pa08i0pa08h0pa08h0pa08h0pb08f0pc08g0pa08h0p908i0p808j0p908h0pa08i0p908i0pa08i0p908j0p708l0p408m0p608k0p708k0p708l0p708k0p708l0de00900o00a00n00909o08n0bn00a00n00g00c00n00a00n00a00l00h00d00k00707r08p0ap00i00e00r00603k00400p00800j00f00b06q08o09x00k00807800400m00g00905r08n09500j00909100500j00j00404v08n08800k00c0ar00900e04n08n07e00c00g0ck00f00703s08o07c0dm00400h03k08n06l0f800c00902p08n05t00b00h0fh00300i02g08o05t0h200c00701p08p05300g0080ha00400g01h08q0510ir00e00500q08q04900o0040iy00600d00k08q0470kh00d08q03g0lf00508r03f0ub02s00m0010uc02r0v101y00900i0v301w0vv01w0vw0170wk0160rk"
                },
                C: 60,
                Md: {
                    "clouds-fog": {},
                    "clouds-total": {},
                    "clouds-low": {},
                    "clouds-middle": {},
                    "clouds-high": {},
                    "rain-1h": {variant: "typed"},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x["icon-deAccumulationStart"]},
                    "temperature-2m": {},
                    feel: {},
                    "temperature-5cm": {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {start: x["icon-deAccumulationStart"]},
                    snow: {},
                    "new-snow-ac": {start: x["icon-deAccumulationStart"]},
                    humidity: {},
                    freezing: {},
                    radar: {variant: "typed", start: Date.UTC(2022, 4, 25, 0)}
                }
            },
            arome: {
                name: "AROME",
                start: x.aromeTimelineStart,
                end: x.aromeTimelineEnd,
                Jd: x.aromeUpdated,
                Pd: 360,
                source: ["Meteofrance"],
                ne: ["https://meteofrance.com/"],
                xf: "FR",
                size: {
                    width: 601,
                    height: 801,
                    Wd: 601,
                    Ud: 801,
                    te: "2.5 km",
                    oe: Infinity,
                    Le: 12,
                    Me: -8,
                    qe: 53,
                    Fe: 38
                },
                C: 60,
                Md: {
                    "clouds-fog": {},
                    "clouds-total": {},
                    "clouds-low": {},
                    "clouds-middle": {},
                    "clouds-high": {},
                    "rain-1h": {variant: "typed"},
                    "rain-3h": {variant: "typed", C: 180},
                    "rain-ac": {start: x.aromeAccumulationStart},
                    "temperature-2m": {},
                    feel: {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {start: x.aromeAccumulationStart},
                    humidity: {},
                    dew: {},
                    pressure: {},
                    cape: {}
                }
            },
            ukmo: {
                name: "UKMO",
                start: x.ukmoTimelineStart,
                end: x.ukmoTimelineEnd,
                Jd: x.ukmoUpdated,
                Pd: 360,
                source: ["Metoffice"],
                ne: ["https://www.metoffice.gov.uk/"],
                size: {width: 2560, height: 1920, te: "13 km", oe: 5},
                rf: "icon",
                C: 60,
                Md: {radar: {variant: "typed", mk: x.gfsTimelineEnd}}
            },
            ukmo_uk: {
                name: "UKMO",
                start: x["ukmo-ukTimelineStart"],
                end: x["ukmo-ukTimelineEnd"],
                Jd: x["ukmo-ukUpdated"],
                Pd: 60,
                source: ["Metoffice"],
                ne: ["https://www.metoffice.gov.uk/"],
                xf: "UK",
                size: {
                    width: 455, height: 639, Wd: 455, Ud: 639,
                    te: "2 km", oe: Infinity, Le: 2, Me: -11, qe: 60, Fe: 49
                },
                rf: "icon",
                C: 60,
                Md: {radar: {variant: "typed"}}
            },
            worad: {
                name: "WORAD",
                start: x.woradTimelineStart,
                end: x.woradTimelineEnd,
                Jd: x.woradUpdated,
                Pd: 60,
                source: ["NOAA", "EUMETSAT", "DWD", "Rainviewer.com"],
                ne: ["http://www.noaa.gov", "https://www.eumetsat.int", "https://www.dwd.de", "https://www.rainviewer.com/sources.html"],
                g: [{G: "eurad", jf: 0}, {G: "usrad", jf: 0}],
                size: xa,
                rf: "icon",
                C: 10,
                Md: {radar: {variant: "typed", end: k.min(x.woradUpdated, x.euradUpdated, x.usradUpdated)}}
            },
            eurad: {
                name: "EURAD",
                start: x.euradTimelineStart,
                end: x.euradTimelineEnd,
                Jd: x.euradUpdated,
                Pd: 10,
                source: "DWD Meteofrance \u010cHM\u00da Metoffice SHMI KNMI SHM\u00da IMGW AEMET Rainviewer.com NOAA EUMETSAT".split(" "),
                ne: "https://www.dwd.de https://www.meteofrance.fr http://www.chmi.cz https://www.metoffice.gov.uk https://www.smhi.se https://www.knmi.nl http://www.shmu.sk http://www.imgw.pl http://www.aemet.es/ https://www.rainviewer.com/sources.html http://www.noaa.gov https://www.eumetsat.int".split(" "),
                xf: "EU",
                size: {
                    width: 1645,
                    height: 985,
                    Wd: 600,
                    Ud: 360,
                    te: "3 km",
                    Hf: 275,
                    Gf: 250,
                    oe: 6,
                    Le: 45,
                    Me: -23.5,
                    qe: 70.5,
                    Fe: 29.5
                },
                rf: "icon_eu",
                C: 60,
                Md: {
                    "rain-1h": {variant: "typed"},
                    "rain-3h": {variant: "typed", C: 180},
                    radar: {variant: "typed", C: 10, end: x.euradUpdated}
                }
            },
            usrad: {
                name: "USRAD",
                start: x.usradTimelineStart,
                end: x.usradTimelineEnd,
                Jd: x.usradUpdated,
                Pd: 10,
                source: ["NOAA"],
                ne: ["http://www.noaa.com"],
                xf: "USA",
                size: Oa,
                rf: "hrrr",
                C: 60,
                Md: {
                    "rain-1h": {variant: "typed"}, "rain-3h": {variant: "typed", C: 180}, radar: {
                        variant: "typed", C: 10, size: {
                            width: 2699,
                            height: 1589,
                            Wd: 600,
                            Ud: 350,
                            te: "2 km",
                            Hf: 260,
                            Gf: 270,
                            oe: 7,
                            Le: -60.9365,
                            Me: -134.0955,
                            qe: 52.6133,
                            Fe: 21.1405,
                            Ge: "yac05l1w00891uq0891ts0a91ru0bx1r20bx1qe0dc1oy0eo1ob0eo1nq0fx1mh0h01lz0h01lh0i31kc0j31jw0j31jh0k01ih0kx1i20kx1hn0lt1gq0mm1gd0mm1g10nf1f50o61et0o61ef0oz1dn0po1db0po1cz0qf1c60r31bw0r31bm0rr1au0sf1ak0sf1aa0t119m0to19b0to1920u918c0ux1820ux17t0vi1750w216x0w216q0wl1620x615t0x615k0xp14z0y914q0y914j0yr13w0za13p0za13h0zu12v10c12n10c12f10u11v11a11p11a11j11r10x12910q12910j12r0zz1360zt1360zl13o0z21430yw1430yq14i0y71500xz1500xt15f0xb15u0x515u0wz1690wh16o0wb16o0w51730vn17i0vh17i0vb17x0ut18c0un18c0uh18r0tz1960tt1960to19i0t819x0t219x0sw1ac0sg1ao0sb1ao0s51b30ro1bf0rk1bf0re1bu0qy1c60qt1c60qo1ci0q81cx0q21cx0py1d90pi1dl0pe1dl0p81e00os1ec0on1ec0oi1eo0o41f00nz1f00nu1fc0ng1fo0nb1fo0n61g00ms1gc0mn1gc0mi1go0m41h00lz1h00lu1hc0lg1ho0lb1ho0l61i00ks1ic0kn1ic0ki1io0k41iy0k11iy0jy1j90ji1jl0je1jl0ja1jx0iu1k80ir1k80io1ki0ia1ku0i51ku0i21l30ho1lf0hk1lf0hg1lr0h21m00gz1m00gu1mc0gh1ml0ge1ml0ga1mx0fw1n60ft1n60fo1ni0fb1nr0f81nr0f41o30eq1oc0en1oc0ek1ol0e61ox0e21ox0dz1p60dn1pf0dk1pf0dg1pr0d21q00cz1q00cw1q90ci1qk0cf1qk0cc1qu0bz1r30bw1r30bt1rc0bh1rl0be1rl0ba1rv0ay1s60at1s60aq1sf0ae1so0ab1so0a81sx09w1t609t1t609q1tf09e1to09b1to0981tx08w1u608t1u608q1uf08e1uo08b1uo0881ux07w1v607t1v607q1vf07e1vo07b1vo0781vx06w1w606t1w606q1wf06e1wo06b1wo0681wx05w1x605t1x605q1xf05f1xl05e1xl05b1xu04z1y304w1y304t1y904n1yf04k1yf04h1yl04b1yr0481yr0451yx03y1z403v1z403s1za03m1zi03h1zi03c1zq0361zw0331zw03020202u20802r20802n20g02g20m02d20m02a20s02221001z21001w21601q21c01n21c01k21k01b21r01821r01521x01022200x22200x22300y22000z22000z22001021x01221x01221x01421u01521u01521u01621r01821r01821r01821q01921q01b21o01b21m01d21m01e21n01c21l01e21l01g21i01h21i01h21i01i21f01j21g01j21g01k21e01n21c01n21c01n21c01o21901q21901q21901s21601t21601t21601u21301w21301w21301w21201x21201z21101y21001z21002020x02220x02220x02420u02320w02320w02520s02820r02820r02820r02a20o02b20o02b20o02c20l02e20l02e20l02g20i02h20i02h20j02g20i02h20i02i20f02k20f02k20f02m20c02n20c02n20c02o20902p20a02p20a02q20902s20602t20602t20602u20302w20302w20302w20202x20202z20102y20002z2000301zx0321zx0321zx0341zu0331zw0331zw0351zs0381zr0381zr0381zr03a1zo03b1zo03b1zo03c1zl03e1zl03e1zl03e1zk03f1zk03h1zj03g1zi03h1zi03i1zf03k1zf03k1zf03k1ze03n1zc03n1zc03n1zc03o1z903q1z903q1z903s1z603t1z603t1z603t1z603t1z603u1z303w1z303w1z303y1z003z1z003z1z003z1yy0421yx0421yx0421yx0441yu0451yu0451yu0451ys0471ys0481yr0481yr0481yr04a1yo04b1yo04b1yo04c1yl04d1ym04d1ym04e1yl04g1yi04h1yi04h1yi04i1yf04k1yf04k1yf04k1yf04k1yf04m1yc04n1yc04n1yc04o1y904q1y904q1y904q1y904s1y604t1y604t1y604u1y304w1y304w1y304w1y304w1y304y1y004z1y004z1y00501xx0521xx0521xx0521xx0541xu0551xu0551xu0561xr0581xr0581xr0581xr0581xr05a1xo05b1xo05b1xo05c1xl05e1xl05e1xl05e1xl05g1xi05h1xi05h1xi05h1xg05j1xg05k1xf05k1xf05k1xf05m1xc05n1xc05n1xc05n1xa05q1x905q1x905q1x905s1x605t1x605t1x605t1x605t1x605u1x305w1x305w1x305y1x005z1x005z1x005z1x00601wx0621wx0621wx0621ww0631ww0651wu0651wu0651wu0661wr0681wr0681wr0681wr06a1wo06b1wo06b1wo06c1wl06e1wl06e1wl06e1wl06e1wl06g1wi06h1wi06h1wi06h1wg06k1wf06k1wf06k1wf06m1wc06n1wc06n1wc06n1wc06n1wc06o1w906q1w906q1w906s1w606t1w606t1w606t1w606u1w306w1w306w1w306w1w306w1w306y1w006z1w006z1w00701vx0721vx0721vx0721vx0741vu0751vu0751vu0751vu0751vu0761vr0781vr0781vr0781vq07b1vo07b1vo07b1vo07c1vl07e1vl07e1vl07e1vl07e1vl07g1vi07h1vi07h1vi07h1vg07k1vf07k1vf07k1vf07m1vc07n1vc07n1vc07n1vc07n1vc07o1v907q1v907q1v907q1v907s1v607t1v607t1v607t1v407v1v407w1v307w1v307w1v307y1v007z1v007z1v007z1v00801ux0821ux0821ux0821ux0821ux0841uu0851uu0851uu0851us0881ur0881ur0881ur08a1uo08b1uo08b1uo08b1uo08b1uo08c1ul08e1ul08e1ul08e1ul08g1ui08h1ui08h1ui08h1ui08h1ui08i1uf08k1uf08k1uf08m1uc08n1uc08n1uc08n1uc08o1u908q1u908q1u908q1u908q1u908s1u608t1u608t1u608t1u608u1u308w1u308w1u308w1u308w1u308y1u008z1u008z1u008z1u00901tx0921tx0921tx0941tu0951tu0951tu0951tu0951tu0961tr0981tr0981tr0981tr09a1to09b1to09b1to09b1to09b1to09c1tl09e1tl09e1tl09e1tl09g1ti09h1ti09h1ti09h1ti09h1ti09i1tf09k1tf09k1tf09k1tf09m1tc09n1tc09n1tc09n1tc09n1tc09o1t909q1t909q1t909s1t609t1t609t1t609t1t609u1t309w1t309w1t309w1t309w1t309y1t009z1t009z1t009z1t00a01sx0a21sx0a21sx0a21sx0a21sx0a41su0a51su0a51su0a51su0a61sr0a81sr0a81sr0a81sr0a81sr0aa1so0ab1so0ab1so0ab1so0ac1sl0ae1sl0ae1sl0ae1sl0ae1sl0ag1si0ah1si0ah1si0ah1si0ai1sf0ak1sf0ak1sf0ak1sf0ak1sf0am1sc0an1sc0an1sc0an1sc0ao1s90aq1s90aq1s90aq1s90aq1s90as1s60at1s60at1s60at1s60au1s30aw1s30aw1s30aw1s30aw1s30ay1s00az1s00az1s00az1s00b01rx0b21rx0b21rx0b21rx0b21rx0b41ru0b51ru0b51ru0b51ru0b61rr0b81rr0b81rr0b81rr0b81rr0ba1ro0bb1ro0bb1ro0bb1ro0bc1rl0be1rl0be1rl0be1rl0be1rl0bg1ri0bh1ri0bh1ri0bh1ri0bi1rf0bk1rf0bk1rf0bk1rf0bk1rf0bm1rc0bn1rc0bn1rc0bn1rc0bo1r90bq1r90bq1r90bq1r90bq1r90bq1r90bs1r60bt1r60bt1r60bt1r60bt1r60bu1r30bw1r30bw1r30bw1r30by1r00bz1r00bz1r00bz1r00bz1r00c01qx0c21qx0c21qx0c21qx0c41qu0c51qu0c51qu0c51qu0c51qu0c61qr0c81qr0c81qr0c81qr0ca1qo0cb1qo0cb1qo0cb1qo0cb1qo0cc1qn0cc1ql0ce1ql0ce1ql0ce1ql0ce1ql0cg1qi0ch1qi0ch1qi0ch1qi0ci1qf0ck1qf0ck1qf0ck1qf0ck1qf0cm1qc0cn1qc0cn1qc0cn1qc0co1q90cq1q90cq1q90cq1q90cq1q90cs1q60ct1q60ct1q60ct1q60ct1q60ct1q60cu1q30cw1q30cw1q30cw1q30cy1q00cz1q00cz1q00cz1q00cz1q00d01px0d21px0d21px0d21px0d41pu0d51pu0d51pu0d51pu0d51pu0d61pt0d61pr0d81pr0d81pr0d81pr0d81pr0da1po0db1po0db1po0db1po0dc1pl0de1pl0de1pl0de1pl0de1pl0dg1pi0dh1pi0dh1pi0dh1pi0di1ph0di1ph0di1pf0dk1pf0dk1pf0dk1pf0dm1pc0dn1pc0dn1pc0dn1pc0dn1pc0do1p90dq1p90dq1p90dq1p90ds1p60dt1p60dt1p60dt1p60dt1p60dt1p60du1p30dw1p30dw1p30dw1p30dw1p30dy1p00dz1p00dz1p00dz1p00e01ox0e21ox0e21ox0e21ox0e21ox0e21ox0e41ou0e51ou0e51ou0e51ou0e51ou0e61or0e81or0e81or0e81or0ea1oo0eb1oo0eb1oo0eb1oo0eb1oo0eb1oo0ec1ol0ee1ol0ee1ol0ee1ol0ee1ol0eg1oi0eh1oi0eh1oi0eh1oi0ei1oh0ei1oh0ei1of0ek1of0ek1of0ek1of0em1oc0en1oc0en1oc0en1oc0en1oc0eo1o90eq1o90eq1o90eq1o90eq1o90eq1o90es1o60et1o60et1o60et1o60eu1o30ew1o30ew1o30ew1o30ew1o30ey1o10ey1o00ez1o00ez1o00ez1o00ez1o00f01nx0f21nx0f21nx0f21nx0f41nv0f41nv0f41nu0f51nu0f51nu0f51nu0f61nr0f81nr0f81nr0f81nr0f81nr0fa1no0fb1no0fb1no0fb1no0fb1no0fb1no0fc1nl0fe1nl0fe1nl0fe1nl0fg1ni0fh1ni0fh1ni0fh1ni0fh1ni0fh1ni0fi1nf0fk1nf0fk1nf0fk1nf0fk1nf0fm1nc0fn1nc0fn1nc0fn1nc0fn1nc0fn1nc0fo1n90fq1n90fq1n90fq1n90fs1n60ft1n60ft1n60ft1n60ft1n60ft1n60fu1n30fw1n30fw1n30fw1n30fw1n30fy1n00fz1n00fz1n00fz1n00fz1n00fz1n00g01mx0g21mx0g21mx0g21mx0g41mv0g41mv0g41mu0g51mu0g51mu0g51mu0g61mr0g81mr0g81mr0g81mr0g81mr0ga1mp0ga1mo0gb1mo0gb1mo0gb1mo0gb1mo0gc1ml0ge1ml0ge1ml0ge1ml0ge1ml0ge1ml0gg1mi0gh1mi0gh1mi0gh1mi0gi1mf0gk1mf0gk1mf0gk1mf0gk1mf0gk1mf0gm1mc0gn1mc0gn1mc0gn1mc0gn1mc0go1mb0go1m90gq1m90gq1m90gq1m90gq1m90gs1m60gt1m60gt1m60gt1m60gt1m60gt1m60gu1m30gw1m30gw1m30gw1m30gy1m10gy1m10gy1m00gz1m00gz1m00gz1m00h01lx0h21lx0h21lx0h21lx0h21lx0h21lx0h41lu0h51lu0h51lu0h51lu0h51lu0h61lt0h61lr0h81lr0h81lr0h81lr0h81lr0ha1lo0hb1lo0hb1lo0hb1lo0hb1lo0hb1lo0hc1ll0he1ll0he1ll0he1ll0hg1lj0hg1lj0hg1li0hh1li0hh1li0hh1li0hi1lh0hi1lh0hi1lf0hk1lf0hk1lf0hk1lf0hm1lc0hn1lc0hn1lc0hn1lc0hn1lc0hn1lc0ho1l90hq1l90hq1l90hq1l90hq1l90hs1l70hs1l60ht1l60ht1l60ht1l60ht1l60hu1l30hw1l30hw1l30hw1l30hw1l30hw1l30hy1l00hz1l00hz1l00hz1l00hz1l00hz1l00i01kx0i21kx0i21kx0i21kx0i41kv0i41kv0i41ku0i51ku0i51ku0i51ku0i61kt0i61kt0i61kr0i81kr0i81kr0i81kr0ia1ko0ib1ko0ib1ko0ib1ko0ib1ko0ib1ko0ic1kl0ie1kl0ie1kl0ie1kl0ie1kl0ie1kl0ig1ki0ih1ki0ih1ki0ih1ki0ih1ki0ih1ki0ii1kf0ik1kf0ik1kf0ik1kf0ik1kf0im1kd0im1kc0in1kc0in1kc0in1kc0in1kc0io1kb0io1k90iq1k90iq1k90iq1k90iq1k90is1k70is1k60it1k60it1k60it1k60it1k60iu1k30iw1k30iw1k30iw1k30iw1k30iw1k30iy1k00iz1k00iz1k00iz1k00iz1k00iz1k00j01jx0j21jx0j21jx0j21jx0j21jx0j21jx0j41ju0j51ju0j51ju0j51ju0j51ju0j51ju0j61jr0j81jr0j81jr0j81jr0ja1jp0ja1jp0ja1jo0jb1jo0jb1jo0jb1jo0jc1jn0jc1jn0jc1jl0je1jl0je1jl0je1jl0jg1jj0jg1jj0jg1ji0jh1ji0jh1ji0jh1ji0ji1jh0ji1jh0ji1jf0jk1jf0jk1jf0jk1jf0jm1jd0jm1jd0jm1jc0jn1jc0jn1jc0jn1jc0jo1jb0jo1jb0jo1j90jq1j90jq1j90jq1j90js1j70js1j70js1j60jt1j60jt1j60jt1j60ju1j50ju1j50ju1j30jw1j30jw1j30jw1j30jy1j10jy1j10jy1j00jz1j00jz1j00jz1j00k01iz0k01iz0k01ix0k21ix0k21ix0k21ix0k41iv0k41iv0k41iu0k51iu0k51iu0k51iu0k61it0k61it0k61ir0k81ir0k81ir0k81ir0ka1ip0ka1ip0ka1io0kb1io0kb1io0kb1io0kb1io0kb1io0kc1il0ke1il0ke1il0ke1il0ke1il0ke1il0kg1ii0kh1ii0kh1ii0kh1ii0kh1ii0kh1ii0ki1if0kk1if0kk1if0kk1if0kk1if0kk1if0km1ic0kn1ic0kn1ic0kn1ic0kn1ic0kn1ic0ko1ib0ko1i90kq1i90kq1i90kq1i90kq1i90ks1i70ks1i60kt1i60kt1i60kt1i60kt1i60ku1i50ku1i30kw1i30kw1i30kw1i30kw1i30ky1i10ky1i00kz1i00kz1i00kz1i00kz1i00l01hz0l01hx0l21hx0l21hx0l21hx0l21hx0l21hx0l41hu0l51hu0l51hu0l51hu0l51hu0l51hu0l61hr0l81hr0l81hr0l81hr0l81hr0l81hr0la1hp0la1hp0la1ho0lb1ho0lb1ho0lb1ho0lc1hn0lc1hn0lc1hl0le1hl0le1hl0le1hl0lg1hj0lg1hj0lg1hi0lh1hi0lh1hi0lh1hi0lh1hi0lh1hi0li1hf0lk1hf0lk1hf0lk1hf0lk1hf0lk1hf0lm1hd0lm1hc0ln1hc0ln0of04l0oc0ln0n906u0n90ln0n906u0n90lo0mf08i0me0lo0lo09x0lo0lq0lo09x0lo0lq0l50b30l10lq0kk0c60kj0lq0kk0c60kj0ls0k10d60k00ls0jj0e30jk0lt0jj0e30jk0lt0j40f00j20lt0io0fu0io0lt0io0fu0io0lt0ic0gl0i90lu0hw0hc0hv0lw0hw0hc0hv0lw0hk0i30hg0lw0h60ir0h60lw0h60ir0h60lw0gw0jf0gr0lz0gi0k00gg0m10gi0k00gg0m10g70ko0g20m20fv0l90fr0m40fv0l90fr0m40fm0lu0fe0m60f90mf0f30m80f90mf0f30m80f00mz0er0m90eq0ni0ef0mc0eq0ni0ef0mc0ei0o00e30mg0e40ok0du0mh0e40ok0du0mh0dx0p30dg0mj0dm0pk0d90mk0dm0pk0d90mk0dg0q00cw0mn0d60qi0cm0mp0d60qi0cm0mq0cx0r00cb0mr0co0rf0c30mt0co0rf0c30mt0ch0rx0bp0mw0c80sc0bi0mx0c80sc0bi0mz0c00sr0b70n10br0t60b00n20br0t60b00n20bl0tl0ao0n50bc0u00ag0n70bc0u00ag0n80b50uf0a60n90aw0uu09y0nb0aw0uu09y0nb0aq0v909o0nc0ah0vo09f0nf0ah0vo09f0nf0ac0w00960nj0a10wf08z0nk0a10wf08z0nk09v0wu08o0nm09o0x608g0np09o0x608g0np09i0xl0860nr0990xx0800nt0990xx0800nt0950y907r0nu08w0yo07i0nx08w0yo07i0nx08r0z00790nz08k0zc0730o008k0zc0730o208d0zo06u0o408610006o0o508610006o0o508010d06e0o807s10r0660oa07s10r0660ob07n11305x0oc07f11f05r0oe07f11f05r0oe07b11p05i0oh07512005c0oi07512005c0ok06y12c0530om06r12o04x0on06r12o04x0on06m13004n0oq06f13c04g0os06f13c04g0os06c13l0490ou06313x0430ow06313x0430ow05z14903u0ox05t14i03o0p005t14i03o0p005o14u03f0p405f1560390p505f1560390p505c15f0310p705415r02u0pa05415r02u0pa05116002n0pb04u16c02g0pd04u16c02g0pe04q16l0290pf04i16x0220pi04i16x0220pi04f17601u0pk04917f01q0pl04917f01q0pn04317r01g0pp03x18001c0pq03x18001c0pq03u1890130pt03m18l00x0pv03m18l00x0pw03i18u00q0px03c19300l0pz03c19300l0pz03919c00c0q203219o0060q303219o0060q302z20202r20802r20802o20b02i20h02i20h02f20l02620t02620t02320w01x21201x21201u21501o21b01o21d01j21g01d21m01d21m01a21p01421v01421w01021z00u22500u22500r22800n22c00n22c00k22h00c22n00c22n00922q00322w003mkr"
                        },
                        end: x.usradUpdated
                    }
                }
            },
            silam: {
                name: "SILAM",
                start: x.silamTimelineStart,
                end: x.silamTimelineEnd,
                Jd: x.silamUpdated,
                Pd: 1440,
                source: ["FMI"],
                ne: ["http://silam.fmi.fi/"],
                size: {width: 1800, height: 897, te: "16 km", oe: 5, Hf: 225, Gf: 260, qe: 89.6, Fe: -89.6},
                rf: "gfs",
                C: 180,
                Md: {
                    co: {},
                    no2: {},
                    o3: {},
                    pm10: {},
                    pm25: {},
                    so2: {},
                    dust: {},
                    aqi: {start: Date.UTC(2021, 5, 11, 0)}
                }
            },
            silam_eu: {
                name: "SILAM",
                start: x["silam-euTimelineStart"],
                end: x["silam-euTimelineEnd"],
                Jd: x["silam-euUpdated"],
                Pd: 1440,
                source: ["FMI"],
                ne: ["http://silam.fmi.fi/"],
                xf: "EU",
                size: {
                    width: 700,
                    height: 420,
                    Wd: 700,
                    Ud: 420,
                    te: "8 km",
                    oe: Infinity,
                    Le: 44.95,
                    Me: -24.95,
                    qe: 71.95,
                    Fe: 30.05
                },
                rf: "gfs",
                C: 180,
                Md: {
                    co: {},
                    no2: {},
                    o3: {},
                    pm10: {},
                    pm25: {},
                    so2: {},
                    dust: {},
                    aqi: {start: Date.UTC(2021, 5, 11, 0)}
                }
            },
            goes: {
                name: "GOES",
                start: x.goesTimelineStart,
                end: x.goesUpdated,
                Jd: x.goesUpdated,
                Pd: 10,
                source: ["NOAA/CIRA"],
                ne: ["http://www.nesdis.noaa.gov"],
                size: {
                    fj: !0,
                    width: 6300,
                    height: 7413,
                    Wd: 860,
                    Ud: 1012,
                    te: "2 km",
                    Hf: 256,
                    Gf: 256,
                    oe: 4,
                    Le: -11,
                    Me: -180,
                    qe: 70,
                    Fe: -70
                },
                rf: "icon",
                C: 10,
                Md: {satellite: {mk: x.gfsTimelineEnd}}
            },
            goes16: {
                name: "GOES16",
                start: x.goesTimelineStart,
                end: x.goesUpdated,
                Jd: x.goesUpdated,
                Pd: 10,
                source: ["NOAA/CIRA"],
                ne: ["http://www.nesdis.noaa.gov"],
                size: {
                    fj: !0,
                    width: 9E3,
                    height: 10191,
                    Wd: 500,
                    Ud: 566,
                    te: "1 km",
                    Hf: 256,
                    Gf: 256,
                    oe: 6,
                    Le: -32,
                    Me: -135,
                    qe: 55,
                    Fe: -45
                },
                rf: "icon",
                C: 10,
                Md: {satellite: {}}
            },
            himawari: {
                name: "HIMAWARI",
                start: x.goesTimelineStart,
                end: x.goesUpdated,
                Jd: x.goesUpdated,
                Pd: 10,
                source: ["JMA"],
                ne: ["http://www.jma.go.jp"],
                size: {
                    fj: !0, width: 5100, height: 9478, Wd: 520, Ud: 966, te: "2 km", Hf: 256, Gf: 256, oe: 4, Le: 180,
                    Me: 73, qe: 70, Fe: -70
                },
                rf: "icon",
                C: 10,
                Md: {satellite: {}}
            },
            meteosat: {
                name: "METEOSAT",
                start: x.goesTimelineStart,
                end: x.goesUpdated,
                Jd: x.goesUpdated,
                Pd: 10,
                source: ["EUMETSAT"],
                ne: ["https://www.eumetsat.eu"],
                size: {
                    fj: !0,
                    width: 2232,
                    height: 4530,
                    Wd: 500,
                    Ud: 1014,
                    te: "4 km",
                    Hf: 256,
                    Gf: 256,
                    oe: 4,
                    Le: 78,
                    Me: -20,
                    qe: 70.03,
                    Fe: -70
                },
                rf: "icon",
                C: 10,
                Md: {satellite: {}}
            },
            ecmwf: {
                name: "ECMWF",
                start: x.ecmwfTimelineStart,
                end: x.ecmwfTimelineEnd,
                Jd: x.ecmwfUpdated,
                Pd: 1440,
                source: ["ECMWF"],
                ne: ["https://www.ecmwf.int/"],
                size: {
                    width: 1440,
                    height: 721, Wd: 1440, Ud: 721, te: "22 km", oe: Infinity
                },
                C: 180,
                Md: {"temperature-2m": {}, gust: {}, "rain-3h": {variant: "typed"}, "wind-10m": {}}
            },
            rtofs: {
                name: "RTOFS",
                start: x.rtofsTimelineStart,
                end: x.rtofsTimelineEnd,
                Jd: x.rtofsUpdated,
                Pd: 1440,
                source: ["NOAA"],
                ne: ["http://www.noaa.com"],
                size: {width: 2250, height: 1649, te: "14 km", oe: 5, qe: 89.9, Fe: -78.6},
                C: 360,
                Md: {"temperature-water": {}, currents: {}}
            }
        },
        Y = "icon gfs ecmwf ecmwf_lres gem icon_eu worad eurad usrad ukmo ukmo_uk hrrr nbm icon_de arome goes goes16 meteosat himawari silam silam_eu rtofs".split(" "),
        Pa = {
            Ip: "icon gfs ecmwf ecmwf_lres gem worad ukmo goes silam rtofs".split(" "),
            g: [{G: "eurad", jf: 4}, {G: "usrad", jf: 4}, {G: "ukmo_uk", jf: 4}, {G: "hrrr", jf: 4}, {
                G: "icon_eu",
                jf: 5
            }, {G: "silam_eu", jf: 4}, {G: "goes16", jf: 7}, {G: "meteosat", jf: 0}, {
                G: "himawari",
                jf: 0
            }, {G: "icon_de", jf: 4, b: ["radar"]}]
        }, ob = x.iconAccumulationStart, Ea = ["temperature-2m", "rain-3h"], la = [{
            id: "temperature",
            kind: "altitude",
            f: [{
                id: "temperature-water",
                yc: 0,
                file: "teplota_voda",
                label: "sea-surface",
                description: "temperature-sea-surface",
                B: "currents"
            },
                {id: "temperature-5cm", yc: 1, file: "teplota_surface", label: "5cm"}, {
                    id: "temperature-2m",
                    yc: 2,
                    file: "teplota_2_m",
                    label: "2m",
                    Sf: !0,
                    Hg: !0
                }, {
                    id: "temperature-anomaly-2m",
                    yc: 2,
                    file: "teplota_odchylka_2_m",
                    label: "anomaly-2m",
                    description: "temperature-anomaly-2m"
                }, {
                    id: "temperature-950hpa",
                    yc: 5,
                    file: "teplota_95000_pa",
                    B: "950hpa",
                    label: "950hpa"
                }, {
                    id: "temperature-925hpa",
                    yc: 6,
                    file: "teplota_92500_pa",
                    B: "925hpa",
                    label: "925hpa"
                }, {id: "temperature-900hpa", yc: 7, file: "teplota_90000_pa", B: "900hpa", label: "900hpa"}, {
                    id: "temperature-850hpa",
                    yc: 8, file: "teplota_85000_pa", B: "850hpa", label: "850hpa", Sf: !0
                }, {
                    id: "temperature-800hpa",
                    yc: 9,
                    file: "teplota_80000_pa",
                    B: "800hpa",
                    label: "800hpa"
                }, {
                    id: "temperature-750hpa",
                    yc: 10,
                    file: "teplota_75000_pa",
                    B: "750hpa",
                    label: "750hpa"
                }, {
                    id: "temperature-700hpa",
                    yc: 11,
                    file: "teplota_70000_pa",
                    B: "700hpa",
                    label: "700hpa",
                    Sf: !0
                }, {
                    id: "temperature-650hpa",
                    yc: 12,
                    file: "teplota_65000_pa",
                    B: "650hpa",
                    label: "650hpa"
                }, {id: "temperature-600hpa", yc: 13, file: "teplota_60000_pa", B: "600hpa", label: "600hpa"}, {
                    id: "temperature-500hpa",
                    yc: 14, file: "teplota_50000_pa", B: "500hpa", label: "500hpa", Sf: !0
                }, {
                    id: "temperature-300hpa",
                    yc: 15,
                    file: "teplota_30000_pa",
                    B: "300hpa",
                    label: "300hpa",
                    Sf: !0
                }, {
                    id: "temperature-200hpa",
                    yc: 16,
                    file: "teplota_20000_pa",
                    B: "200hpa",
                    label: "200hpa"
                }, {id: "temperature-10hpa", yc: 17, file: "teplota_1000_pa", B: "10hpa", label: "10hpa"}, {
                    id: "freezing",
                    yc: 18,
                    file: "nulova_izoterma",
                    description: "freezing"
                }]
        }, {id: "feel", file: "teplota_pocit", description: "feel"}, {
            id: "rain", kind: "accumulation", f: [{
                id: "rain-1h", file: "srazky_1h", Xg: {
                    typed: ["srazky_1h",
                        "srazky_type_1h"]
                }
            }, {id: "rain-3h", file: "srazky_3h", Xg: {typed: ["srazky_3h", "srazky_type_3h"]}, Hg: !0}, {
                id: "rain-ac",
                file: "srazky_ac",
                ki: !0
            }, {
                id: "precipitation-anomaly",
                file: "srazky_odchylka",
                label: "monthly-anomaly",
                description: "precipitation-anomaly"
            }]
        }, {
            id: "radar",
            file: "srazky_dbz",
            Xg: {typed: ["srazky_dbz", "srazky_type_dbz"]},
            Bg: !0,
            Rg: 1440
        }, {id: "satellite", file: "rgba", $g: !0, Bg: !0, Rg: 240}, {
            id: "clouds",
            kind: "clouds",
            f: [{id: "clouds-total", file: "oblacnost", Hg: !0}, {id: "clouds-fog", file: "srazky_type_1h"},
                {id: "clouds-low", file: "oblacnost_low"}, {
                    id: "clouds-middle",
                    file: "oblacnost_middle"
                }, {id: "clouds-high", file: "oblacnost_high"}]
        }, {
            id: "wind",
            kind: "altitude",
            f: [{
                id: "wind-10m",
                yc: 2,
                file: ["vitr_u_10_m", "vitr_v_10_m"],
                label: "10m",
                Sf: !0,
                Hg: !0
            }, {id: "wind-100m", yc: 3, file: ["vitr_u_100_m", "vitr_v_100_m"], B: "100m", label: "100m"}, {
                id: "wind-250m",
                yc: 4,
                file: ["vitr_u_250_m", "vitr_v_250_m"],
                B: "250m",
                label: "250m"
            }, {id: "wind-950hpa", yc: 5, file: ["vitr_u_95000_pa", "vitr_v_95000_pa"], B: "950hpa", label: "950hpa"}, {
                id: "wind-925hpa",
                yc: 6, file: ["vitr_u_92500_pa", "vitr_v_92500_pa"], B: "925hpa", label: "925hpa"
            }, {
                id: "wind-900hpa",
                yc: 7,
                file: ["vitr_u_90000_pa", "vitr_v_90000_pa"],
                B: "900hpa",
                label: "900hpa"
            }, {
                id: "wind-850hpa",
                yc: 8,
                file: ["vitr_u_85000_pa", "vitr_v_85000_pa"],
                B: "850hpa",
                label: "850hpa",
                Sf: !0
            }, {
                id: "wind-800hpa",
                yc: 9,
                file: ["vitr_u_80000_pa", "vitr_v_80000_pa"],
                B: "800hpa",
                label: "800hpa"
            }, {id: "wind-750hpa", yc: 10, file: ["vitr_u_75000_pa", "vitr_v_75000_pa"], B: "750hpa", label: "750hpa"}, {
                id: "wind-700hpa", yc: 11, file: ["vitr_u_70000_pa",
                    "vitr_v_70000_pa"], B: "700hpa", label: "700hpa", Sf: !0
            }, {
                id: "wind-650hpa",
                yc: 12,
                file: ["vitr_u_65000_pa", "vitr_v_65000_pa"],
                B: "650hpa",
                label: "650hpa"
            }, {
                id: "wind-600hpa",
                yc: 13,
                file: ["vitr_u_60000_pa", "vitr_v_60000_pa"],
                B: "600hpa",
                label: "600hpa"
            }, {
                id: "wind-500hpa",
                yc: 14,
                file: ["vitr_u_50000_pa", "vitr_v_50000_pa"],
                B: "500hpa",
                label: "500hpa",
                Sf: !0
            }, {
                id: "wind-300hpa",
                yc: 15,
                file: ["vitr_u_30000_pa", "vitr_v_30000_pa"],
                B: "300hpa",
                label: "300hpa",
                Sf: !0
            }, {
                id: "wind-200hpa", yc: 16, file: ["vitr_u_20000_pa", "vitr_v_20000_pa"],
                B: "200hpa", label: "200hpa"
            }, {id: "wind-10hpa", yc: 17, file: ["vitr_u_1000_pa", "vitr_v_1000_pa"], B: "10hpa", label: "10hpa"}]
        }, {
            id: "gust",
            kind: "maximum",
            f: [{id: "gust", file: "vitr_naraz"}, {id: "gust-ac", file: "vitr_naraz_ac", ki: !0}]
        }, {id: "pressure", file: "tlak"}, {
            id: "storm",
            kind: "storm",
            f: [{id: "cape", file: "cape", description: "cape"}, {
                id: "cape-shear",
                file: "cape_shear",
                description: "cape-shear"
            }, {id: "shear", file: "shear", description: "shear"}, {id: "cin", file: "cin", description: "cin"}, {
                id: "li",
                file: "li",
                description: "li"
            },
                {id: "helicity", file: "helicity", description: "helicity"}]
        }, {
            id: "humidity",
            kind: "humidity",
            f: [{id: "humidity", yc: 1, file: "vlhkost", label: "2m", Hg: !0}, {
                id: "humidity-900hpa",
                yc: 7,
                file: "vlhkost_90000_pa",
                B: "900hpa",
                label: "900hpa"
            }, {
                id: "humidity-850hpa",
                yc: 8,
                file: "vlhkost_85000_pa",
                B: "850hpa",
                label: "850hpa"
            }, {id: "humidity-700hpa", yc: 11, file: "vlhkost_70000_pa", B: "700hpa", label: "700hpa"}, {
                id: "dew",
                file: "dew_point",
                description: "dew"
            }]
        }, {
            id: "wave", kind: "wave", f: [{id: "wave", file: "swh", B: "wave-total"}, {
                id: "wind-wave",
                file: "shww", B: "wave-wind"
            }, {id: "wind-wave-period", file: "mpww", B: "wave-wind"}, {
                id: "swell",
                file: "shts",
                B: "wave-swell"
            }, {id: "swell-period", file: "mpts", B: "wave-swell"}, {
                id: "currents",
                file: ["proud_u", "proud_v"],
                B: "currents",
                description: "currents"
            }]
        }, {id: "snow", kind: "snow", f: [{id: "snow", file: "snih"}, {id: "new-snow-ac", file: "novy_snih_ac", ki: !0}]}, {
            id: "air",
            kind: "air",
            f: [{id: "pm25", file: "pm25", description: "pm25"}, {
                id: "pm10",
                file: "pm10",
                description: "pm10"
            }, {id: "no2", file: "no2", description: "no2"}, {
                id: "so2",
                file: "so2", description: "so2"
            }, {id: "o3", file: "o3", description: "o3"}, {id: "dust", file: "dust", description: "dust"}, {
                id: "co",
                file: "co",
                description: "co"
            }, {id: "aqi", file: "aqi", description: "aqi"}]
        }], Fa = {
            "10m": {kind: "wind", Ne: 2, Re: "vitr_u_10_m", Se: "vitr_v_10_m"},
            "100m": {kind: "wind", Ne: 2, Re: "vitr_u_100_m", Se: "vitr_v_100_m"},
            "250m": {kind: "wind", Ne: 2, Re: "vitr_u_250_m", Se: "vitr_v_250_m"},
            "950hpa": {kind: "wind", Ne: 5, Re: "vitr_u_95000_pa", Se: "vitr_v_95000_pa"},
            "925hpa": {kind: "wind", Ne: 5, Re: "vitr_u_92500_pa", Se: "vitr_v_92500_pa"},
            "900hpa": {kind: "wind", Ne: 5, Re: "vitr_u_90000_pa", Se: "vitr_v_90000_pa"},
            "850hpa": {kind: "wind", Ne: 5, Re: "vitr_u_85000_pa", Se: "vitr_v_85000_pa"},
            "800hpa": {kind: "wind", Ne: 5, Re: "vitr_u_80000_pa", Se: "vitr_v_80000_pa"},
            "750hpa": {kind: "wind", Ne: 5, Re: "vitr_u_75000_pa", Se: "vitr_v_75000_pa"},
            "700hpa": {kind: "wind", Ne: 5, Re: "vitr_u_70000_pa", Se: "vitr_v_70000_pa"},
            "650hpa": {kind: "wind", Ne: 5, Re: "vitr_u_65000_pa", Se: "vitr_v_65000_pa"},
            "600hpa": {kind: "wind", Ne: 5, Re: "vitr_u_60000_pa", Se: "vitr_v_60000_pa"},
            "500hpa": {
                kind: "wind",
                Ne: 5, Re: "vitr_u_50000_pa", Se: "vitr_v_50000_pa"
            },
            "300hpa": {kind: "wind", Ne: 5, Re: "vitr_u_30000_pa", Se: "vitr_v_30000_pa"},
            "200hpa": {kind: "wind", Ne: 5, Re: "vitr_u_20000_pa", Se: "vitr_v_20000_pa"},
            "10hpa": {kind: "wind", Ne: 5, Re: "vitr_u_1000_pa", Se: "vitr_v_1000_pa"},
            currents: {kind: "currents", Ne: 1, Re: "proud_u", Se: "proud_v"},
            "wave-total": {
                kind: "wave",
                dh: za,
                Wg: "_water",
                Uh: [],
                height: "shww",
                direction: "mdww",
                threshold: 1,
                g: {height: "shts", direction: "mdts", Uh: [1, 2], threshold: 2, Dk: !0}
            },
            "wave-wind": {
                kind: "wave", dh: za, Wg: "_water",
                Uh: [], height: "shww", direction: "mdww", threshold: 1
            },
            "wave-swell": {
                kind: "wave",
                dh: za,
                Wg: "_water",
                Uh: [1, 2],
                height: "shts",
                direction: "mdts",
                threshold: 2,
                Dk: !0
            }
        }, ma = {
            length: {
                mm: {
                    Oa: 1,
                    precision: .1,
                    A: [0, 100, 200, 500, 1E3, 2E3, 4E3, 6E3, 8E3, 1E4, 15E3, 2E4, 3E4, 4E4, 5E4]
                },
                inch: {
                    Oa: .0393700787,
                    precision: .01,
                    A: [0, 254, 508, 1016, 1524, 2032, 3048, 4064, 5080, 10160, 15240, 20320, 25400, 38100, 50800]
                }
            },
            blanket: {
                cm: {Oa: 1, precision: 1, A: [0, 1E3, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4, 6E4, 8E4, 1E5, 15E4, 2E5]},
                inch: {
                    Oa: .393700787, precision: .1, A: [0,
                        1016, 2540, 10160, 15240, 20320, 25400, 30480, 35560, 40640, 50800, 76200, 101600, 152400, 203200]
                }
            },
            distance: {km: {Oa: 1, precision: 1}, mi: {Oa: .62137, precision: 1}},
            height: {
                m: {Oa: 1, precision: .1, A: [0, 500, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3, 8E3, 1E4, 12E3, 14E3]},
                ft: {
                    Oa: 3.2808399,
                    precision: .1,
                    A: [0, 457, 609, 1219, 1828, 2438, 3048, 3962, 4876, 6096, 7924, 9753, 12192, 14630]
                }
            },
            time: {sec: {Oa: 1, precision: 1, A: [0, 2E3, 4E3, 6E3, 8E3, 1E4, 12E3, 14E3, 18E3, 2E4, 22E3]}},
            reflectivity: {
                dbz: {
                    Oa: 1, precision: 5, A: [0, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 35E3, 4E4, 45E3,
                        5E4, 55E3, 6E4]
                }
            },
            temperature: {
                "\u00b0C": {
                    Oa: 1,
                    precision: 1,
                    A: [-4E4, -3E4, -2E4, -15E3, -1E4, -5E3, 0, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4]
                }, "\u00b0F": {
                    Ni: function (a) {
                        return 9 * a / 5 + 32
                    },
                    precision: 1,
                    A: [-4E4, -28889, -23333, -17778, -12222, -6667, -1111, 4444, 1E4, 15556, 21111, 26667, 32222, 37778, 48889]
                }
            },
            "temperature-anomaly": {
                "\u00b0C": {
                    Oa: 1,
                    precision: 1,
                    A: [-2E4, -15E3, -1E4, -5E3, -2E3, 0, 2E3, 5E3, 1E4, 15E3, 2E4]
                }, "\u00b0F": {
                    Ni: function (a) {
                        return 9 * a / 5
                    }, precision: 1, A: [-2E4, -15E3, -1E4, -5E3, -2E3, 0, 2E3, 5E3, 1E4, 15E3, 2E4]
                }
            },
            "precipitation-anomaly": {
                mm: {
                    Oa: 1,
                    precision: 2, A: [-2E5, -1E5, -6E4, -4E4, -2E4, -1E4, 0, 1E4, 2E4, 4E4, 6E4, 1E5, 2E5]
                },
                inch: {
                    Oa: .0393700787,
                    precision: .2,
                    A: [-203200, -101600, -50800, -38100, -25400, -12700, 0, 12700, 25400, 38100, 50800, 101600, 203200]
                }
            },
            speed: {
                "km/h": {Oa: 1, precision: 1},
                "m/s": {
                    Oa: 1 / 3.6,
                    precision: 1,
                    A: [0, 7200, 14400, 21600, 28800, 36E3, 43200, 50400, 64800, 79200, 93600, 108E3, 122400, 136800, 151200]
                },
                mph: {
                    Oa: .62137119223,
                    precision: 1,
                    A: [0, 8047, 16093, 24140, 32187, 40234, 48280, 56327, 64374, 72420, 80467, 96561, 112654, 128748, 144841]
                },
                kt: {
                    Oa: .539956803, precision: 1,
                    A: [0, 9260, 18520, 27780, 37040, 46300, 55560, 64820, 74080, 83340, 92600, 101860, 111120, 129640, 148160]
                },
                bft: {
                    Ni: function (a) {
                        return k.round(k.min(k.pow(a / 3.0096, 2 / 3), 12))
                    }, precision: 0, A: [1E3, 5E3, 11E3, 19E3, 28E3, 38E3, 49E3, 61E3, 74E3, 88E3, 102E3, 117E3, 118E3]
                }
            },
            "speed-shear": {
                "m/s": {
                    Oa: 1,
                    precision: 1,
                    A: [5E3, 8E3, 11E3, 14E3, 17E3, 2E4, 23E3, 26E3, 29E3, 32E3, 35E3, 4E4, 5E4]
                }
            },
            currents: {
                "m/s": {Oa: 1, precision: .01},
                mph: {Oa: 2.23693629, precision: .1},
                kt: {Oa: 1.94384449, precision: .1},
                "km/h": {Oa: 3.6, precision: .1}
            },
            energy: {
                "J/kg": {
                    Oa: 1,
                    precision: 100, A: [0, 2E5, 4E5, 6E5, 8E5, 1E6, 12E5, 14E5, 16E5, 18E5, 2E6, 25E5, 3E6, 4E6, 5E6]
                }
            },
            "energy-inverse": {
                "J/kg": {
                    Oa: 1,
                    precision: 10,
                    A: [0, -2E4, -4E4, -6E4, -8E4, -1E5, -12E4, -14E4, -16E4, -18E4, -2E5, -25E4, -3E5, -4E5, -5E5]
                }
            },
            "energy-derived": {
                "m\u00b2/s\u00b2": {
                    Oa: 1,
                    precision: 10,
                    A: [0, 2E4, 4E4, 6E4, 8E4, 1E5, 12E4, 14E4, 16E4, 18E4, 2E5, 25E4, 3E5, 4E5, 5E5]
                }
            },
            "energy-shear": {
                "m\u00b2/s\u00b2": {
                    Oa: 1,
                    precision: 10,
                    A: [0, 1E5, 2E5, 3E5, 5E5, 7E5, 9E5, 11E5, 13E5, 15E5, 2E6, 25E5, 3E6]
                }
            },
            "temperature-index": {
                "\u00b0C": {
                    Oa: 1, precision: 1, A: [-9E3,
                        -8E3, -7E3, -6E3, -5E3, -4E3, -3E3, -2E3, -1E3, 0, 1E3, 2E3, 4E3, 8E3, 12E3]
                }
            },
            percents: {"%": {Oa: 1, precision: 10, A: [0, 1E4, 2E4, 3E4, 4E4, 5E4, 6E4, 7E4, 8E4, 9E4, 1E5]}},
            pressure: {
                hPa: {Oa: 1, precision: 1},
                inHg: {Oa: .0295299830714, precision: .1},
                mmHg: {Oa: .750061561303, precision: 1}
            },
            "air-micrograms": {
                "\u00b5g/m\u00b3": {
                    Oa: 1,
                    precision: 1,
                    A: [0, 5E3, 1E4, 2E4, 4E4, 6E4, 8E4, 1E5, 15E4, 2E5]
                }
            },
            "air-parts": {ppbv: {Oa: 1, precision: 10, A: [0, 1E5, 2E5, 4E5, 6E5, 8E5, 1E6, 15E5, 2E6, 25E5]}},
            "air-index": {AQI: {Oa: 1, precision: 5, A: [0, 5E4, 1E5, 15E4, 2E5, 3E5, 4E5]}}
        },
        pb = {
            metric: {
                length: "mm",
                distance: "km",
                blanket: "cm",
                height: "m",
                temperature: "\u00b0C",
                speed: "km/h",
                pressure: "hPa"
            },
            imperial: {
                length: "inch",
                distance: "mi",
                blanket: "inch",
                height: "ft",
                temperature: "\u00b0F",
                speed: "mph",
                pressure: "inHg"
            }
        }, qb = sa ? "12px" : "13px", p = {
            temperature: {
                min: -36E3,
                max: 5E4,
                step: 500,
                scale: "wq044uwq5p0ywqcohjwqi9dnwqnu9rwqnta7wqnsanwqnrb3wqnqbjwqnpbzwqnocfwqnncvwqnmdbwqni7zwqne2nwqn9q7wqn5kvwqn1fjwqmxa7wqmsxrwqmosfwq78j8wprsa1wpaxgdwovh76woln7vwoaeo3wo0koswnpc50wncpezwn1hgjwmouqiwmc80hwm2e16wlsk1vwlhbazwl7hbowkcl0wwjgacswile20whp36swhw50nwi371mwia8vhwihapcwitzljwj6oovwjjdl2wjw2h9wjxhg6wjywf3wjywmgwk0bldwjyxf7wjxjg5wjuqpiwjtcjcwjp5tnwjkywuwjfdmpwjb6pwwj8f5xwj491iwj1haewixb5zwj05hewj2zsuwj4fjtwj79v8wjbir1wjfrfqwjilr3wjmufswjo9l7wjpoqlwjppbkwjr4gywjobx6wjljdewjhc96wjejpewjsll2wk6ngpwkjaktwkxcggwlbeq6wlqvd7wm4xmxwmizpiwmx1s4wncimawnqkovwo4mrhwofvp8woppvewp0yt5wpaszbwpgeuvwpm0jawpq7uewpvtitwpvsqdwpvrqtwpvqydwpvpytwpvozawpvnzrwpu88owpu795wpu69mwpu5a4wpu43hwpu33ywpu24fwpu14xwpslduwpskebwpsjeswpsifawpshfrwpsgg8wpplxpwpmrf7wpjwpkwph271wpe7oiwpbd60wp8inhwp5o4ywovtdbwoncz0wodi7dwo3n8mwny0yrwntt28wno6sdwnikbewnebmhwna34own5ufrwn1lquxgurf8y0obpuyuhhe8zeb1ouzdzt55zdoklfzdbxa6zd0oqgzcxvlgzcv2ggzcs94bzcqujrzco1erzcl89rzciexmzcflsmzccsnszc9zbvzc7671zc5rfkzc2yaqzc04yszbxbtzzbuii1zbnh9gzbgg0vzb9esazb2djpzatxqozamwi3zafv9iza8u0x",
                opacity: .65
            },
            "temperature-anomaly": {
                min: -2E4,
                max: 2E4,
                step: 500,
                scale: "ziimm7zi36d0zhnq3tzh6va5zgrf0yzghl1nzg6chvzfwiikzfl9yszf8n8rzexfabzekskaze85u9zdybuyzdohvnzdd94rzd3f5gzc8iuozbc86kzahbvsz9l10kz9s2ufz9z4veza66p9zad8j4zapxfbzb2minzbfbeuzbs0b1zbuu8vzbw9f5w9xy2dthxtbsqftwhqnno6h0kllpl2htitvrddweyj8y8l9s4im6ck02ycns4kc1og91pqp5dj20y9i0fpyxksbltonu72v2qm2ypttnx16rwfsx1izhoea0zhip8zzhd00tzha5iazh7azszh4gh9zh1lyqzgrr73zgjasszg9g15zfzl2ezftysjzfpqw0zfk4m5zfei56zfa9g9zf60ygzf1s9jzexjkmzerx3ozemamqzego5szeb1ouzdzt55zdoklfzdbxa6zd0oqgzcv2ggzcqujrzcl89rzcflsm",
                opacity: .6
            },
            "precipitation-anomaly": {
                min: -2E5,
                max: 2E5,
                step: 2E3,
                scale: "zexjkmzexjrqzeyyjazeyyjazf0davzf0dhzzf1s9jzf1s9jzf3713zf3787zf4lzszf4lzszf60rczf60ygzf7fq0zf7fq0zf8uhlzf8uopzfa9g9zfa9g9zfbo7tzfboexzfd36izfd36izfehy2zfei56zffwpmzffwpnzfhba3zfhba4zfipukzfk4f1zfk4m5zflj6mzflj6mzfmxr3zfocbjzfocbkzfpqw0zfpqw1zfr5ghzfsk0yzfsk0yzftylfzftysjzfvdd0zfwrxgzfwrxhzfy6hxzfy6hyzfzl2ezg0ztzzg3t5zzg57xkzg6mp4zg9g15zgaulmzgc9d6zgf2p7zgghgrzgjasszgkpkdzgm4bxzgoxnyzgqcfizgrr73zgukc0zgvz3kzgxdv5zh0775zh1lyqzh314gzh4ga6zh4goczh5vu2zh7azszh8q5hzha5b7zha5pdzhbkv3zhd00tzhfuc9zhha39zhk47kzhljykzhoea0ydq1jbx9rosmvvtqo5urvdxgtnx16rr60qbloy5flrmg94qlk8cfgbi0fpyxdammgp8ktiyh4xpumk2dd08i02ycns2al67f4s7kxq8dwmvbd3pqdjhtitvrk1l4uem9nflxorqqwyqzuhfhthxtbsulxl13vpxcqdx3wq0ky7whpuzbw9f5zbuunezbuu8zzbtfh7zbtf2szbs0b1zbmd8qzbi4xzzbchvozb89dtzb2minzawzgczasqyhzan3w6zaivlfzad8j4zabtrjzaaezzza908eza7lguza66p9za4rxoza3d64za1yejza0jmzz9z4vez9xpwpz9wb55z9uwdkz9thm0z9s2ufz9qo2uz9p9baz9nujpz9mfs5z9l10kz9mfl0z9nu5gz9p8pwz9qnacz9s1usz9tgf8z9uuznz9w9k3z9xo4jz9z2ozza0h9fza1vtvza1w0zza3alfza4p5vza63qbza7iarza8wv7zaabfmzabq02zad4kizaej4yzafxpezahc9uzaiquazaljz6zamyjmzaproizar68yzatzduzavdyazay736zazlnmzb2esizb57xezb6mhuzb9fmqzbau76zbdnc2zbf1wizbhv1ezbko6azbm2qqzbovvmzbqag2zbt3kyzbui5ezbxbaazbypuqzc1izm",
                opacity: .6
            },
            cape: {
                min: 0,
                max: 5E6,
                step: 1E5,
                scale: "037kp9f2lnd9kci6r5pc3wl4ubefnoub0k3rubait0ubq3dkubudequbhsn6ud0le8uem8naug7vp9uhe1x3uhz2gluhyywluhxg6xuhxc1quhvtc3uhvpe0uhkb4tuh8x2qug6w6euflt96uf4uomwwep8uxg4216xzutdxy9kkldytbby4zd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzcbdwazc75zyzc2yapzbyqedzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            "cape-shear": {
                min: 0,
                max: 3E6,
                step: 5E4,
                scale: "037kp9a2syh9kcdxn1kccko3kcb7p4pbola8ub0k3rubix0puc1a4suci8haud0le8udennyudu4azue86kpuem8naufbjnmug0unzugoqwruhe1x3uhjnsnuhp9h2uhtgs6uhz2gluhyzhzuhywjeuhxf0cuhxc1quhufk6uhriviuhn7thuhkb4tuhg2fyuhafdruh66owuh0jmpugwaxuugqnoiugmf6ruggrxgugcjfpug6w6euq0uw4uzteu9v9ndjzv9hqosvjbpeivt49cow2y82dwcs6kzwmkqq8wwep8ux608jqxfkd33xp5wdzxyq14fxybz1ky7xi5cyhhmvsyr366oz0naq1za8u0x",
                opacity: .7
            },
            shear: {
                min: 5E3,
                max: 5E4,
                step: 1E3,
                scale: "037kp9f2lnd9hukf4vkci6r5mubr1xpc3wl4rtp7smubait0ubkg3vubudequcfhi1ud0le8uem8nbug7vp9uh46d5uhz2gluhyypjuhxg6xuhxe7wuhxc1quhxa2puhvtc3uhq2c0uhkb4tugwaxuug6w6eufx200uflt96ufdc2guf4uomuetlqqueicsuue1hs0udkmyaud3rxgucmwwmv6hh5mwabmsexe5sm9y80cv9zbuii1zbj9cxzb807tzavcb5zak361za8u0x",
                opacity: .7
            },
            cin: {
                min: -5E5,
                max: 0,
                step: 1E4,
                scale: "za8u0xzaegp1zak361zappu5zavcb5zb2djpzb807tzbdmotzbj9cxzbovtxzbuii1zbyqedzc2yapzc75zyzcbdwazcflsmzcjti5zco1eszcs94azcwh0xzd0oqgytbby4y9kkldxzutdxxg4216wwep8uuf4uomuflt96ug6w6euh8x2quhkb4tuhvpe0uhvtc3uhxc1quhxg6xuhyywluhz2gluhe1x3ug7vp9uem8naud0le8ubhsn6ubudequbq3dkubait0ub0k3rubefnopc3wl4kci6r5f2lnd9037kp9",
                opacity: .7
            },
            li: {
                min: -9E3,
                max: 12E3,
                step: 1E3,
                scale: "za8u0xzbuii1zcflm9zd0oqgzexjkmzfzl2ezhd00tzhoi83zhq52xzhrrclzg0kl9zctaa8zbn2aqzbis9kzb37p0zat8zrzb74jozbpad4zbw9f5zbs0b1zad8j4z9l10k",
                opacity: .6
            },
            helicity: {
                min: 0,
                max: 5E5,
                step: 1E4,
                scale: "037kp9f2lnd9kci6r5pc3wl4ubefnoub0k3rubait0ubq3dkubudequbhsn6ud0le8uem8naug7vp9uhe1x3uhz2gluhyywluhxg6xuhxc1quhvtc3uhvpe0uhkb4tuh8x2qug6w6euflt96uf4uomwwep8uxg4216xzutdxy9kkldytbby4zd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzcbdwazc75zyzc2yapzbyqedzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            wind: {
                min: 0,
                max: 14E4,
                step: 500,
                scale: "f2lnd9fmkuc1g6lfo4gqkmmwhajtlnhukf4vi4k0irioj7hij8iegajsizsdkci6r5l6gz3mmady9en4cqlvo89propc83hxq65h2tra3ut2se0tyvt7zmbbubwlh4ubv7axubsekaubr070ubpm0tubo7umublf3zubk0xsubimkiubfttvubefnoubd1okubbnphuba9qdub8vr9ub7hzaub6406ub4q12ub3c1yub1y2vub0k3rub1z2dub1znnub3em9ub4trzub68qmub694sub7oaiub9394ub93ueubait0ubbxrlubdcq6ubervwubg6uhubj0diubkfc3ubluaoubn9geubooezubq3dkubq3kjubribxubriq0ubriwyubsxodubsxvcubsy2aubsygdubud7rubudequbsz1bubrknwubq6hkubos45ubosb6ubndxrublzkcubkle0ubj70lubhsn6ubnewzubt1dxubynnquc49xkuc9wehuce43uucjqdoucpcnhucuz4fud0le8ud67v3udbubyudhgstudn39oudu4azudzqruue5d8pueazpkuegm6fuem8nauerv45uexhl0uf341vuf8qiquffrk2ufldttufr0aoufwmrjug298eug7vp9ugc3louggbb0ugkj7fugoqwrugsyt6ugx6pluh1eexuh5mbcuh9u0ouhe1x3uhguuvuhi987uhl25yuhmgjauhp9h2uhqnueuhtgs6uhuv5huhxo39uhz2gluhz22duhz1o5uhz1h1uhz12tuhz0oluhz0aduhyzw5uhyzp1uhyzatuhyywluhyyiduhyy46uhyxpyuhyxbruhywxjuhxhrruhxhdkuhxgzcuhxgl5uhxg6xuhxfsquhxfeiuhxf0buhxem3uhxe7wuhxdmkuhxd8duhxcu5uhxcfyuhxc1quhxbnjuhxb9buhxav4uhxagwuhxa2puhvuwxuhvuiquhvu4iuhvtqbuhvtc3uhvsxwuhvsjouhvs5huhvrr9uhvrd2uhvqyuuhvqknuhvq6fuhvps8uhvpe0uhua8auhsv2kuhsuhauhrfbkuhq0czuhol79uhn61juhn5g9uhlqajuhkb4tuhivz3uhhgtduhhgf7uhg19huhem3suhd6y2uhbrscuhbre6uhac8guh8x2quh4oz5uh1vg0ugxnjiugtffxugqlwsugmdt7ugi5pmugdxt4ugb49zug6w6eug5hlxug2oh0ug19peufygkhufx200ufu8v3ufsuamufq0ykufome3uflt96upjzoauzi63dv9exy1v9dizcvjbplkvt9w0ow382frwd4uafwn30piwx174mwwydzpwwwz84wwu638wwsrbnwwpy6qwwn51twwlqa8wwix5cwwhidrwwep8uwwahjgww4v9mww0nk7wvwfutwvs85fwvmlohwvidz3wve69owv8jzuwv4cagwv2xpxwv04kxwuyptawuvwoawuui3rwuroyswuqae8wunh25wum2hlwuj9cmx4hg60xee87uxocf18xy9732xy7sioy84krlyi2rdvyrzjmtz1xq93zbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            currents: {
                min: 0,
                max: 3E3,
                step: 10,
                scale: "ggjma5haiemnhuhlldiogdqrjif63akcdyfsl6bc7um0a4kcmu8wpqno7p28oi6herpc59r9q6423rr02u95ru1mlnso0ey5thxsq7u1wzoyuvvrucvpuk6uwjtcjcwjryd5wjp5miwjnr98wjmd31wjkywuwji667wjgs00wjfdmqwjckw3wjb6pwwj9sqswj8erpwj70slwj5mthwj491iwj2v2ewj1h3awj0346wiyp53wixb5zwiyq4lwiyqpvwj05ohwj1ku7wj2zsuwj3070wj4fcqwj5ubcwj5uwmwj79v8wj8ottwja3sewjbiy4wjcxwpwjfrfqwjh6ebwjilcwwjk0imwjlfh7wjmufswjmumrwjo9e5wjo9s8wjo9z6wjpoqlwjpoxkwjpp4iwjppilwjr49zwjr4gywjpq3jwjobq4wjmxjswjlj6dwjljdewjk4zzwjiqmkwjhcg8wjfy2twjejpewjk5z7wjpsg5wjvepywk10zswk6ngpwkav62wkghfwwkm3ppwkrq6nwkxcggwl2yxbwl8le6wle7v1wljubwwlqvd7wlwhu2wm24axwm7qrswmdd8nwmizpiwmom6dwmu8n8wmzv43wn5hkywncimawni4w1wnnrcwwntdtrwnz0amwo4mrhwo8unwwod2d8woha9nwolhyzwoppvewotxrtwoy5h5wp2ddkwp6l2wwpaszbwpdlx3wpf0afwpht86wpj7liwpm0jawpnewmwpq7uewprm7pwpuf5hwpvtitwpvt4lwpvsqdwpvsj9wpvs51wpvrqtwpvrclwpvqydwpvqr9wpvqd1wpvpytwpvpklwpvp6ewpvos6wpvodzwpvnzrwpu8tzwpu8fswpu81kwpu7ndwpu795wpu6uywpu6gqwpu62jwpu5obwpu5a4wpu4oswpu4alwpu3wdwpu3i6wpu33ywpu2prwpu2bjwpu1xcwpu1j4wpu14xwpslz5wpslkywpsl6qwpsksjwpskebwpsk04wpsjlwwpsj7pwpsithwpsifawpsi12wpshmvwpsh8nwpsgugwpsgg8wpr1aiwppm4swppljiwpo6dswpmrf7wplc9hwpjx3rwpjwihwpihcrwph271wpfn1bwpe7vlwpe7hfwpcsbpwpbd60wp9y0awp8iukwp8igewp73aowp5o4ywp1g1dwoymi8wouelqwoq6i5woncz0woj4vfwoewruwoaovcwo7vc7wo3n8mwo28o5wnzfj8wny0rmwnv7mpwntt28wnqzxbwnplcuwnms0swnldgbwnikbewxgqxmwxgqqix7excpx7ex5lxhd3rtxhbp09xrba6xxr9vfcy19gm0y1821kyb68nsyb68goyl4f2vyl4evryv2lhzyv16qfz50rx3z4zd5izeyyc6zexjkmzew506zeuqfpzeuq8lzetbo4zerx3ozeqij8zep3yrzep3rnzenp76zemamqzekw2azejhhtzejhapzei2q8zego5szef9lczedv0vzedutrzecg9azeb1ouze88jxze6tzgze40ujze17pmzdzt55zdx007zdu6vazdssatzdpz5wzdoklfzdlr9ezdiy4hzdhjk0zdeqf3zdbxa6zdaipozd7pkrzd4wfuzd3hvdzd0oqgzcza5yzcza5xzcxvlfzcwh0xzcv2ggzcv29azctnoszcs94azcqujtzcqujrzcpfz9zco1eszcmmuazcmmu8zcl89rzcjti5zciexnzciexlzch0d4zcflsm",
                opacity: .65
            },
            "rain-1h": {
                min: 0,
                max: 5E4,
                step: 100,
                scale: "037kp9deo32lhulub5km9eifnnwk3iqfk4asr9hk1tsdfzr2t7dfi2u1c9tjuv9pkkuvb4q4uvdyn8uvfdsruvi7pvuvjmvfuvl20zuvnvy3uvpb3muvs50quvtk6auvs5svuvqrfguvpd94uvnyvpuvnz2quvmkpbuvl6bwuvjs5kuvids5uvgzequvs85euw3h37uweptvuwpykkux17icuxcg90uxnozpuxyxqduya6o6uylfeuuyr1vpuywockuz2atfuz7xaauzeybmuzkklduzq728uzvtj3v01fzyv072gtv0bad8v0fi2kv0jpyzv0nxobv0s5kqv0wdh5v10l6hv14t2wv190s8v1d8onv1g187v1hf7bv1k7xyv1llx2v1oegmv1psfqv1skzav1tz5hv1wrp1v1y5o5v1y5h1v1y52uv1y4vqv1y4hiv1y4afv1y43bv1y3p3v1y3hzv1y33sv1y2wov1y2pkv1y2bdv1y249v1y1q1v1y1iyv1wmrev1wmd6v1wm62v1wlrvv1wlkrv1wldnv1wkzgv1wkscv1wke4v1wk71v1wjzxv1wjlpv1wjelv1wj0ev1witav1wim6v1wif2v1wif3v1wi7zv1wi0vv1whtrv1whmnv1whfkv1whfkv1wh8gv1wh1cv1wgu8v1wgn5v1wgn5v1wgg1v1wg8xv1wg1tv1wfuqv1wfnmv1wfnmv1wfgiv1wf9ev1wf2bv1wev7v1wev7v1v03nv1uzwjv1uzpgv1uzicv1uzb8v1uzb8v1uz44v1uyx1v1uypxv1uyitv1uybpv1uybpv1uy4mv1uxxiv1uxqev1uxjav1uxjav1uxc7v1ux53v1uwxzv1uwqvv1uwjrv1uwjsv1uwcov1uw5kv1uvygv1uvyhv1uvrdv1th6yv1tgzuv1tgzvv1tgsrv1tglnv1tglov1s1u4v1s1u5v1s1n1v1s1fxv1s1fyv1s18uv1qmofv1qmhbv1qmhcv1qma8v1qm34v1qm35v1p7blv1p7bmv1p74iv1p74jv1p6xfv1p6qbv1p6qcv1nrysv1nrytv1nrrpv1nrklv1nrkmv1nrdiv1mct3v1mclzv1mcm0v1mcewv1mc7sv1mc7tv1kxg9v1kxgav1kx96v1kx22v1kx23v1kwuzv1jiakv1ji3gv1ji3hv1jhwdv1jhp9v1jhpav1jhi6v1i2xrv1i2qnv1i2qov1i2jkv1i2jkv1i2chv1gnkxv1gnkyv1gnduv1gnduv1gn6rv1gn6rv1f8f8v1f884v1f885v1f811v1f811v1f7tyv1dt9iv1dt2fv1dt2fv1dsvcv1dso8v1dso8v1dsh5v1cdwpv1cdpmv1cdpmv1cdiiv1cdijv1cdbfv1ayjwv1ayjwv1ayctv1ayctv1ay5pv1ay5qv19je6v19j73v19j73v19izzv19j00v19iswv1848hv1841dv1841ev183uav16p9uv16p2qv15ai9v15ai9v13vqpv13vqpv12gz4v12gz4v112eov1127kv0znn3v0znn3v0y8vjv0wub3v0wub2v0vfjiv0vfjiv0u0z2v0u0rxv0sm7hv0sm0dv0r7fxv0r7fwv0psocv0psocv0oe3wv0mzccv0mzcbv0lkrvv0lkkrv0k60bv0k5t6v0ir8qv0ir8qv0hch6v0hch5v0fxwpv0ej55v0ej55v0d4kov0d4dkv0bpt4v0bpt4v0ab1jv0ab1jv08w9zv08w9zv07hpiv07hiev062xyv062xyv04odiv04odhv04odhv04odhv039t1v039t0v039t0v01v8kv01v8kv01v8jv00go3v00ggzv00ggzv00ggyuzz1wiuzz1wiuzz1wiuzxnc1uzxnc1uzxnc1uzw8rluzw8rkuzw8rkuzw8rkuzuu74uzuu74uzuu73uztfmnuztfmnuztfmnuzs126uzs126uzs126uzs126uzqmhpuzqmhpuzqmaluzp7q5uzp7q4uzp7q4uznt5ouznt5ouznt5nuznt5nuzmel7uzmel7uzmel6uzl00quzl00quzjlgav9j6myv9hs2hv9hrvdvjfyopvjfyhlvjejx4vte53svtcqjcvtbbrsw3ax5jw39idzw39idzwd7p7bwd7p06wd6afqwn4h1ywn4h1ywn32adwn32adwx18wlwx18wlwwzu50x6zfisx6y0ycx6wm6sxgw7kkxgusszxgusszxqszf7xqszf7xqrknmy0r61ey0pr9uy0ocpeyanxw1yamjblyamjblykkpxtykkpxsykjb68ykhwlsyuhhsgyug37zyug30vz4e9u7z4e9n3z4cv2mzecg9azeb1ouze9n4eze9n4dze88jxze6tzgze6tzgze5fezze40ujze40uize2ma2ze17pmze17plzdzt55zdyekozdyekozdx007zdvlfrzdvlfrzdu6vazdssauzdssatzdrdqdzdpz5wzdpz5wzdoklfzdoklfzdn5tvzdlr9ezdlr9ezdkcoxzdiy4hzdiy4gzdhjk0zdg4zjzdg4zjzdeqf3zddbumzddbumzdbxa5zdaippzdaipozd9458zd7pkszd7pkrzd6b0bzd4wfuzd4wfuzd3hvdzd23axzd23awzd0oqgzcza60zcza5zzcxvljzcxvljzcwgtzzcv29izcv29izctnp2zctnp1zcs94lzcquk5zcquk4zcpfskzcpfskzco184zcmmnnzcmmnnzcl837zcl836zcjtiqzcier6zcier5zch06pzch06pzcflm9zce71szce71szccshczccshbzcbdprzc9z5bzc9z5azc8kkuzc8kkuzc760ezc5rfxzc5rfxzc4codzc4coczc2y3wzc1jjgzc1jjfzc04yzzc04yzzbyqejzbxbmyzbxbmyzbvx2izbvx2hzbuii1",
                opacity: .8,
                oi: 2E3,
                fl: 7E3
            },
            "rain-ac": {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "037kp9deo32lhulub5qfk4asuv9pkkuvtk6auvqrfguvnyvpuvmkpbuvjs5kuvgzequw3h37uwpykkuxcg90uxyxqduylfeuuywockuz7xaauzkklduzvtj3v072gtv0fi2kv0nxobv0wdh5v14t2wv1d8onv1hf7bv1llx2v1psfqv1tz5hv1y5o5v1y4vqv1y43bv1y33sv1y2bdv1y1iyv1wm62v1wldnv1wke4v1wjlpv1witav1wi0vv1wh8gv1wgg1v1wfnmv1wev7v1uzb8v1uyitv1uxqev1uwxzv1uw5kv1tgzuv1s1u4v1s18uv1qm34v1p74jv1nrytv1mct3v1mc7tv1kx23v1jhwdv1i2qnv1gnkxv1gn6rv1f811v1dsvcv1cdpmv1ayjwv1ay5qv19j00v183uav13vqpv1127kv0wub2v0sm7hv0psocv0lkkrv0hch6v0d4kov0ab1jv062xyv04odhv01v8kv00ggyuzxnc1uzw8rkuztfmnuzs126uzp7q4uznt5nuzl00qvjfyopvtbbrswd7p06wn32adx6y0ycxqszf7y0ocpeykkpxsyug30vzeb1ouze9n4eze9n4dze88jxze6tzgze6tzgze5fezze40ujze40uize2ma2ze17pmze17plzdzt55zdyekozdyekozdx007zdvlfrzdvlfrzdu6vazdssauzdssatzdrdqdzdpz5wzdpz5wzdoklfzdoklfzdn5tvzdlr9ezdlr9ezdkcoxzdiy4hzdiy4gzdhjk0zdg4zjzdg4zjzdeqf3zddbumzddbumzdbxa5zdaippzdaipozd9458zd7pkszd7pkrzd6b0bzd4wfuzd4wfuzd3hvdzd23axzd23awzd0oqgzcza60zcza5zzcxvljzcxvljzcwgtzzcv29izcv29izctnp2zctnp1zcs94lzcquk5zcquk4zcpfskzcpfskzco184zcmmnnzcmmnnzcl837zcl836zcjtiqzcier6zcier5zch06pzch06pzcflm9zce71szce71szccshczccshbzcbdprzc9z5bzc9z5azc8kkuzc8kkuzc760ezc5rfxzc5rfxzc4codzc4coczc2y3wzc1jjgzc1jjfzc04yzzc04yzzbyqejzbxbmyzbxbmyzbvx2izbvx2hzbuii1",
                opacity: .8
            },
            radar: {
                min: 0,
                max: 6E4,
                step: 1E3,
                scale: "037kp93f2pal6qxtvxa2syh9deo32leinvkmfmno2ngqm1t4hulub5jsdf3qm036pno7ucovqfk4asrjh60wsnfmbgtrcnuguv9pkkuvfdlsuvjmvfuvpawnuvtk6auvqrmiuvnz2quvjryiuvgzequw93czux17icuxtbgluylfeuuyzhhguzeybmuzt0e7v072gtv0ibekv0s5kqv13eihv1d8onv1irllv1mvqzv1senwv1witav1tmbqv1qpn2v1mel1v1jhwdv16sm7v0vhpev0isf8v062xyw3oz1cx799p6yas5lgzeb1ouzdzt55zdoklfzdbxa6zd0oqgzee63uzft28szh6jm5zik0zj",
                opacity: .8,
                oi: 44E3,
                fl: 94E3
            },
            pressure: {
                min: 94E4,
                max: 1054E3,
                step: 300,
                scale: "zhw1ymzhyui8zi08hdzi3183zi5trpzi8mbbzia0agzicsu2ziflkszigzjxzijs3jzijrb3zijqinzijpq7zijoxrzijo5bzijncvzijmkfzijlrzzijkzjzijk73zijgu7zijdhbzija4fzij6rjzij3enzij01rziiwovziitbzziipz3ziimm7yydtkrye7lyuy42eb6xjw6p9wzrdntwfl61wvvgd0gvba5ejv14xqvugyq4yuguifjugqaq4ugm30pughvbaugdnlvug9fwgug5871ug10hmufwss7ufsl2sufodkhufirhpufejzeuf8xwmuf4qebuez44fueuwm4uepajcuel311uefgy9ueb98uue71jfue2tu0udym4ludvsznudrl34udnddpudj5oaudexyvudaq9gucy3ciuclg8huc8tbjubw67iubjjakub6w6iuau99luahm5jua4z8mu9sc4ku9v5npu9xz6uua0sq0ua3m95ua6fzeua99ijuac31ouaewkuuahq3zuakjn4uaq6pfuauf06ub022hub4akcub9xmnubfkhtubjszoubpg1zubtocqubzbf1ubzbm9uc0q6suc0qe0uc0ql7uc25cvuc25czuc25k6uc25reuc3kbxuc3kj5uc3kqauc26cyuc26k3uc0s6suc0sdxubzdthubze0mubxznbubxzufubwlh4ubv7axubsekaubr070ubpm0tubo7umublf3zubk0xsubimkiubfttvubefnoubd1okubbnphuba9qdub8vr9ub7hzaub6406ub4q12ub3c1yub1y2vub0k3rub1z2dub1znnub3em9ub4trzub68qmub694sub7oaiub9394ub93ueubait0ubbxrlubdcq6ubervwubg6uhubj0diubkfc3ubluaoubn9geubooezubq3dkubq3kjubribxubriq0ubriwyubsxodubsxvcubsy2aubsygdubud7rubudequbsz1bubrknwubq6hkubos45ubosb6ubndxrublzkcubkle0ubj70lubhsn6ubnewzubt1dxubynnquc49xkuc9wehuce43uucjqdoucpcnhucuz4fud0le8ud67v3udbubyudhgstudn39oudu4azudzqruue5d8pueazpkuegm6fuem8nauerv45uexhl0uf341vuf8qiquffrk2ufldttufr0aoufwmrjug298eug7vp9ugc3louggbb0ugkj7fugoqwrugsyt6ugx6pluh1eexuh5mbcuh9u0ouhe1x3uhguuvuhi987uhl25yuhmgjauhp9h2uhqnueuhtgs6uhuv5huhxo39uhz2gluhz22duhz1o5uhz1h1uhz12tuhz0oluhz0aduhyzw5uhyzp1uhyzatuhyywluhyyiduhyy46uhyxpyuhyxbruhywxjuhxhrruhxhdkuhxgzcuhxgl5uhxg6xuhxfsquhxfeiuhxf0buhxem3uhxe7wuhxdmkuhxd8duhxcu5uhxcfyuhxc1quhxbnjuhxb9buhxav4uhxagwuhxa2puhvuwxuhvuiquhvu4iuhvtqbuhvtc3uhvsxwuhvsjouhvs5huhvrr9uhvrd2uhvqyuuhvqknuhvq6fuhvps8uhvpe0uhua8auhsv2kuhsuhauhrfbkuhq0czuhol79uhn61juhn5g9uhlqajuhkb4tuhivz3uhhgtduhhgf7uhg19huhem3suhd6y2uhbrscuhbre6uhac8guh8x2quh4oz5uh1vg0ugxnjiugtffxugqlwsugmdt7ugi5pmugdxt4ugb49zug6w6eug5hlxug2oh0ug19peufygkhufx200ufu8v3ufsuamufq0ykufome3uflt96ufkeaiufizbtufg5spufequ0ufdc2gufbx3sufai53uf7olzuf69nauf4uomup1mxhuyztjov8wlskv8v70zvirz9uvsoripw2my4wwcjqdswmhwzzwwep8uwwahjgww4v9mww0nk7wvwfutwvs85fwvmlohwvidz3wve69owv8jzuwv4cagwv2xpxwv04kxwuyptawuvwoawuui3rwuroyswuqae8wunh25wum2hlwuj9cmwuhus8wuf1gawudmvwwuatjywu9ezkwu6lupwu5737wu2dydwu0z6vwty621wtsjdxwtmwwxwtha8twtbnrtwt613pwsyzv5wstde5wsnqq1wsi491wschkx",
                opacity: .7
            },
            clouds: {
                min: 0,
                max: 99E3,
                step: 9900,
                scale: "ixmsick2u8d7ky22n6lt9x49mohrlcntp793oox1q7r6w7i7tys5bzwqo35rzik0zj",
                opacity: .65
            },
            humidity: {
                min: 0,
                max: 99E3,
                step: 1E3,
                scale: "hzqgxphzqgxphzqgxphzqgxphzqgxpi9q2bhi9q2bhi9q2bhi9q2bhijpnp9ijpnp9ijpnp9ijpnp9ijpnp9itp931itp931itp931itp931j3ougtj3ougtj3ougtj3ougtj3ougtjdofuljdofuljdofuljdofuljno18djno18djno18djno18djxnmm5jxnmm5jxnmm5jxnmm5jxnmm5k7n7zxk7n7zxk7n7zxk7n7zxkhmtdpkho8cjkrqn9mkrs28gl1t2s7lbvhp9lbwwo4llxx0qllzbzllw1qwnm62r9am64684mg6lcbmg80b5mq90nsn0bfkun0cujonaduwbnaf9v5nkhozcnuipbynuk4ato4mj7vo4ny6qoeoyjcoordgfoossf9oytsz0p8utbmp8xmuxpiyn7jpsy8lbq2xtz3qcxfcvqwwm4fr6w7i7rgvsvzrqve9rsaul1bsku6f3sutrsvt4td6ntosjy7tys5bzu8rqpruirc3jv2qiv3vcq48vvmppmnvwpb0fwgohrzwqo35rx0nojjxan9xbxumgovy4m22nyelngfyol8u7z8kflrzik0zj",
                opacity: .7
            },
            freezing: {
                min: 0,
                max: 6E6,
                step: 1E5,
                scale: "037kp9huhl71nodbchthxtbszb74jozat8zrzb37p0zbis9kzbn2aqzbahj6zctaa8zeexjazg0kl9zh6qt3zhrnslzhq52xzhq0xqzhoi83zhoea0zhd00tzh1lyqzgukc0zgm4bxzgf2p7zg6mp4zfzl2ezfvdd0zfr5ghzfmxr3zfipukzfei56zexmc3zegqj0zdygcmzdhkjjzd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzce788zcbdwazc9zbwzc75zyzc5rfkzc2yapzc1jj7zbyqedzbxbmvzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .6
            },
            snow: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "02ycnsnqxb7atif4knthr5jrth1ryfw8nu7yza833pzaqb3xzb74jozat133zadj22zb1eplzbpad4zbqojazbth9xzbuv8zzbw9f5zbnstozbfc87zb5gv5zax09ozasrrnzaoj9mzalpj6zahh15zad8j4za7lguza1yejz9wb55z9qo2uz9l10kzaab1jzazl2izbov3izce54hzd3f5gzdbukazdk9z4zdrb0lzdzqffze85u9zedrx1zehzfczenli4zert0fzexfabzf1msmzf78vezfbgdpzfh2ghzfl9yszfpho7zftpdmzfxx31zg24sgzg6chvzgak7azgerwpzgizm4zgn7bjzgrf0yzgrgluzgq3tdzgq5e9zgq769zgq8r5zgovrkzgoxjkzgoz4gzgnmbzzgnnwvzgma4uzgkwjxzgjirwzgi4zvzgi5zfzggs7ezgfefdzge0nczgcn2fzgb9aezgconbzgfikpzggxxmzgjrv0zgl77xzgo15bzgpgi8zgsafmzgtpsjzgwjx1zgxz9yzgzemvzh28k9zh3nx6zh6hukzh7x7hzhar4vzhc6hszhf0f6zhgfs3zhgfz7zhgfz7zhgg6bzhhuqszhhuxwzhhuxwzhhv50zhhv50zhhvc4zhj9wlzhja3pzhja3pzhjaatzhjahxzhjahxzhkp9izhkp9izhkpgmzhkpgmzhkpnqzhkpnqzhm4fbzhm4fbzhm4mfzhm4tjzhm4tjzhm50nzhm50nzhnjs8zhnjs8zhnjzczhnjzczhnk6gzhnk6gzhoyy1zhoyy1zhoz55zhozc9zhozc9zhozjdzhqe3uzhqeayzhqeayzhqei2zhqei2zhqep6zhrt9nzhrtgrzhrtgrzhrtnvzhrtnvzht8fgzht8fgzhun71zhun71zhun71zhw1ymzhw1ymzhxgq7zhxgq7zhxgq7zhyvhszhyvhszi0a9dzi0a9dzi0a9dzi1p0yzi1p0yzi33sjzi33sjzi33sjzi4ik4zi4ik4zi5xbpzi5xbpzi5xbpzi7c3azi7c3azi8quvzi8quvzi8quvzia5mgzia5mgzibke1zibke1zibke1zicz5mzicz5mziedx7ziedx7ziedx7zifsoszifsoszih7gdzih7gdzih7gdziim7yziim7yzik0zjzik0zj",
                opacity: .6
            },
            wave: {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            "wind-wave": {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            swell: {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            "wind-wave-period": {
                min: 0,
                max: 2E4,
                step: 1E3,
                scale: "037kp9huhl71thxtbszat8zrzbis9kzbemwdzbahj6ze9bgdzh6qt3zhgg1kzhq52xzhq0xqzhoi83zhir80zhd00tzgoztuzfzl2ezei4wfzd0oqgzcflm9zbuii1",
                opacity: .6
            },
            "swell-period": {
                min: 0,
                max: 2E4,
                step: 1E3,
                scale: "037kp9huhl71thxtbszat8zrzbis9kzbemwdzbahj6ze9bgdzh6qt3zhgg1kzhq52xzhq0xqzhoi83zhir80zhd00tzgoztuzfzl2ezei4wfzd0oqgzcflm9zbuii1",
                opacity: .6
            },
            no2: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "wj2w9gwkn7x8wli7dtwmd6nawmitigwmogdmwmu38swnp2i9woin7awpm2grwqo35rwqo2ykwqmoe1wqmo6uwql9mbwql9f4wql97xwqjunewqjug7wqifvowqifohwqifh9wqh0wpwqh0phwqflxtwqflxpwqflqgwqe6yswqe6rkwqcs70wqcrzswqbd83wq9ygewq8jopwq74x0wq5q5cwq4b6jwq2weuwq1hn5wq02vgwpyo3rwpynwhwpx9bvwpx94kwpvucuwpvucowpvu5ewpufdowpuf6dwpt0lrwpt0ehwpt0ecwpt073wpt06zwpszzqwpszzlwprlf0wprl7rwprl7nwprl0ewprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze88jxze6tzgze40ujze17pmzdzt55zdx007zdu6vazdssatzdpz5wzdoklfzdlr9ezdiy4hzdhjk0zdeqf3zdbxa6zdaipozd7pkrzd4wfuzd3hvdzd0oqgzcza5yzcza5xzcxvlfzcwh0xzcv2ggzcv29azctnoszcs94azcqujtzcqujrzcpfz9zco1eszcmmuazcmmu8zcl89rzcjti5zciexnzciexlzch0d4zcflsmzce787zce788zccsgpzcbdwazc9zbvzc9zbwzc8krhzc75zyzc5rfjzc5rfkzc4cv4zc2yapzc1jj6zc1jj7zc04yszbyqedzbxbtyzbxbmvzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            o3: {
                min: 0,
                max: 3E5,
                step: 2E3,
                scale: "th7d1wtr6yfnu16jtfu16k0iub4qtuul4c7luv3xldv53j68vf34k0vf34jzvp1bdbvz0wy6w90ibywj03ppwszp3hx2zaocx2xw3wxcxhhnxmx2vfxwwogay6w9u2ygvv7tygugndyqu288z0tnm0zat8zrzb4iiozbfs1lzbr1khzc3pnuzcez6rzcq8ikzd1i1hzdcrkdzdo13aze0p6nzebypkzen88hzeyhrdzf9raazfl0t7zfwa50zg8y8dzgk7r9zgvha6zh6qt3zh84s7zh9ik7zhawjbzhcaigzhdohkzhf29kzhgg8ozhgfnczhhtmgzhj7egzhkldkzhlzcpzhndbtzhor3tzhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgvzaozgqcmlzgjbe3zgdoq0zg821yzg2fdwzfwsptzfprhbzfk4t8zfei56zf62c7zexmc3zep6j4zegqj0ze8aq1zdygcmzdq0cizdhkjjzd94jfzd0oqgzcza5zzcxvljzcv29izctnp2zcs94lzcquk4zcpfskzcmmnnzcl837zcjtiqzcier5zch06pzce71szccshczcbdprzc9z5azc8kkuzc5rfxzc4codzc2y3wzc1jjfzc04yzzbxbmyzbvx2izbuii1zbrp5zzbqalizbnh9gzbknxfzbj9cxzbgg0vzbf1gezbc84czb9esbzb807tzb56vrzb2djqzb0yz8zay5n7zavcb5zatxqnzar4emzaob2kzamwi3zak361zaioljzafv9izad1xgzabnczza8u0x",
                opacity: .6
            },
            so2: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "wj2w9gwkn7x8wli7dtwmd6nawmitigwmogdmwmu38swnp2i9woin7awpm2grwqo35rwqo2ykwqmoe1wqmo6uwql9mbwql9f4wql97xwqjunewqjug7wqifvowqifohwqifh9wqh0wpwqh0phwqflxtwqflxpwqflqgwqe6yswqe6rkwqcs70wqcrzswqbd83wq9ygewq8jopwq74x0wq5q5cwq4b6jwq2weuwq1hn5wq02vgwpyo3rwpynwhwpx9bvwpx94kwpvucuwpvucowpvu5ewpufdowpuf6dwpt0lrwpt0ehwpt0ecwpt073wpt06zwpszzqwpszzlwprlf0wprl7rwprl7nwprl0ewprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze88jxze6tzgze40ujze17pmzdzt55zdx007zdu6vazdssatzdpz5wzdoklfzdlr9ezdiy4hzdhjk0zdeqf3zdbxa6zdaipozd7pkrzd4wfuzd3hvdzd0oqgzcza5yzcza5xzcxvlfzcwh0xzcv2ggzcv29azctnoszcs94azcqujtzcqujrzcpfz9zco1eszcmmuazcmmu8zcl89rzcjti5zciexnzciexlzch0d4zcflsmzce787zce788zccsgpzcbdwazc9zbvzc9zbwzc8krhzc75zyzc5rfjzc5rfkzc4cv4zc2yapzc1jj6zc1jj7zc04yszbyqedzbxbtyzbxbmvzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            pm10: {
                min: 0,
                max: 3E5,
                step: 2E3,
                scale: "wj2w9gwjpfbrwkbye2wkzw7ywlnu1uwmd6nawmk8a0wmr9pnwn6rjiwnupdewoin7awpdmgqwq8lj1wqmoe1wql97xwqifohwqflxtwqe6rkwq9ygewq4b6jwpyo3rwpx9bvwpvucuwpvu5ewpuf6dwpt0ehwpt073wpszzqwprlf0wprl7nwprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze6tzgze17pmzdx007zdssatzdoklfzdiy4hzdeqf3zdaipozd4wfuzd0oqgzcza5yzcxvlfzcwh0xzcv29bzctnotzcs94azcqujszcpfzazco1eszcmmu9zcl89rzcjti5zciexnzch0d4zcflsmzce787zccsgpzcbdwazc9zbvzc8krgzc75zyzc5rfjzc4cv4zc2yapzc1jj7zc04yszbyqedzbxbtyzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            pm25: {
                min: 0,
                max: 2E5,
                step: 2E3,
                scale: "wj2w9gwkn7x8wmd6nawmln1lwmu38swnp2i9woin7awpm2grwqo35rwql9f4wqifohwqflxpwqcrzswq5q5cwpyo3rwpvucowpt0ehwpszzlwprl09wpucrrwpvpytwpvodzwpu81kwpu6gqwpu4oswpu33ywpu1j4wpsl6qwpsjlwwpsi12wpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lqux6wklwxqrjgzyal3ypyug2tszeb1ouze6tzgze17pmzdx007zdssatzdoklfzdiy4hzdeqf3zdaipozd4wfuzd0oqgzcza5xzcwh0xzcv29azcs94azcqujrzco1eszcmmu8zcjti5zciexlzcflsmzce788zcbdwazc9zbwzc75zyzc5rfkzc2yapzc1jj7zbyqedzbxbmvzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .65
            },
            co: {
                min: 0,
                max: 3E6,
                step: 2E4,
                scale: "08ggfx2gd7i54y9jy5766b0d9o2ngdbvzeiledvqylglsi0tj3ougtlbllj1nthxz1nt2fjmnsmx47ns8tgcnrtb0xnrdslinrhwrbnrkmconroqbcnrrfwpnrvk2inrsqqhnrpxegnrn49jnrkaxhnrhhlgnreo9fnrbuxenr91shnr68ggnr3f4fnr0lsenqxsgcnquzbfnqs5zenqpcndnql4qwnqibevnqfi9ynqcoxwnq9vlvnq729unq48xtnq1fswnpymgvnpvt4unpszstnpq6grnpndbunpkjztnphqnsnpgc3bnpexivnpc46unpapmenp9b1xnp7whgnp6hpwnp3okznp2a0jnp0vg2nozgohnoy241nov8z4notueonosfn3nor12mnopmi6nomtd9nolelpnok018noilgrnoh6wbnoedkanocyzunobkfdno8r3bno7ciuno4j6sno1purno0ba9nnxhy7nnw3dqnnta1onnqgpnnnp255nnm8t3nnjfh2nni0wknnf7kjnnce8hnnaznznn86bynn5czwnn3yffnn153dnmzqivnmwx6unmu3usnmspabnmpvy9nwo2rlnwmo75o6kv0hogkge9oqin7lp0gu0xpaf0u9padm9tpkbt35pu9zwhq49la9qe7s3lqo5ywxqy45q9qy2r5tr80xz5rhz4shrryq69s1wwzlsbv3sxsbtp8hslrw1tsvq2v5t5o9ohtfnv29tpm1vktzk8owtziu4gu9h0xsujf7r4utdekgv3bldsvdb6rkvd9s74vn7z0gvx65tsw74cn4wh2jggwr0q9sx10bnkx0yx34xax3wgxkvapsxuthj4y4rocgyepv5syepv5syoo1z4yym8sgz8kfls",
                opacity: .9
            },
            dust: {
                min: 0,
                max: 2E6,
                step: 2E4,
                scale: "08ggfx766b0dedvqyllbllj1sjb1h9zh0w1pzgwmdbzgtrghzgphs3zgl83pzggymfzge3ihzg9tu3zg5kcszg1aoezfyfkgzfu636zfpweszflmqezfirtkzfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcwgtzzcs94lzco184zcjtiqzcflm9zcbdprzc760ezc2y3wzbyqejzbuii1zbt3xkzbrp5zzbrp5zzbqalizbovtxzbnh9gzbm2ozzbknxfzbknxezbj9cxzbhulczbgg0vzbf1gfzbf1gezbdmotzbc84czbatjvzb9esbzb807uzb807tzb6lg8zb56vrzb3sbbzb2djqzb2djpzb0yz8zazk7nzay5n7zawr2qzavcb5zavcb4zatxqnzasiz3zar4emzappu5zaob2kzaob2jzamwi3zalhxmzak361zaiolkzaioljzah9tzzafv9izaegp1zad1xgzabnczzabnczzaa8leza8u0x",
                opacity: .6
            },
            aqi: {
                min: 0,
                max: 4E5,
                step: 3E3,
                scale: "uccnykucjosqucpavcucwbpiud3cjoudad6qudfzggudn0amudu0xoue11ruue6o1kuedoomuekpisuerqcxuexcfjuf4d9pufbe3vufieqxufo10nufv1utug22hvug93c1ugeplruglq8tugsr2zugzrx5uh5dzruhcetxuhjfo3uhp1qpuhw2kvui33f1uia423uifqbtuiiivcuiihvruiih3buih1jauih0quuigzr9uigyytuigxz8uifif8uifhmruifgn7uiffuquifev6uife2puidyipuidxq8uidwqous7v2ev21tl8vbvrwyvlr4t4vvl34uw5f1nowf8zzewz2jowx8wi7rxirv3xxsltfny2frrdyc9qa7ym3olxyvxmxnz5szttzfmyjozfk57nzfhbvlzfeijjzfaan1zf7hazzf4nyxzf1umvzexmxizeutlgzes09ezep6xczekz0uzei5oszefccqzecj0oze8b47ze5hs5ze2on7zdzvb5zdvnenzdsu2lzdq0qjzdn7eizdizi0zdg65yzddctwzdajhuzd6bsgzd3igezd0p4dzcxvsbzctnvtzcqujrzco1evzcl8h3zch0rrzce7tyzcbep2zc8lk6zc5smezc1kx2zbyrzazbvyuezbt5phzbqcrpzbnjmtzbjbxhzbgizpzbdputzbawx0zb83s4zb3w2szb1350zaya04zavh2czasnxgzaog83zalnabzaiu5fzag17nzad82rza90dfza67fnza3eaqza0l5uz9xs82",
                opacity: .7
            }
        };
    p["temperature-950hpa"] = p["temperature-925hpa"] = p["temperature-900hpa"] = p["temperature-850hpa"] = p["temperature-800hpa"] = p["temperature-750hpa"] = p["temperature-700hpa"] = p["temperature-650hpa"] = p["temperature-600hpa"] = p["temperature-500hpa"] = p["temperature-300hpa"] = p["temperature-200hpa"] = p["temperature-10hpa"] = p["temperature-2m"] = p.feel = p["temperature-5cm"] = p.dew = {hf: "temperature"};
    p["temperature-water"] = {hf: "temperature"};
    p["temperature-anomaly-2m"] = {hf: "temperature-anomaly"};
    p["wind-950hpa"] =
        p["wind-925hpa"] = p["wind-900hpa"] = p["wind-850hpa"] = p["wind-800hpa"] = p["wind-750hpa"] = p["wind-700hpa"] = p["wind-650hpa"] = p["wind-600hpa"] = p["wind-500hpa"] = p["wind-300hpa"] = p["wind-200hpa"] = p["wind-10hpa"] = {hf: "wind"};
    p["wind-250m"] = p["wind-100m"] = p["wind-10m"] = {hf: "wind"};
    p["humidity-900hpa"] = p["humidity-850hpa"] = p["humidity-700hpa"] = {hf: "humidity"};
    p.gust = p["gust-ac"] = {hf: "wind"};
    p["rain-3h"] = {hf: "rain-1h"};
    p["clouds-low"] = p["clouds-middle"] = p["clouds-high"] = p["clouds-total"] = {hf: "clouds"};
    p["clouds-fog"] =
        {hf: "clouds"};
    p["new-snow-ac"] = {hf: "snow"};
    p.cape.o = function (a) {
        return 1E5 * a
    };
    p.cape.h = "energy";
    p.cape.Rd = !1;
    p["cape-shear"].o = function (a) {
        return 5E4 * a
    };
    p["cape-shear"].h = "energy-shear";
    p["cape-shear"].Rd = !1;
    p.shear.o = function (a) {
        return 2E3 * a
    };
    p.shear.h = "speed-shear";
    p.shear.Rd = !1;
    p.cin.o = function (a) {
        return -1E4 * a
    };
    p.cin.h = "energy-inverse";
    p.cin.Rd = !1;
    p.cin.Fh = !0;
    p.li.o = function (a) {
        return 1E3 * (a - 128)
    };
    p.li.h = "temperature-index";
    p.li.Rd = !1;
    p.li.Fh = !0;
    p.helicity.o = function (a) {
        return 4E3 * a
    };
    p.helicity.h =
        "energy-derived";
    p.helicity.Rd = !1;
    p.wave.o = function (a) {
        return a / 10 * 1E3
    };
    p.wave.h = "height";
    p.wave.Rd = !1;
    p.wave.Ve = !0;
    p["wind-wave"].o = function (a) {
        return a / 10 * 1E3
    };
    p["wind-wave"].h = "height";
    p["wind-wave"].Rd = !1;
    p["wind-wave"].Ve = !0;
    p["wind-wave-period"].o = function (a) {
        return 1E3 * a
    };
    p["wind-wave-period"].h = "time";
    p["wind-wave-period"].Rd = !1;
    p["wind-wave-period"].Ve = !0;
    p.swell.o = function (a) {
        return a / 10 * 1E3
    };
    p.swell.h = "height";
    p.swell.Rd = !1;
    p.swell.Ve = !0;
    p["swell-period"].o = function (a) {
        return 1E3 * a
    };
    p["swell-period"].h =
        "time";
    p["swell-period"].Rd = !1;
    p["swell-period"].Ve = !0;
    p.clouds.o = function (a) {
        return 1E3 * k.min(a, 100)
    };
    p.clouds.um = !0;
    p.clouds.h = "percents";
    p.clouds.Rd = !1;
    p.clouds.De = "#000";
    p["clouds-fog"].o = function (a) {
        return 70 == a ? 1E5 : 0
    };
    p.humidity.o = function (a) {
        return 1E3 * k.min(a, 100)
    };
    p.humidity.um = !0;
    p.humidity.h = "percents";
    p.humidity.Rd = !1;
    p.humidity.De = "#000";
    p["rain-1h"].o = function (a) {
        a -= 10;
        0 > a && (a = 0);
        return 1E3 * (240 < a ? 780 + 100 * (a - 10 - 230) : 90 < a ? 80 + 5 * (a - 10 - 80) : 10 > a ? a / 10 : a - 10)
    };
    p["rain-1h"].o.typed = function (a,
                                     b) {
        a -= 10;
        0 > a && (a = 0);
        return 1E3 * (240 < a ? 780 + 100 * (a - 10 - 230) : 90 < a ? 80 + 5 * (a - 10 - 80) : 10 > a ? a / 10 : a - 10) + ((15 <= b ? 35 <= b ? 45 <= b ? 55 <= b ? 65 <= b ? 8 : 0 : 64 : 16 : 32 : 0) << 24)
    };
    p["rain-1h"].wg = function (a, b, c) {
        if (65 == c) return (" mm" == b ? this.Qe(a / 1E3) + " cm" : this.Qe(a / 100) + b) + " (" + u.type.snow + ")";
        var d = "";
        33 == c ? d = " (" + u.type.storm + ")" : 17 == c ? d = " (" + u.type.fog + ")" : 129 == c && (d = " (" + u.type.freezingRain + ")");
        return this.Qe(a / 1E3) + b + d
    };
    p["rain-3h"].o = p["rain-1h"].o;
    p["rain-ac"].o = p["rain-1h"].o;
    p["rain-1h"].h = "length";
    p["rain-3h"].h = "length";
    p["rain-ac"].h = "length";
    p["rain-ac"].yg = {
        mm: {
            precision: 1,
            A: [0, 1E3, 2E3, 4E3, 6E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4, 6E4, 7E4, 8E4, 9E4, 1E5, 15E4, 2E5]
        },
        inch: {
            precision: .01,
            A: [0, 1016, 2032, 3048, 5080, 10160, 15240, 20320, 25400, 38100, 50800, 63500, 76200, 88900, 101600, 114300, 127E3, 152400, 203200]
        }
    };
    p.radar.o = function (a) {
        return 1E3 * a
    };
    p.radar.h = "reflectivity";
    p.radar.Rd = !1;
    p.radar.o.typed = function (a, b) {
        return 1E3 * a + ((15 <= b ? 35 <= b ? 45 <= b ? 55 <= b ? 65 <= b ? 8 : 0 : 64 : 16 : 32 : 0) << 24)
    };
    p.radar.wg = function (a, b, c) {
        if (65 == c) return this.Qe(a / 1E3) +
            b + " (" + u.type.snow + ")";
        var d = "";
        33 == c ? d = " (" + u.type.storm + ")" : 17 == c ? d = " (" + u.type.fog + ")" : 129 == c && (d = " (" + u.type.freezingRain + ")");
        return this.Qe(a / 1E3) + b + d
    };
    p.snow.h = "blanket";
    p.snow.o = function (a) {
        0 != a && (a -= 10, 0 > a && (a = 0));
        200 < a ? a = 50 * (a - 200) : 20 < a && (a = 2 * (a - 20));
        return 1E3 * a
    };
    p.snow.Rd = !1;
    p.freezing.o = function (a) {
        return 1E5 * a
    };
    p.freezing.h = "height";
    p.freezing.yg = {
        m: {Oa: 1, precision: 100, A: [0, 2E5, 4E5, 6E5, 8E5, 1E6, 12E5, 14E5, 16E5, 18E5, 2E6, 25E5, 3E6, 4E6, 5E6]},
        ft: {
            Oa: 3.2808399, precision: 100, A: [0, 182880, 365760,
                548640, 731520, 914400, 1066800, 1219200, 1524E3, 1828800, 2133600, 2438400, 3048E3, 3962400, 4876800]
        }
    };
    p.freezing.Rd = !1;
    p.temperature.o = function (a) {
        return 1E3 * (a - 128)
    };
    p.temperature.h = "temperature";
    p.temperature.Rd = !1;
    p.temperature.Fh = !0;
    p["temperature-water"].Ve = !0;
    p["temperature-anomaly"].o = function (a) {
        return 1E3 * (a - 128)
    };
    p["temperature-anomaly"].h = "temperature-anomaly";
    p["temperature-anomaly"].Rd = !1;
    p["temperature-anomaly"].Fh = !0;
    p["precipitation-anomaly"].o = function (a) {
        return 3E3 * (a - 128)
    };
    p["precipitation-anomaly"].h =
        "precipitation-anomaly";
    p["precipitation-anomaly"].Rd = !1;
    p["precipitation-anomaly"].Fh = !0;
    p.pressure.o = function (a) {
        return 1E3 * (a + 900)
    };
    p.pressure.h = "pressure";
    p.pressure.Rd = !1;
    p.wind.o = function (a, b) {
        return 2E3 * k.sqrt((a - 127) * (a - 127) + (b - 127) * (b - 127))
    };
    p.wind.h = "speed";
    p.wind.Rd = !1;
    p["wind-950hpa"].o = p["wind-925hpa"].o = p["wind-900hpa"].o = p["wind-850hpa"].o = p["wind-800hpa"].o = p["wind-750hpa"].o = p["wind-700hpa"].o = p["wind-650hpa"].o = p["wind-600hpa"].o = p["wind-500hpa"].o = p["wind-300hpa"].o = p["wind-200hpa"].o =
        p["wind-10hpa"].o = function (a, b) {
            return 5E3 * k.sqrt((a - 127) * (a - 127) + (b - 127) * (b - 127))
        };
    p.gust.o = function (a) {
        return 3600 * a
    };
    p.gust.h = "speed";
    p.gust.Rd = !1;
    p.currents.o = function (a, b) {
        a = (3 * a - 400) / 100;
        b = (3 * b - 400) / 100;
        return 1E3 * k.sqrt(a * a + b * b)
    };
    p.currents.h = "currents";
    p.currents.Rd = !1;
    p.currents.Ve = !0;
    p.co.o = function (a) {
        return 2E4 * a
    };
    p.co.h = "air-parts";
    p.co.Rd = !0;
    p.no2.o = function (a) {
        return 1E3 * a
    };
    p.no2.h = "air-micrograms";
    p.no2.Rd = !0;
    p.no2.wg = function (a, b) {
        return this.Qe(a / 1E3) + b + " (" + u.Id[5E4 > a ? "good" : 1E5 >
        a ? "moderate" : 2E5 > a ? "unhealthySensitive" : 4E5 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    p.o3.o = function (a) {
        return 2E3 * a
    };
    p.o3.h = "air-micrograms";
    p.o3.Rd = !0;
    p.o3.yg = {"\u00b5g/m\u00b3": {Oa: 1, precision: 1, A: [0, 4E4, 6E4, 8E4, 1E5, 12E4, 14E4, 16E4, 2E5, 3E5]}};
    p.o3.wg = function (a, b) {
        return this.Qe(a / 1E3) + b + " (" + u.Id[1E5 > a ? "good" : 13E4 > a ? "moderate" : 24E4 > a ? "unhealthySensitive" : 38E4 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    p.pm10.o = function (a) {
        return 2E3 * a
    };
    p.pm10.h = "air-micrograms";
    p.pm10.Rd = !0;
    p.pm10.yg = {
        "\u00b5g/m\u00b3": {
            Oa: 1,
            precision: 1, A: [0, 2E4, 4E4, 6E4, 8E4, 1E5, 12E4, 16E4, 2E5, 3E5]
        }
    };
    p.pm10.wg = function (a, b) {
        return this.Qe(a / 1E3) + b + " (" + u.Id[4E4 > a ? "good" : 7E4 > a ? "moderate" : 9E4 > a ? "unhealthySensitive" : 18E4 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    p.pm25.o = function (a) {
        return 2E3 * a
    };
    p.pm25.h = "air-micrograms";
    p.pm25.Rd = !0;
    p.pm25.yg = {"\u00b5g/m\u00b3": {Oa: 1, precision: 1, A: [0, 1E4, 2E4, 3E4, 4E4, 6E4, 8E4, 1E5, 16E4, 2E5]}};
    p.pm25.wg = function (a, b) {
        return this.Qe(a / 1E3) + b + " (" + u.Id[2E4 > a ? "good" : 35E3 > a ? "moderate" : 45E3 > a ? "unhealthySensitive" : 9E4 >
        a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    p.so2.o = function (a) {
        return 1E3 * a
    };
    p.so2.h = "air-micrograms";
    p.so2.Rd = !0;
    p.so2.wg = function (a, b) {
        return this.Qe(a / 1E3) + b + " (" + u.Id[5E4 > a ? "good" : 12E4 > a ? "moderate" : 35E4 > a ? "unhealthySensitive" : 5E5 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    p.dust.o = function (a) {
        return 2E4 * a
    };
    p.dust.h = "air-micrograms";
    p.dust.Rd = !0;
    p.dust.yg = {"\u00b5g/m\u00b3": {Oa: 1, precision: 1, A: [0, 5E4, 1E5, 15E4, 2E5, 4E5, 6E5, 8E5, 1E6, 15E5, 2E6]}};
    p.aqi.o = function (a) {
        return 3E3 * a
    };
    p.aqi.h = "air-index";
    p.aqi.Rd = !1;
    p.aqi.wg =
        function (a, b) {
            return this.Qe(a / 1E3) + b + " (" + u.Id[5E4 > a ? "good" : 1E5 > a ? "moderate" : 15E4 > a ? "unhealthySensitive" : 2E5 > a ? "unhealthy" : "veryUnhealthy"] + ")"
        };
    var ta = {
        vl: Infinity, Cn: -Infinity, ao: function (a) {
            var b = 2 < a.zoom ? 5 < a.zoom ? 8 < a.zoom ? 3 : 2 : 1 : 0;
            return x.root + "?p=" + a.lat.toFixed(b) + ";" + a.lon.toFixed(b) + ";" + a.zoom + "&l=" + a.Kd + (a.time < ta.vl || a.time > ta.Cn ? "&t=" + a.time.format("yyyyMMdd/HHmm") : "") + ("auto" != a.G ? "&m=" + a.G : "") + ("normal" != a.D ? "&w=" + a.D : "")
        }, bo: function (a, b) {
            var c = [];
            aa[b].B && c.push("l=" + b);
            "normal" !=
            a && c.push("w=" + a);
            return c.length ? "./?" + c.join("&") : "./"
        }, parse: function (a) {
            var b = {}, c = {p: "", l: ""};
            a.replace(/^[^#?]+/, "").replace(/[?#&]([^=]+)=([^#&]+)/g, function (a, b, r) {
                c[b] = decodeURIComponent(r)
            });
            a = c.p.replace(/[;,]/g, "/").split("/");
            b.lat = +a[0];
            b.lon = +a[1];
            a[2] && (b.zoom = +a[2]);
            a = c.l.replace(/[;,\/]/g, "-");
            b.Kd = a;
            if (a = c.t) b.time = new Date(Date.UTC(+a.slice(0, 4), a.slice(4, 6) - 1, +a.slice(6, 8), +a.slice(9, 11), +a.slice(11, 13) || 0));
            c.w && (b.D = c.w);
            c.m && (b.G = c.m);
            return b
        }
    }, na = {
        ar: {code: "ar", label: "عربي", file: !0},
        cs: {code: "cs", label: "česky", file: !0},
        de: {code: "de", label: "deutsch", file: !0},
        en: {
            code: "en",
            label: "english",
            mf: "We are sorry, but your browser lacks the support of integral part of this application (HTML <a href=\"https://en.wikipedia.org/wiki/Canvas_element\">element <code>&lt;canvas></code></a>). It's impossible to animate wind without it. If you don't want or can't upgrade your current browser to newer version, you can try different one:",
            ha: "Search for location…",
            ab: "Searching for “{q}”…",
            bb: "Searching for “{q}” in OpenStreetMap…",
            Ya: "Lat.: {lat} / Lon.: {lon} / {place}",
            "$a": "Not found.",
            ke: "Searching failed, please try again later.",
            cb: "Type at least {length} characters.",
            Za: "Find my position",
            Wa: "My location",
            ea: "About",
            Bc: "Help",
            Cc: "Settings",
            N: "Zoom in",
            H: "Zoom out",
            b: {
                temperature: "Temperature",
                rain: "Precipitation",
                clouds: "Clouds",
                wind: "Wind speed",
                gust: "Wind gusts",
                pressure: "Air pressure",
                snow: "Snow cover",
                freezing: "Freezing level",
                humidity: "Humidity",
                wave: "Waves",
                storm: "Thunderstorms",
                radar: "Radar",
                feel: "Perceived temperature",
                air: "Air quality",
                satellite: "Satellite",
                aurora: "Probability of aurora",
                sun: "Solar",
                "radar-type": "Radar"
            },
            f: {
                cape: "CAPE",
                "10m": "10 m above ground",
                "2m": "2 m above ground",
                "850hpa": "850 hPa, 1500 m",
                "700hpa": "700 hPa, 3000 m",
                "500hpa": "500 hPa, 5500 m",
                "300hpa": "300 hPa, 9000 m",
                "rain-1h": "1 hour",
                "rain-3h": "3 hours",
                "rain-ac": "from {time}",
                shear: "Wind shear",
                "wind-wave": "Wind wave height",
                swell: "Swell wave height",
                wave: "Significant wave height",
                "swell-period": "Swell wave period",
                "wind-wave-period": "Wind wave period",
                "clouds-low": "Low clouds",
                "clouds-middle": "Middle clouds",
                "clouds-high": "High clouds",
                "clouds-total": "Total cloud cover",
                cin: "CIN",
                li: "Lifted index",
                helicity: "Helicity (SRH)",
                "950hpa": "950 hPa, 500 m",
                "925hpa": "925 hPa, 750 m",
                "900hpa": "900 hPa, 1000 m",
                "800hpa": "800 hPa, 2000 m",
                "750hpa": "750 hPa, 2500 m",
                "650hpa": "650 hPa, 3600 m",
                "600hpa": "600 hPa, 4200 m",
                "200hpa": "200 hPa, 12000 m",
                "rain-1h-type": "1 hour",
                "rain-3h-type": "3 hours",
                "100m": "100 m above ground",
                "5cm": "5 cm above ground",
                dew: "Dew point",
                "250m": "250 m above ground",
                humidity: "Relative humidity",
                "10hpa": "10 hPa, 30000 m",
                "cape-shear": "CAPE*SHEAR",
                gust: "1 hour",
                "gust-ac": "from {time}",
                "new-snow-ac": "New from {time}",
                snow: "Total cover",
                co: "CO 🏭 🔥",
                no2: "NO2 🚗 🚢",
                o3: "O3 🌇",
                pm10: "PM10 🏭 🚜",
                pm25: "PM2.5 🏭 🚜",
                so2: "SO2 🏭 🌋",
                dust: "Dust 🌴",
                freezing: "Freezing level",
                "anomaly-2m": "Anomaly, 2 m",
                aqi: "AQI",
                "sea-surface": "Sea surface",
                currents: "Currents",
                "clouds-fog": "Fog",
                "monthly-anomaly": "Monthly anomaly",
                "precipitation-probability": "Precipitation probability"
            },
            W: {soft: "soft", off: "off", normal: "normal", strong: "strong", dark: "dark", fast: "fast-motion"},
            "$b": {
                altitude: "Altitude",
                accumulation: "Accumulation",
                storm: "Index",
                wave: "Type",
                clouds: "Type",
                humidity: "Type",
                maximum: "Maximum",
                snow: "Type",
                air: "Substance"
            },
            X: "custom",
            ic: "Wind animation",
            P: "Model",
            O: "Automatic",
            K: "Data: {model}, {source} (resolution {resolution})\nUpdated: {updated} (next update: {next} - prepare)\nCurrent time: {time} ({zone})",
            kf: {
                temperature: "For this output data, temperature is shown for {altitude}. The calculations take into account the terrain (elevation), but with lower resolution than in reality. Therefore the models cannot differentiate, for instance, the temperature on a mountain peak or on a city square scorched by the sun. The general rule is that the centres of large cities are 1 °C to 3 °C warmer than the surrounding area or natural landscapes. Significant temperature differences over a small area are primarily caused in the winter by an inversion. A short yet noticeable cooling can also occur after a local summer storm.",
                rain: "This output data shows the total precipitation in mm for the previous 1 or 3 hours, or from a specific date (accumulated amount). The models do not differentiate more significant precipitation totals in certain mountainous areas or, on the contrary, faint drizzling from fog and low cloud cover. Forecasting precipitation totals for local storms is difficult. The numerical model does not allow for accurate calculations of the formation of local storm cells. In conversions to snowfall, 1 mm of precipitation equals roughly 1 cm of snowfall.",
                clouds: "This output data shows cloud cover in percentages. Cloud patterns are very difficult to predict. The calculations also include forecasts for high cloud cover. 100% cloud cover signifies an overcast sky. If, however, the sky is overcast with cloud cover that is thin and the sun is shining through, it is still considered overcast, even though it may seem like a sunny day at first glance.",
                wind: "The map illustrates the average wind speed at an altitude {altitude}. Models run by NOAA (GFS, HRRR) calculate with 1-minute mean. However, remaining models (ICON, GEM) calculate with 10-minute mean. This can cause differences between each models. The value of the highest 1-minute sustained wind is about 14% greater than a 10-minute sustained wind over the same period. The calculation does not take into account exposed areas (hilltops, open fields) where wind speed will be greater than that in a city or valley. Localised increases in windiness during storms are also not taken into account in model calculations.",
                gust: "The map illustrates the maximum wind speed (so-called gusts) at 10 metres above the ground. The calculation does not take into account exposed areas (hilltops, open fields) where wind speed will be greater than that in a city or valley. Localised increases in windiness during storms are also not taken into account in model calculations.",
                pressure: "Calculations illustrate air pressure values at sea level. The output data differentiates between pressure highs and lows as well as pressure gradients, which influence wind speed.",
                cape: "When there is possibility of storm formation, it is recommended to monitor the values of the CAPE (this map shows surface based CAPE). It represents potential energy in the atmosphere. It helps to establish the level of atmospheric instability. The greater the values reached, the greater the likelihood of the formation of a storm. Values less than 300 are low, between 300 to 1000 are weak, 1000 to 2000 are moderate, and over 2000 are high, when the possibility of the occurrence of strong storms is highly likely. Storm formation is influenced by a number of other factors, however, CAPE is an important indicator.",
                snow: "This data illustrates the anticipated height of snow cover. Prediction of snow cover development is very complex, and the values listed may differ from actual values reached (even by several centimetres). The calculations take into account the terrain (elevation), but with lower resolution than in reality. Therefore, the model cannot display the exact snow cover height in mountainous areas, where it differs greatly.",
                freezing: "The altitude in metres at which the temperature dips below the freezing point is illustrated on the map. This altitude has a large influence on the state of precipitation. At altitudes above this level, precipitation generally occurs in solid states (snowflakes, ice crystals). At lower altitudes, on the contrary, precipitation occurs in a liquid state. This does not, however, always have to be the case. In some instances, snowfall may occur at lower altitudes as well. This is due to the fact that snow does not melt immediately at temperatures above the freezing point, but melts gradually. Therefore, primarily in low humidity, it can snow up to 400 m below this altitude. During temperature inversions, freezing precipitation may fall at this altitude.",
                wave: "The application displays two types of waves: swells and wind waves. Waves travelling outside of their place of origin, and are thus not caused by local winds, are called swells.  Waves caused by winds in that specific location are called wind waves. In the application, wind waves are marked in white and swells are marked in black. This feature allows you to quickly find areas where high wind waves are travelling in a different direction from the swells. Significant wave height is the average height (trough to crest) of the one-third highest waves. Given the variability of wave height, the largest individual waves are likely to be somewhat less than twice the reported significant wave height for a particular day. Wave period is time interval between arrival of consecutive crests at a stationary point.",
                li: "The lifted index (LI) is the temperature difference between an air parcel when it reaches the 500 hPa level and the actual temperature of the environmental air at 500 hPa. When the value is positive, the atmosphere is stable and when the value is negative, the atmosphere is unstable. Lifted Index maps are used to forecast the likelihood of thunderstorms. Values below 0 indicating instability and an increasing chance of thunderstorms. Lifted Index is generally scaled as follows: 6 or greater: very stable conditions (without thunderstorms), between 1 and 6: stable conditions, (thunderstorms not likely), between 0 and -2: slightly unstable (thunderstorms possible), between -2 and -6 : unstable (thunderstorms likely), less than -6:  very unstable (severe thunderstorms likely).",
                cin: "Convective inhibition (CIN) is a measure that indicates the amount of the energy that needs to be overcome in order for convection (thunderstorms) to occur. This map shows surface based CIN. CIN can be weakened by daytime heating, frontal lifting or other lifting mechanisms. CIN is generally scaled as follows: 0 to -50: weak inhibition, -50 to -200: moderate inhibition, less than -200: strong inhibition.",
                helicity: "SRH (Storm Relative Helicity) is a measure of the potential for cyclonic updraft rotation in right-moving supercells, and is calculated for the 3-km layers above ground level. Larger values (greater than 250 m<sup>2</sup>/s<sup>2</sup>) suggest an increased threat of tornadoes with supercells.",
                shear: "This maps shows vertical wind shear, which is a change in wind speed with change in altitude. Our map calculate the change in wind throughout the 0-6km layer. Thunderstorms tend to become more organized and persistent as vertical shear increases. Values less than 10 m/s are low, between 10 m/s to 20 m/s are moderate, and over 20 m/s are high (enough for supercells). In weak shear environment (up to 10 or 15 m/s), mostly multicells are developing and significant organisation of thunderstorms is not easy. In stronger shear environment (above approx. 15 m/s) probability of supercell development is increasing.",
                dew: "The dew point is the temperature to which air must be cooled to become saturated with water vapor. When further cooled, the airborne water vapor will condense to form liquid water (dew). When air cools to its dew point through contact with a surface that is colder than the air, water will condense on the surface. Dew point temperature is never greater than the air temperature because relative humidity cannot exceed 100%.",
                humidity: "For this output data, relative humidity is shown for {altitude}. Humidity is the amount of water vapor present in the air. Relative humidity is expressed as a percentage (a higher percentage means that the air-water mixture is more humid).",
                "cape-shear": "CAPE*SHEAR is one of the many thunderstorm parameters, it is combination of CAPE (Convection available potential energy) and wind shear. It is computed according to: square root(2*SBCAPE) * wind shear(0-6 km). It is targeted at forecasting organized thunderstorms, such as supercell. The deep-layer wind shear helps to organise convection (represented by CAPE) into long-lived cells. High values of CAPE*SHEAR (above 700) may indicate good condition for development of severe storms.",
                radar: "This output data shows current intensities of precipitation based on real or predicted data sets. This output is using not only radars but also numerical models and satelite images to improve coverage over the oceans and some land areas. Intensities of precipitation are described by colours in range from blue for a weak precipitation rate, to red for a very strong precipitation rate. Strong colours (red) need to be interpreted carefully since they may indicate not only heavy rain or snow but also thunderstorms, hail, strong winds, or tornadoes.",
                feel: "This map shows temperature equivalent perceived by humans, caused by the combined effects of sunshine, air temperature, relative humidity and wind speed. In humid conditions, the air feels much hotter. On the other hand, as airflow increases over the skin, more heat is removed and the air feels much cooler.",
                satellite: "This layer shows current clouds visible from space. Images are taken by satellites from geostationary orbit and they are processed by the GeoColor algorithm. The clouds are displayed as they are visible from space. At night, image shows lights from the large cities. Fog and low clouds are shown in the light blue color at night.",
                co: "Map shows concentration of carbon monoxide at 10 meters above ground. About half of the carbon monoxide in Earth's atmosphere is from the burning of fossil fuels and biomass (such as forest and bushfires). Most of the rest of carbon monoxide comes from chemical reactions with organic compounds emitted by human activities and plants. Carbon monoxide is a temporary atmospheric pollutant in some urban areas, chiefly from the exhaust of internal combustion engines.",
                no2: "Map shows concentration of nitrogen dioxide at 10 meters above ground. Nitrogen dioxide is a prominent air pollutant. For the general public, the most prominent sources of NO2 are internal combustion engines burning fossil fuels (cars). Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center.",
                o3: "Map shows concentration of ozone at 10 meters above ground (ground-level ozone). Low level ozone is an atmospheric pollutant. It is not emitted directly by car engines or by industrial operations, but formed by the reaction of sunlight on air containing hydrocarbons and nitrogen oxides that react to form ozone directly at the source of the pollution or many kilometers downwind. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center.",
                pm10: "Map shows concentration of coarse particulates with diameter between 2.5 and 10 micrometers at 10 meters above ground. Particulates are the most harmful form of air pollution due to their ability to penetrate deep into the lungs and blood streams. Some particulates occur naturally, originating from volcanoes, dust storms, forest and grassland fires. Human activities, such as the burning of fossil fuels in vehicles, stubble burning, power plants, road dust, wet cooling towers in cooling systems and various industrial processes, also generate significant amounts of particulates. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center. Local air deterioration also occurs due to houses with stoves fueled by wood or coal. However, model is not aware about these sources.",
                pm25: "Map shows concentration of fine particles with a diameter of 2.5 μm or less at 10 meters above ground. Particulates are the most harmful form of air pollution due to their ability to penetrate deep into the lungs and blood streams. Some particulates occur naturally, originating from volcanoes, dust storms, forest and grassland fires. Human activities, such as the burning of fossil fuels in vehicles, stubble burning, power plants, road dust, wet cooling towers in cooling systems and various industrial processes, also generate significant amounts of particulates. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center. Local air deterioration also occurs due to houses with stoves fueled by wood or coal. However, model is not aware about these sources.",
                so2: "Map shows concentration of sulfur dioxide at 10 meters above ground. Sulfur dioxide is a toxic gas responsible for the smell of burnt matches. It is released naturally by volcanic activity and is produced as a by-product of copper extraction and the burning of fossil fuels contaminated with sulfur compounds. Sulfur dioxide has significant impacts upon human health.",
                dust: "Map shows concentration of dust at 10 meters above ground. Dust is made of fine particles of solid matter. On Earth, it generally consists of particles in the atmosphere that come from various sources such as soil, dust lifted by wind (an aeolian process), volcanic eruptions, and pollution.",
                "temperature-anomaly-2m": "The map shows the temperature anomaly from the long-term average for a given time. This average is based on the period 1980-2020 (40 years). Temperatures above average are displayed from orange to red colors, and below average are displayed from blue to purple.",
                aqi: "Air quality index (marked as AQI) is developed by Environmental Protection Agency. Values over 300 represents hazardous air quality, between 200-300 very unhealthy, 150-200 unhealthy, 100-150 unhealthy for sensitive groups and below 100 or rather below 50 the air quality is good.",
                "temperature-sea-surface": "Sea surface temperature is the water temperature close to the ocean's surface (at altitude 1 meter under sea level).",
                currents: "An ocean current is a continuous movement of sea water generated by a number of forces acting upon the water, including wind, the Coriolis effect, breaking waves, temperature and salinity differences. Ocean currents are primarily horizontal water movements. This layer shows the speed and direction of surface (at altitude 1 meter above sea level) ocean currents.",
                "precipitation-anomaly": "The map shows the precipitation anomaly from the long-term average for a period from the first day of the month to a user selected day of the month. For example, the anomaly for December 10 of 2020 shows how much the precipitation in the period from 1st to 10th December of 2020 differs from the average measured between 1st to 10th December. The average is based on the period 1980-2020 (40 years). Precipitation above average are displayed from blue to purple, and below average are displayed from orange to red colors. Note that you have to select the last day of the month to view overall anomaly for the whole month. The beginning of the month is determined by UTC time."
            },
            va: "Play",
            wa: "Pause",
            ec: "Previous",
            dc: "Next",
            cc: "Change date",
            fc: "Today",
            ld: "Show present-day forecast",
            c: "Settings",
            hb: "You can change the setting for the whole application or for the meteorological data here.",
            ib: "Language",
            kb: "Resolution",
            mb: "Reduced",
            lb: "Native",
            ob: "Restore default",
            la: "Application settings",
            jb: "You can change the setting for the whole application here.",
            ma: "Animation settings",
            sb: "You can change the setting for the streamlines which show average wind speed and wind direction. High values may overload your browser if your computer is less powerful.",
            Fb: "Predefined settings",
            Gb: "Number of streamlines",
            Ib: "Few",
            Hb: "Many",
            wb: "Motion speed",
            yb: "Low",
            xb: "High",
            Jb: "Average thickness of the streamlines",
            Lb: "Thin",
            Kb: "Wide",
            Mb: "Streamline thickness variation",
            Ob: "Same thickness",
            Nb: "Various thickness",
            zb: "Lifetime",
            Bb: "Ephemeral",
            Ab: "Persistent",
            Cb: "Transparency",
            Eb: "Opaque",
            Db: "Transparent",
            tb: "Streamlines length",
            vb: "Short",
            ub: "Long",
            qb: "Color",
            rb: ["White", "Black", "Light", "Dark"],
            eb: "Border color",
            fb: ["Automatic", "Black", "White"],
            ia: "Weather map settings",
            gb: "You can change the setting for the weather map which shows selected meteorological variables.",
            ka: "Show values in grid",
            pb: {
                length: "Precipitation units",
                blanket: "Snow units",
                height: "Height units",
                temperature: "Temperature units",
                speed: "Speed units",
                pressure: "Pressure units",
                "temperature-anomaly": "Temperature anomaly units",
                currents: "Currents units",
                "precipitation-anomaly": "Precipitation anomaly units",
                distance: "Distance units"
            },
            Yc: "Weather map opacity",
            Je: "Weather map interpolation",
            cg: "Font size",
            eg: "Small",
            dg: "Large",
            je: "Performance meter, optimum is 60 frames per second",
            na: "Share",
            sa: "Share options",
            Zc: "Thank you for spreading word about our website. Pick what you want to share please:",
            R: "Weather Forecast Maps",
            Zb: "Link",
            fd: "Screenshot",
            kd: "Live screenshot",
            "$c": "Embed",
            Qb: "Animated GIF image",
            Sd: "Video",
            jd: "share on",
            ra: "Link to",
            pa: "position",
            Wb: "active layer",
            qa: "date and time",
            Yb: "animation settings",
            Xb: "scale",
            Tb: "Image format",
            Rb: "Cut",
            Sb: "Cut part of screen",
            Ub: "aspect ratio",
            Vb: "free",
            hd: "golden",
            gd: "Include information in the corner",
            Fd: "upload to",
            Ff: "There will be link to Ventusky, linking specifically to current",
            bd: "Dimensions",
            cd: "Target time",
            dd: "current",
            Ed: "tomorrow",
            ed: "nearest weekend",
            ad: "Lock",
            ue: "Number of animation frames",
            me: "Animation speed",
            Qf: "Video duration",
            Rf: "Create loop",
            Af: "You can create clean screenshot here, without user interface.",
            Bf: "You are allowed to use this image wherever you want. We would appreciate if you put active hyperlink to Ventusky nearby.",
            Cf: "Live screenshot is a fragment of HTML code for your web page, which can show the same animation you see here.",
            Df: "Generated code works independently, all needed data are <a href=\"https://en.wikipedia.org/wiki/Data_URI_scheme\" target=\"_blank\">inside</a> of it, nothing is downloaded from Ventusky (or from anywhere else), it's permanent imprint of selected state, similar to classic screenshot, but with animation algorithm inside. It's automatically adjustible to various widths, so you don't have to worry about mobile layout.",
            Ef: "If you can't paste this code anywhere in your content management system or animation does not work afterwards, please contact your website administrator, we can't fix it.",
            fh: "There will be a way to embed live Ventusky website into your web page. But it isn't ready yet, stay tuned.",
            gh: "We don't recommend using animated GIFs in web environment, because their file size is huge. But here you can create infinite animation loop from current state (without anoying rewind stutter).",
            hh: "For creating videofile inside your browser, we have to download huge <a href=\"https://en.wikipedia.org/wiki/FFmpeg\" target=\"_blank\">FFmpeg library</a> (18 MB) inside this page. If you think you and your browser can handle it, we can give it a try…",
            oa: "Create",
            Pb: "Cancel",
            T: "on",
            S: "off",
            Gd: "not available",
            yd: "demo",
            If: "Under construction…",
            Fc: "New!",
            coords: "{lat} {lon}",
            Wf: "{deg}°{sign}",
            Sh: "{deg}°{min}'{sign}",
            aa: "E",
            "$": "W",
            Z: "N",
            Y: "S",
            Ga: "north",
            Ha: "northeast",
            Fa: "east",
            Ka: "southeast",
            Ja: "south",
            La: "southwest",
            Ma: "west",
            Ia: "northwest",
            Ca: "night",
            ya: "astronomical twilight",
            Ba: "nautic twilight",
            za: "civil twilight",
            Aa: "day",
            oc: "high noon",
            Da: "rise",
            Ea: "set",
            bc: "hr.",
            ta: "min.",
            ua: "to",
            J: "yyyy/MM/dd",
            Qa: "MM/dd",
            Ra: "ddd|[MMM dd]",
            I: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            M: 1,
            L: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            ba: [],
            Pa: "Current days",
            Pe: "HH:mm",
            Ng: "HH:mm",
            Og: "HH[:mm]",
            U: !0,
            hc: "Change units to “{unit}”",
            Sa: ".",
            Xa: "Remove from &#10;map",
            location: "Location",
            F: "Timezone",
            D: "Wind",
            V: "Webcams",
            Ta: "Meteogram",
            jc: "Wind waves",
            ac: "Swell",
            Pc: "Swell wave direction",
            Qc: "Wind wave direction",
            xa: "Waves animation",
            Gc: "Show isobar",
            Hc: "Show time zones",
            Ic: "Basemap",
            Jc: "Show extreme values",
            Kc: "Convective precipitation",
            Lc: "rain showers, snow showers, thunderstorms",
            type: {freezingRain: "Freezing rain", snow: "Snow", fog: "Fog", storm: "Thunderstorm"},
            Mc: "Hail",
            Ua: "Global models",
            Va: "Regional models",
            Nc: "Detailed weather forecast on",
            Tf: {
                altitude: "{group}, {sublayer}",
                accumulation: "{group} {sublayer}",
                storm: "{sublayer}",
                maximum: "{group} {sublayer}"
            },
            Nd: "Show lat, lon grid",
            close: "Close",
            sc: "Edit",
            Wc: "Saved locations",
            Ld: "Unable to download data",
            Qd: "Connection restored",
            back: "Back",
            uf: "App",
            rc: "Download App",
            xe: "Show scale",
            Vd: "Weather station",
            se: "Convective cloud base",
            ye: "Sea currents",
            Cd: "Premium layers",
            Bd: "Buy premium",
            year: "year",
            xc: "Installation",
            rd: "NE",
            qd: "N",
            pd: "E",
            vd: "SE",
            ud: "S",
            wd: "SW",
            xd: "W",
            sd: "NW",
            vc: "Gust",
            now: "Now",
            Oc: "Cloud base",
            Nn: "Widget",
            nf: "Please, add some city in the app",
            Lq: "ddd dd",
            Id: {
                good: "Good",
                moderate: "Moderate",
                unhealthySensitive: "Unhealthy for Sensitive Groups",
                unhealthy: "Unhealthy",
                veryUnhealthy: "Very Unhealthy",
                hazardous: "Hazardous"
            },
            pc: "days",
            tc: "Forecast step",
            md: "Weather Warnings",
            lc: "Alarm clock",
            g: "Additional information",
            zi: "Widget loading",
            sj: "Tap to retry",
            nd: "Dark background",
            od: "Light background",
            Pn: "Background based on daytime",
            mc: "America",
            nc: "Asia",
            qg: "Name days",
            kc: "3D Globe",
            yj: "Widget configuration not found",
            lj: "Only {model} layers are listed. To see all layers change model to AUTO in the Settings.",
            Yd: "L",
            Xd: "H",
            sg: "Pressure systems",
            Fj: "Data Update",
            Ej: "Weather Update Notification",
            Hj: "Loading Weather Forecasts",
            Gj: "Weather Forecast Update",
            zq: "%1$d °C · %2$s · %3$s",
            Dj: "List of location can be managed from the application",
            Jj: "Weather icons",
            Ij: "Solid",
            zj: "Contour",
            Bj: "Show current time and current temperature",
            Aj: "Show current time",
            xj: "Show colour temperature bar",
            qc: "days and nights",
            ql: "HH[:mm]",
            Ek: "Forecast",
            ef: "Weather Archive",
            Ac: "Map zoom",
            lh: "GPS Pointer",
            rj: "Tap to set the widget",
            vf: "Privacy Policy",
            Tk: "In the case of the Current location setting, the application accesses your location data to obtain a forecast for your location even when the application is closed. This data is not further stored or processed in any way, see <a href=\"https://www.ventusky.com/privacy\">Privacy policy</a>",
            zd: "Weather fronts",
            Al: "Ventusky uses location data to display the weather for your current location in the widget, even when the app is closed or not in use.",
            Uk: "<a href=\"https://www.ventusky.com/privacy\">Privacy policy</a>",
            Cj: "The widget does not have sufficient rights to access your location. You have to set location access to Allow all the time.",
            Bl: "For this widget setting, you have to allow location access even when the app is in the background. You have to set location access to Allow all the time.",
            Oi: "Currents animation",
            af: "7-day free trial period",
            gk: "Your subscription will be renewed after the trial period. Subscriptions can be canceled at any time.",
            Ec: "Model switcher",
            Qq: "Premium",
            tk: "Free",
            zl: "Weather layers",
            ol: "Support",
            Pj: "Ads",
            Uc: "It renews automatically after the trial period, you can cancel at any time in the store",
            Sc: "Buy annual subscription",
            Rc: "Buy for one year",
            Gk: "Limited",
            all: "All",
            Ok: "None at this time",
            Nk: "None always",
            kk: "During working days on e-mail",
            Tc: "Access all weather maps in the mobile app. With premium you can see weather forecast for these layers.",
            Dd: "• Wind (16 levels)\n• Wind gusts (1 hour, long time maximum)\n• Cloud cover (high, middle, low, fog, total)\n• Snow cover (total, new)\n• Humidity\n• Dew point\n• Air pressure\n• CAPE, CIN, LI, Helicity(SRH)\n• Freezing level\n• Wave forecast\n• Ocean currents\n",
            uc: "Get all weather layers",
            Xc: "See premium option",
            zk: "Hourly forecast",
            fk: "Hourly or daily forecast",
            Ad: "New snow",
            gn: "Show refresh button",
            On: "Unable to access location / GPS.",
            "$m": "Renew",
            an: "Have you already paid for app or Premium?",
            Lp: "No previous purchase found",
            Op: "You already have Premium active",
            Pp: "The request could not be processed",
            Zm: "It renews automatically. You can cancel at any time in the store. Payment for subscription renewals will be charged 24 hours prior to the end of the current period.",
            refresh: "Refresh",
            ei: "No chance of precipitation",
            zc: "License Agreement",
            Dc: "{min} min ago",
            wc: "{hour} hours ago",
            jh: "No webcameras were found in the location",
            Eo: "Coordinates",
            Wo: "Forecast in the location list",
            Np: "Save as a permanent location",
            remove: "Remove",
            Xf: {}
        },
        "en-ca": {code: "en-ca", label: "english (CA)", M: 0, U: !0},
        "en-us": {
            code: "en-us",
            label: "english (US)",
            I: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            M: 0,
            Pe: "h:mm tt",
            Ng: "h:mm|[tt]",
            Og: "h [tt]",
            yn: "AM",
            zn: "PM",
            U: !1,
            Xa: "Remove from &#10;map",
            location: "Location",
            F: "Timezone",
            D: "Wind",
            V: "Webcams",
            Ta: "Meteogram",
            ql: "HH[:mm] [tt]"
        },
        fr: {code: "fr", label: "français", file: !0},
        "fr-ca": {code: "fr-ca", label: "français (CA)", file: !0},
        hu: {code: "hu", label: "magyarul", file: !0},
        it: {code: "it", label: "italiano", file: !0},
        ja: {code: "ja", label: "日本語", file: !0},
        ko: {code: "ko", label: "한국어", file: !0},
        nl: {code: "nl", label: "nederlands", file: !0},
        pl: {code: "pl", label: "polski", file: !0},
        pt: {code: "pt", label: "português", file: !0},
        "pt-br": {code: "pt-br", label: "português (BR)", file: !0},
        ru: {code: "ru", label: "русский", file: !0},
        sk: {code: "sk", label: "slovensky", file: !0},
        uk: {code: "uk", label: "українською", file: !0},
        vi: {code: "vi", label: "Tiếng Việt", file: !0},
        zh: {code: "zh", label: "简体", file: !0},
        "zh-tw": {code: "zh-tw", label: "繁體", file: !0},
        es: {code: "es", label: "español", file: !0},
        ro: {code: "ro", label: "română", file: !0},
        tr: {code: "tr", label: "türkçe", file: !0},
        sv: {code: "sv", label: "svenska", file: !0},
        nb: {code: "nb", label: "norsk", file: !0},
        lv: {code: "lv", label: "latviešu", file: !0},
        lt: {code: "lt", label: "lietuvių", file: !0},
        hr: {code: "hr", label: "hrvatski", file: !0},
        fi: {code: "fi", label: "suomi", file: !0},
        et: {code: "et", label: "estonian", file: !0},
        el: {code: "el", label: "ελληνικά", file: !0},
        bg: {code: "bg", label: "български", file: !0},
        ca: {code: "ca", label: "català", file: !0},
        da: {code: "da", label: "dansk", file: !0},
        id: {code: "id", label: "indonesia", file: !0},
        sl: {code: "sl", label: "slovenščina", file: !0},
        sr: {code: "sr", label: "srpski", file: !0},
        he: {code: "he", label: "עברית", file: !0},
        th: {code: "th", label: "ไทย", file: !0},
        fa: {code: "fa", label: "فارسی", file: !0},
        mn: {code: "mn", label: "монгол", file: !0},
        be: {code: "be", label: "беларуская мова", file: !0}
    };
    try {
        za = function (a) {
            for (var b = a.target; b && "aside" != b.id && "i" != b.id;) b = b.parentNode;
            b || a.preventDefault()
        }, B.addEventListener("gesturestart", za), B.addEventListener("touchmove", za, {passive: !1})
    } catch (a) {
    }
    var g = {
        qm: function (a, b) {
            for (var c = a.length, d = [], f = 0; f < a.length; f++) (function (f) {
                g.pm(a[f], function (a) {
                    d[f] = a;
                    c--;
                    c || b(d)
                })
            })(f)
        }, Ak: {},
        pm: function (a, b) {
            var c = g.Ak[a];
            if (c) c.result ? b(c.result) : c.We.push(b); else {
                c = {We: [b]};
                g.Ak[a] = c;
                var d = new Image;
                d.onload = function () {
                    this.onload = null;
                    var b = g.iq;
                    b.width = this.width;
                    b.height = this.height;
                    var d = b.getContext("2d");
                    d.drawImage(this, 0, 0);
                    try {
                        var f = d.getImageData(0, 0, b.width, b.height).data
                    } catch (k) {
                        f = []
                    }
                    d = b = null;
                    b = new Uint8Array(f.length / 4);
                    for (d = 0; d < f.length; d += 4) b[d / 4] = f[d + 1];
                    for (d = 0; d < c.We.length; d++) c.We[d](b);
                    c.result = b;
                    setTimeout(function () {
                        delete g.Ak[a]
                    }, 12E4)
                };
                if ("crossOrigin" in d) d.crossOrigin =
                    "Anonymous", d.src = a; else if (D.URL) {
                    var f = new XMLHttpRequest;
                    f.onload = function () {
                        var a = URL.createObjectURL(this.response), b = d.onload;
                        d.onload = function () {
                            b.apply(this, arguments);
                            URL.revokeObjectURL(a)
                        };
                        d.src = a
                    };
                    f.open("GET", a, !0);
                    f.responseType = "blob";
                    f.send()
                } else d.src = a
            }
        }, hk: function (a, b, c) {
            g.pf(a, function (a) {
                var f;
                try {
                    f = JSON.parse(a)
                } catch (r) {
                }
                f ? b(f) : c && c()
            })
        }, Bi: {}, Gl: function (a) {
            if (!g.Bi[a]) {
                var b = {We: [], filled: !1};
                g.Bi[a] = b;
                g.Hl(a, function (a) {
                    b.filled = !0;
                    b.response = a;
                    for (var d = 0; d < b.We.length; d++) b.We[d](a);
                    b.We.length = 0
                });
                setTimeout(function () {
                    delete g.Bi[a]
                }, 12E4)
            }
        }, Hl: function (a, b) {
            var c = D.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            try {
                c.open("GET", a, !0)
            } catch (d) {
                b("");
                return
            }
            c.onreadystatechange = function () {
                4 == c.readyState && b(c.responseText)
            };
            c.onerror = function () {
                b("")
            };
            try {
                c.send("")
            } catch (d) {
                b("")
            }
        }, pf: function (a, b) {
            var c = g.Bi[a];
            c ? c.filled ? setTimeout(function () {
                b(c.response)
            }, 1) : c.We.push(b) : g.Hl(a, b)
        }
    };
    g.setTransform = function (a) {
        if ("undefined" == typeof a.transform ||
            "undefined" != typeof a.OTransform) {
            var b = "undefined" == typeof a.OTransform ? "undefined" == typeof a.WebkitTransform ? "undefined" == typeof a.MozTransform ? "undefined" == typeof a.msTransform ? null : "msTransform" : "MozTransform" : "WebkitTransform" : "OTransform";
            return function (a, d) {
                a.style[b] = d
            }
        }
        return function (a, b) {
            a.style.transform = b + " translate3d(0, 0, 0)"
        }
    }(B.documentElement.style);
    g.kl = function (a) {
        var b = "undefined" == typeof a.transformOrigin ? "undefined" == typeof a.OTransformOrigin ? "undefined" == typeof a.WebkitTransformOrigin ?
            "undefined" == typeof a.MozTransformOrigin ? "undefined" == typeof a.msTransformOrigin ? null : "msTransformOrigin" : "MozTransformOrigin" : "WebkitTransformOrigin" : "OTransformOrigin" : "transformOrigin";
        return function (a, d) {
            a.style[b] = d
        }
    }(B.documentElement.style);
    g.un = function (a) {
        var b = "undefined" == typeof a.transition ? "undefined" == typeof a.mh ? "undefined" == typeof a.WebkitTransition ? "undefined" == typeof a.MozTransition ? null : "MozTransition" : "WebkitTransition" : "OTransition" : "transition";
        return function (a, d) {
            a.style[b] =
                d
        }
    }(B.documentElement.style);
    g.a = function (a, b) {
        var c = B.createElement(a || "div");
        if (b) for (var d in b) if ("parent" == d) b[d].appendChild(c); else if ("style" == d) c.style.cssText = b[d]; else if ("children" == d) for (var f = 0; f < b[d].length; f++) c.appendChild("object" != typeof b[d][f] ? B.createTextNode(b[d][f]) : b[d][f]); else try {
            c[d] = b[d]
        } catch (r) {
        }
        return c
    };
    g.Mo = function (a) {
        var b = B.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (a) for (var c in a) if ("parent" == c) a[c].appendChild(b); else if ("children" == c) for (var d =
            0; d < a[c].length; d++) b.appendChild("object" != typeof a[c][d] ? B.createTextNode(a[c][d]) : a[c][d]); else b.setAttribute(c, a[c]);
        return b
    };
    g.ge = function (a) {
        return B.getElementById(a)
    };
    g.iq = g.a("canvas");
    (function (a, b, c) {
        a.Ce || (a.Ce = function (a, b) {
            return this.length < a ? Array(a - this.length + 1).join(b ? String(b).charAt(0) : " ") + this : String(this)
        });
        a.mh || (a.mh = function (a, b) {
            return this.length < a ? this + Array(a - this.length + 1).join(b ? String(b).charAt(0) : " ") : String(this)
        });
        c.format = function (a) {
            var b = this;
            return a.replace(/(\\?)(d+|M+|y+|H+|h+|m+|s+|t+)/g,
                function (a, c, d) {
                    c && (c = a.slice(0, 2), d = a.slice(2));
                    var g = d.length;
                    switch (d.charAt(0)) {
                        case "d":
                            d = 2 >= g ? b.getUTCDate().toString().Ce(g, "0") : 3 == g ? (u.fe || [])[b.getUTCDay()] || u.I[b.getUTCDay()].slice(0, 2) : u.I[b.getUTCDay()];
                            break;
                        case "M":
                            a = b.getUTCMonth();
                            d = 2 >= g ? (a + 1).toString().Ce(g, "0") : 3 == g ? u.ba[a] || u.L[a].slice(0, 3) : u.L[a];
                            break;
                        case "y":
                            a = b.getUTCFullYear(g);
                            2 >= g && (a %= 100);
                            d = a.toString().Ce(g, "0");
                            break;
                        case "H":
                            d = b.getUTCHours().toString().Ce(g, "0");
                            break;
                        case "h":
                            d = (b.getUTCHours() % 12 || 12).toString().Ce(g,
                                "0");
                            break;
                        case "t":
                            d = (12 > b.getUTCHours() ? u.yn : u.zn).slice(0, g);
                            break;
                        case "m":
                            d = b.getUTCMinutes().toString().Ce(g, "0");
                            break;
                        case "s":
                            d = b.getUTCSeconds().toString().Ce(g, "0")
                    }
                    return c + d
                }).replace(/\\(.)/g, "$1")
        }
    })(String.prototype, Array.prototype, Date.prototype, Number.prototype);
    g.Od = function (a, b) {
        var c;
        a = (a || "").replace(/\{([^\}\:]+)(?:\:([^\}]+))?\}/g, function (a, d, e) {
            return d in b ? Array.isArray(b[d]) ? (c || (c = {}), c[d] = b[d], a) : b[d].format && e ? b[d].format(e) : b[d] : ""
        });
        if (!c) return a;
        var d = [a], f;
        for (f in c) {
            for (var r =
                [], e = 0; e < c[f].length; e++) for (var U = 0; U < d.length; U++) r.push(d[U].replace(new RegExp("{" + f + "}", "g"), c[f][e]));
            d = r
        }
        return d
    };
    g.Nh = function (a) {
        return String(a).charAt(0).toUpperCase() + String(a).slice(1)
    };
    g.Tm = function (a, b) {
        return String(k.round(a * b) / b).replace(/\-/, "\u2212").replace(/\./, u.Sa)
    };
    g.coords = function (a, b) {
        return g.Od(u.coords, {lat: g.em(a.lat, b), lon: g.fm(a.lon, b)})
    };
    g.Wf = function (a, b, c) {
        return c ? g.Od(u.Sh, {deg: k.floor(a), min: (k.round(a % 1 * 60) + "").Ce(2, "0"), sign: b}) : g.Od(u.Wf, {
            deg: k.round(a),
            sign: b
        })
    };
    g.em = function (a, b) {
        return 0 > a ? g.Wf(-a, u.Y, b) : g.Wf(a, u.Z, b)
    };
    g.fm = function (a, b) {
        return 0 > a ? g.Wf(-a, u.$, b) : g.Wf(a, u.aa, b)
    };
    g.timeZone = function (a, b) {
        var c = "UTC" + (a ? (0 > a ? "+" : "-") + (new Date(k.abs(6E4 * a))).format("HH:mm") : "");
        return u.Xf[c + (b ? "d" : "s")] || u.Xf[c] || c.replace(/-/, "\u2212")
    };
    g.ni = function (a, b) {
        a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        b && (a = a.replace(/"/g, "&quot;"));
        return a.replace(/[\u0080-\uFFFF]/g, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        })
    };
    D.Uint8Array &&
    D.Int32Array && D.Float64Array || (D.Uint8Array = D.Int32Array = D.Float64Array = Array);
    k.sign || (k.sign = function (a) {
        return a ? 0 > a ? -1 : 1 : a
    });
    (function (a) {
        g.lq = function () {
            return g.En(B.documentElement, "u", void 0)
        };
        a.classList ? (g.Yn = function (b) {
                a.classList.add(b)
            }, g.Xp = function (b) {
                a.classList.remove(b)
            }, g.Oj = function (a, c) {
                a.classList.add(c)
            }, g.Xk = function (a, c) {
                a.classList.remove(c)
            }, g.En = function (a, c, d) {
                var f = a.classList.contains(c);
                f ? !0 !== d && a.classList.remove(c) : !1 !== d && a.classList.add(c);
                return !!d === d ? d : !f
            }) :
            (g.Yn = function (a) {
                g.Oj(B.documentElement, a)
            }, g.Xp = function (a) {
                g.Xk(B.documentElement, a)
            }, g.Oj = function (a, c) {
                a.className += " " + c
            }, g.Xk = function (a, c) {
                a.className = a.className.replace(new RegExp("^|\\s" + c + "(?=\\s|$)", "g"), "")
            }, g.En = function (a, c, d) {
                var f = -1 < a.className.split(" ").indexOf(c);
                f ? !0 !== d && g.Xk(a, c) : !1 !== d && g.Oj(a, c);
                return !!d === d ? d : !f
            })
    })(B.documentElement);
    g.Ui = function (a) {
        return (B.cookie.match(new RegExp(a + "=([^;]+)")) || [])[1]
    };
    g.Of = function (a) {
        try {
            var b = localStorage.getItem(a)
        } catch (c) {
            return g.Ui(a)
        }
        !b &&
        (b = g.Ui(a)) && (g.yf(a, b), g.Yk(a));
        return b
    };
    g.gl = function (a, b) {
        B.cookie = a + "=" + b + "; expires=" + (new Date(2035, 0, 1)).toGMTString() + "; path=/; SameSite=None" + ("https:" == location.protocol ? "; Secure" : "")
    };
    g.yf = function (a, b) {
        try {
            localStorage.setItem(a, b), g.Yk(a)
        } catch (c) {
            g.gl(a, b)
        }
    };
    g.Yk = function (a) {
        B.cookie = a + "=; expires=" + (new Date(1970, 0, 1)).toGMTString() + "; path=/; SameSite=None"
    };
    g.Wp = function () {
        try {
            localStorage.removeItem("dpr")
        } catch (a) {
        }
        g.Yk("dpr")
    };
    (function () {
        for (var a = 0, b = ["webkit", "moz"], c = 0; c <
        b.length && !D.requestAnimationFrame; ++c) D.requestAnimationFrame = D[b[c] + "RequestAnimationFrame"], D.cancelAnimationFrame = D[b[c] + "CancelAnimationFrame"] || D[b[c] + "CancelRequestAnimationFrame"];
        D.requestAnimationFrame || (D.requestAnimationFrame = function (b) {
            var c = (new Date).getTime(), r = k.max(0, 16 - (c - a)), e = D.setTimeout(function () {
                b(c + r)
            }, r);
            a = c + r;
            return e
        }, D.requestAnimationFrame.Nq = !0);
        D.cancelAnimationFrame || (D.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    })();
    g.tm = function (a) {
        var b = na.en, c;
        for (c in b) if (!(c in
            na[a])) na[a][c] = b[c]; else if ("object" == typeof b[c]) for (var d in b[c]) d in na[a][c] || (na[a][c][d] = b[c][d])
    };
    var u = function () {
        for (var a in na) "en" != a && g.tm(a);
        a = g.Ui("lang") || x.lang;
        "zh-cn" == a && (a = "zh");
        "pt-BR" == a && (a = "pt-br");
        return na[a] || na.en
    }();
    "HTMLCanvasElement" in D ? /ve(\/)?nt(\\)?us(\/)?ky\.com$|^localhost$/.test(location.hostname) ? function (a) {
        a && a.parentNode.removeChild(a)
    }(g.ge("no-js")) : D.open(Ma, "_top") : (B.body.className = "v", g.a("p", {
        innerHTML: u.mf,
        parent: B.body
    }), g.a("ul", {
        innerHTML: '\r\n      <li><a href="https://vivaldi.com/">Vivaldi</a>\r\n      <li><a href="https://www.palemoon.org/">Pale Moon</a>\r\n      <li><a href="https://www.opera.com/">Opera</a>\r\n    ',
        parent: B.body
    }));
    var z = {};
    z.form = g.ge("header");
    z.input = z.form.q;
    z.Ie = z.form.getElementsByTagName("ul")[0];
    z.Jg = z.Ie.getElementsByTagName("li")[0];
    z.pe = function () {
        z.form.onsubmit = function () {
            clearTimeout(b);
            z.send(!0);
            return !1
        };
        z.input.autocomplete = "off";
        var a = !0;
        z.input.id = z.input.parentNode.htmlFor = "search-q";
        z.input.onfocus = function () {
            z.form.className = "m";
            clearTimeout(z.Lh);
            z.show();
            this.value == this.defaultValue && (this.className = this.value = "");
            if (a) z.input.oninput();
            a = !1
        };
        z.input.onkeydown = function (a) {
            if (38 ==
                a.keyCode || 40 == a.keyCode) {
                var b = z.ie.length + 1;
                z.ie.active && (z.Ie.getElementsByTagName("a")[z.ie.active - 1].className = "");
                z.ie.active = (z.ie.active + a.keyCode - 39 + b) % b;
                z.ie.active && (z.Ie.getElementsByTagName("a")[z.ie.active - 1].className = "k");
                return !1
            }
        };
        z.Ie.className = "d";
        z.Ie.onmouseout = function () {
            z.ie.active && (z.Ie.getElementsByTagName("a")[z.ie.active - 1].className = "");
            z.ie.active = 0
        };
        z.input.onblur = function () {
            z.form.className = "";
            clearTimeout(b);
            "" == this.value.trim() && (this.value = this.defaultValue, this.className =
                "p");
            clearTimeout(z.Lh);
            z.Lh = setTimeout(z.sh, 200)
        };
        var b;
        z.input.oninput = function () {
            clearTimeout(b);
            !this.value.trim() && 0 < z.Zf.length ? (z.ie = z.Zf, z.ie.active = 0, z.ll()) : 2 > this.value.trim().length ? (z.Ie.insertBefore(z.Jg, z.Ie.firstChild), z.Jg.textContent = g.Od(u.cb, {length: 2})) : (this.value.trim() != z.ie.value && z.Ie.insertBefore(z.Jg, z.Ie.firstChild), z.Jg.textContent = g.Od(u.ab, {q: this.value}), b = setTimeout(function () {
                z.send()
            }, 400))
        };
        try {
            z.Zf = JSON.parse(localStorage.getItem("search") || "[]")
        } catch (c) {
        }
    };
    z.sh = function () {
        z.Ie.className = "d"
    };
    z.show = function () {
        z.Ie.className = ""
    };
    z.ie = [];
    z.Zf = [];
    z.$p = function () {
        try {
            localStorage.setItem("search", JSON.stringify(z.Zf))
        } catch (a) {
        }
    };
    z.Xn = function (a) {
        for (var b = 0; b < z.Zf.length; b++) if (z.Zf[b].lat == a.lat && z.Zf[b].lon == a.lon) return;
        z.Zf.unshift(a);
        5 < z.Zf.length && (z.Zf.length = 5);
        z.$p()
    };
    z.ll = function () {
        for (; z.Ie.firstChild;) z.Ie.removeChild(z.Ie.firstChild);
        if (z.ie.length) for (var a = 0; a < z.ie.length; a++) (function (a, c) {
            a = z.ie[c];
            var d = g.a("li");
            z.Ie.appendChild(d);
            var f = g.a("a");
            f.href = "?lat=" + a.lat + "&lon=" + a.lon;
            f.onclick = function () {
                z.sh();
                y.jl(+a.lat, +a.lon, r.textContent);
                h.ah(+a.lat, +a.lon, +a.zoom || 5);
                z.Xn(a);
                h.log("location", "search-result");
                return !1
            };
            f.onmouseover = function () {
                z.ie.active && (z.Ie.getElementsByTagName("a")[z.ie.active - 1].className = "");
                z.ie.active = c + 1;
                f.className = "k"
            };
            f.onfocus = function () {
                clearTimeout(z.Lh)
            };
            f.onblur = function () {
                clearTimeout(z.Lh);
                z.Lh = setTimeout(z.sh, 200)
            };
            d.appendChild(f);
            var d = g.a("h3"), r = g.a("b"), e = a.address[a.type] || a.address.city ||
                a.address.suburb || a.address.county || a.address.state;
            r.textContent = e || a.address.country || "?";
            e && (d.textContent = a.address.country ? ", " + a.address.country : " ");
            f.appendChild(d);
            d.insertBefore(r, d.firstChild);
            d = g.a("span");
            f.appendChild(d);
            d.textContent = g.Od(u.Ya, {
                lat: g.em(a.lat, !0),
                lon: g.fm(a.lon, !0),
                place: a.address.state || a.address.country || "N/A"
            })
        })(z.ie[a], a); else z.Ie.appendChild(z.Jg), z.Jg.textContent = u.$a
    };
    z.send = function (a) {
        function b(d, f) {
            clearTimeout(z.Um);
            if (c == z.input.value.trim()) {
                try {
                    var r =
                        JSON.parse(d || "[]")
                } catch (k) {
                    z.Jg.textContent = g.Od(u.ke, {q: c});
                    return
                }
                z.ie = r;
                z.ie.value = c;
                z.ie.active = 0;
                z.ie.length || f ? z.ll() : z.Um = setTimeout(function () {
                    z.Jg.textContent = g.Od(u.bb, {q: c});
                    h.log("searching-osm", c);
                    g.pf(g.Od("https://nominatim.openstreetmap.org/search?q={q}&format=json&polygon=0&addressdetails=1&limit=5&accept-language={lang}", {
                        q: encodeURIComponent(c),
                        lang: encodeURIComponent(u.code)
                    }), function (a) {
                        b(a, !0)
                    })
                }, a ? 20 : 750)
            }
        }

        var c = z.input.value.trim();
        if (!(2 > c.length)) if ("ventusky" == c.toLowerCase()) A.Fl =
            !0, y.close(), z.input.value = ""; else {
            if (/\d/.test(c)) {
                var d = c.replace(u.Z, "N").replace(u.Y, "S").replace(u.aa, "E").replace(u.$, "W").replace(/\s+/g, "").replace(/(\d+)\u00b0(?:(\d+)'(?:(\d+)(?:"|''))?)?/g, function (a, b, c, d) {
                    return (+b + (c / 60 || 0) + (d / 3600 || 0)).toPrecision(6)
                }).toUpperCase().match(/^([-+]?\d+(?:\.\d+)?)[,;]([-+]?\d+(?:\.\d+)?)$|^([NS]\d+(?:\.\d+))([WE]\d+(?:\.\d+))$|^(\d+(?:\.\d+)[NS])(\d+(?:[.]\d+)[WE])$/);
                if (d) {
                    var f, r;
                    d[1] && d[2] ? (f = parseFloat(d[1]), r = parseFloat(d[2])) : d[3] && d[4] ? (f = parseFloat(d[3].substr(1)) *
                        ("N" == d[3].charAt(0) ? 1 : -1), r = parseFloat(d[4].substr(1)) * ("E" == d[4].charAt(0) ? 1 : -1)) : d[5] && d[6] && (f = parseFloat(d[5].substr(0, d[5].length - 1)) * ("N" == d[5].charAt(d[5].length - 1) ? 1 : -1), r = parseFloat(d[6].substr(0, d[6].length - 1)) * ("E" == d[6].charAt(d[6].length - 1) ? 1 : -1));
                    isNaN(f) || isNaN(r) || (y.jl(f, r, ""), h.ah(f, r, 5));
                    y.close();
                    return
                }
            }
            clearTimeout(z.Um);
            h.log("searching", c);
            g.pf(g.Od(lb, {q: encodeURIComponent(c), lang: encodeURIComponent(u.code)}), function (a) {
                b(a, !1)
            })
        }
    };
    z.Zo = function () {
        var a = this;
        a.className =
            "r k";
        h.log("location", "geolocate");
        navigator.geolocation.getCurrentPosition(function (b) {
            a.className = "r";
            y.jl(b.coords.latitude, b.coords.longitude, u.Wa);
            h.ah(b.coords.latitude, b.coords.longitude, 7)
        }, function () {
            a.className = "r"
        })
    };
    navigator.geolocation && (z.geolocation = g.a("a", {className: "r", onclick: z.Zo, parent: z.form}));
    z.rg = function () {
        z.input.value == z.input.defaultValue && (z.input.value = u.ha, z.input.className = "p");
        z.input.defaultValue = u.ha;
        z.geolocation && (z.geolocation.title = u.Za);
        z.ll()
    };
    z.pe();
    var n =
        {};
    n.gc = (new Date(x.now)).getTimezoneOffset();
    n.ul = -k.ceil(n.gc / 60);
    n.kq = pa(-n.gc, 60);
    n.Bn = (new Date((new Date(x.now)).getFullYear(), 0, 1)).getTimezoneOffset() != n.gc;
    ta.vl = (new Date(x.now)).setUTCHours(0, n.gc, 0, 0);
    ta.Cn = (new Date(x.now)).setUTCHours(24, n.gc, 0, -1);
    n.pe = function () {
        n.Ho();
        n.Lo();
        n.Jo();
        n.Ko();
        var a = [];
        a.push(["auto", {
            toString: function () {
                var a = "auto" == h.ce ? n.Hn() : "";
                return u.O + (a ? " (" + a + ")" : "")
            }
        }]);
        a.push(["---global", {
            toString: function () {
                return u.Ua
            }
        }]);
        for (var b, c = 0; c < Y.length; c++) if (!K[Y[c]].hidden) {
            var d =
                K[Y[c]].xf;
            d && !b && (a.push(["---regional", {
                toString: function () {
                    return u.Va
                }
            }]), b = !0);
            a.push([Y[c], K[Y[c]].name + (d ? " (" + d + ")" : "")])
        }
        n.Fi({
            className: "l", label: {
                toString: function () {
                    return u.P
                }
            }, parent: B.body, select: !0, id: "model", options: a, mg: function (a) {
                h.$j(a)
            }, value: x.model
        });
        a = [];
        for (c = 0; c < qa.length; c++) a.push([qa[c], {
            value: qa[c], toString: function () {
                return u.W[this.value] || this.value
            }
        }]);
        F.link && a.push(["", {
            toString: function () {
                return u.X
            }
        }]);
        n.Fi({
            className: "h", label: {toString: n.Sn}, select: !0, parent: B.body,
            id: "wind-type", options: a, mg: function (a) {
                a ? h.ff(a) : (F.Th && h.ff(F.Th), F.ff || F.Fg())
            }, value: "normal"
        });
        for (var f in ma) {
            var a = [], c = 0, r;
            for (r in ma[f]) a.push([r, r]), c++;
            if (!(2 > c)) for (c = 0; c < a.length; c++) ma[f][a[c][0]].hj = a[(c + 1) % a.length][0]
        }
        B.addEventListener("keydown", function (a) {
            if ((("INPUT" != a.target.tagName || "text" != a.target.type) && "TEXTAREA" != a.target.tagName && "SELECT" != a.target.tagName || a.target.readOnly) && n.$f[a.keyCode]) return n.$f[a.keyCode](), !1
        }, !1);
        n.N = g.a("a", {className: "z x", parent: B.body});
        n.H = g.a("a", {className: "z b", parent: B.body});
        g.a("span", {
            id: "v", onclick: function () {
                n.K.className = n.K.className ? "" : "d"
            }, parent: n.ve.model.Hd
        });
        n.K = g.a(0, {
            id: "m", className: "d", children: [g.a(0), g.a("a", {
                className: "g", onclick: function () {
                    n.K.className = "d"
                }
            })], parent: B.body
        });
        n.Dn = g.a("span", {
            className: "s" + (h.df ? " c" : ""),
            id: "k",
            parent: B.body,
            children: ["", g.a("span", {
                onclick: function () {
                    h.df = !h.df;
                    F.on()
                }
            })]
        });
        n.$f[77] = function () {
            for (var a = [], b = 0; b < Y.length; b++) {
                var c = K[Y[b]].b[h.u];
                if (c) for (var d = +h.Vc,
                                f = 0; f < c.length; f++) if (d >= c[f].Zd && d <= c[f].timeEnd && 0 == d % c[f].$d) {
                    a.push(Y[b]);
                    break
                }
            }
            a = a[(a.indexOf(h.Cg()) + 1) % a.length];
            b = K[a].name;
            c = K.auto.b[h.u];
            d = +h.Vc;
            for (f = 0; f < c.length; f++) c[f].pg == a && d >= c[f].Zd && d <= c[f].timeEnd && 0 == d % c[f].$d && (b = u.O + " (" + b + ")", a = "auto");
            h.$j(a);
            n.ve.model.qf(a);
            n.Mg(u.P, b)
        };
        n.$f[80] = function () {
            var a = g.lq();
            n.Mg(u.Rq || "Presentation mode", a ? u.T : u.S)
        };
        y.pe()
    };
    n.Hn = function () {
        if ("auto" == h.ce) {
            m = [];
            for (var a = {}, b = 0; b < h.ze.length; b++) {
                var c = K[h.ze[b]].name;
                a[c] || (a[c] = !0, m.push(c))
            }
            return m.join("+")
        }
        return K[h.ce].name
    };
    n.rl = 10;
    n.An = 0;
    n.Lo = function () {
        function a(a, b) {
            var d = c.getBoundingClientRect(), d = k.min(k.max((b.clientX - d.left) / (d.right - d.left), 0), 1),
                f = new Date(864E5 * k.floor((h.Vc - 6E4 * n.gc) / 864E5) + 6E4 * n.gc + 6E4 * e[10 * k.round(d * U / 10)]),
                r = 60 * f.getUTCHours() + f.getUTCMinutes();
            a.style.left = (100 * d).toFixed(3) + "%";
            f.setUTCHours(n.ul, k.round(r / n.rl) * n.rl);
            a.setAttribute("time", f.format(u.Pe))
        }

        var b = g.a(0, {id: "d", parent: B.body});
        n.Td = {};
        n.Td.Hd = b;
        n.Td.play = g.a("a", {
            className: "q t", children: ["", g.a("span")], onclick: function () {
                n.hi ?
                    n.stop(!0) : n.play()
            }, parent: b
        });
        n.Td.dn = g.a("a", {
            className: "q w", onclick: function () {
                n.stop();
                for (var a = K[h.ce].b[h.u], b = +h.Vc, c = b, d = !1, e = 0; e < a.length; e++) if (c = b - a[e].$d, c >= a[e].Zd && c <= a[e].timeEnd) {
                    d = !0;
                    break
                }
                d && h.ng(c)
            }, children: ["", g.a("span")], parent: b
        });
        n.Td.next = g.a("a", {
            className: "q e", onclick: function () {
                n.stop();
                for (var a = K[h.ce].b[h.u], b = +h.Vc, c = b, d = !1, e = 0; e < a.length; e++) if (c = b + a[e].$d, c >= a[e].Zd && c <= a[e].timeEnd) {
                    d = !0;
                    break
                }
                d && h.ng(c)
            }, children: ["", g.a("span")], parent: b
        });
        n.$f[37] = function () {
            n.Td.dn.onclick();
            n.Mg((new Date(h.Vc - 6E4 * n.gc)).format(u.Pe) + " \u2039\u2013")
        };
        n.$f[39] = function () {
            n.Td.next.onclick();
            n.Mg("\u2013\u203a " + (new Date(h.Vc - 6E4 * n.gc)).format(u.Pe))
        };
        n.Td.day = g.a("a", {
            className: "q j", children: ["", g.a("span")], onclick: function () {
                n.stop();
                n.Vf.className = n.Vf.className ? "" : "d"
            }, parent: b
        });
        n.Td.now = g.a("a", {
            className: "q f", style: "display: none", children: [""], onclick: function () {
                n.stop();
                h.ng(new Date(x.now))
            }, parent: b
        });
        var c = g.a("span", {
            className: "y", onclick: function (a) {
                n.stop();
                var b = this.getBoundingClientRect();
                a = 10 * k.round(k.min(k.max((a.clientX - b.left) / (b.right - b.left), 0), 1) * U / 10);
                h.ng(864E5 * k.floor((h.Vc - 6E4 * n.gc) / 864E5) + 6E4 * n.gc + 6E4 * e[a])
            }, onmousemove: function (b) {
                a(n.Td.yk, b)
            }, parent: b
        });
        Ia(c, function (b) {
            function d(b) {
                a(n.Td.hour, b)
            }

            n.Td.hour.className = "o a";
            n.Td.yk.style.display = "none";
            d(b);
            return {
                Ch: d, Dh: function (a) {
                    c.onclick(a);
                    n.Td.yk.style.display = ""
                }
            }
        });
        for (var d = [], f = 0; 1440 > f; f += 10) {
            var r = pa(f + 60 * n.ul, 1440);
            d[r] = g.a("a", {
                innerHTML: String(r).Ce(2, "0"),
                style: "left: " + (100 * r / 1430).toFixed(3) + "%",
                className: "n " + (f % 60 ? "dv" : "my") + " " + (f % 180 ? "cj" : "ha") + " " + (f % 360 ? "lp" : "bx") + " " + (f % 720 ? "rw" : "bm"),
                parent: c
            })
        }
        var e = {}, U = 1380;
        n.pq = function () {
            function a(b, c) {
                for (var d = k.max(b, 0), f = k.min(c, 1440); d <= f; d += 10) e[d] = d - b < c - d ? b : c
            }

            e = {};
            U = 1380;
            for (var b = (new Date(h.Vc - 6E4 * n.gc)).setUTCHours(0, n.gc + n.kq, 0, 0), c = 60, f = -c, r = K[h.ce].b[h.u], g = -Infinity, l = 0; 1440 > l; l += 10) {
                var ca = b + 6E4 * l;
                d[l].innerHTML = n.Nf((new Date(ca - 6E4 * n.gc)).format(u.Ng));
                for (var C = !1, q = 0; q < r.length; q++) if (ca >= r[q].Zd && ca <= r[q].timeEnd && 0 == ca %
                    r[q].$d) {
                    c = k.min(l - f, c);
                    f = l;
                    C = !0;
                    a(g, l);
                    g = l;
                    break
                }
                d[l].style.display = C ? "" : "none"
            }
            a(g, Infinity);
            g > U && (U = g);
            n.rl = c;
            for (l = n.An = 0; 1440 > l; l += 10) d[l].style.left = (100 * (l - n.An) / U).toFixed(3) + "%";
            b = 60 * h.Vc.getUTCHours() + h.Vc.getUTCMinutes();
            n.Td.hour.className = "o n " + (b % 60 ? "dv" : "my") + " " + (b % 180 ? "cj" : "ha") + " " + (b % 360 ? "lp" : "bx") + " " + (b % 720 ? "rw" : "bm");
            n.Td.hour.style.left = (100 / U * pa(b + 60 * n.ul, 1440)).toFixed(3) + "%"
        };
        n.Td.hour = g.a("span", {className: "o", parent: c});
        n.Td.yk = g.a("span", {className: "ks", parent: c});
        n.Vf =
            g.a(0, {id: "p", className: "d", parent: b});
        n.gm({
            id: "date", className: "ls", mg: function (a) {
                n.stop();
                a = new Date(+a + 6E4 * n.gc);
                a.setUTCMilliseconds((h.Vc - 6E4 * n.gc) % 864E5);
                h.ng(a)
            }, parent: b
        });
        n.gm({
            id: "hour", className: "rg", mg: function (a) {
                h.ng(a)
            }, parent: b
        })
    };
    n.Nf = function (a) {
        return a.replace(/\[([^\]]+)\]/g, "<small>$1</small>").replace(/\(([^\)]+)\)/g, "<sup>$1</sup>").replace(/\|/g, "<br>")
    };
    n.Sn = function () {
        var a = Fa[l.B].kind;
        return "wave" == a ? u.xa : "currents" == a ? u.Oi : u.ic
    };
    n.Jq = {};
    n.oo = function () {
        for (var a = K[h.ce].b[h.u],
                 b = (new Date).getTime(), c = 0, d = 0; d < a.length; d++) a[d].lk || (b = k.min(b, a[d].Zd), c = k.max(c, a[d].timeEnd));
        b = k.max(b, (new Date(x.now)).setUTCSeconds(-259200));
        b = new Date(b - 6E4 * n.gc);
        b.setUTCHours(0, 0, 0, 0);
        for (var d = +b, c = +new Date(c - 6E4 * n.gc), f = (new Date(new Date - 6E4 * n.gc)).setUTCHours(0, 0, 0, 0), r = [], e = -1, g = d; g <= c; g += 864E5) {
            var b = new Date(g), Z = b.getUTCMonth(), I = "";
            e != Z && (-1 < e && (I = "qw"), e = Z);
            +b == f && (I += " bj");
            r.push([g, b.format(u.Ra), I])
        }
        n.kh.date.qn(r);
        f = [];
        r = -1;
        e = aa[h.u].Bg ? u.ql : u.Og;
        for (g = d; g <= c; g += 6E5) for (b =
                                               new Date(g - 6E4 * n.gc), I = "", d = b.getUTCDate(), r != d && (-1 < r && (I = "qw"), r = d), d = 0; d < a.length; d++) if (!a[d].lk && g >= a[d].Zd && g <= a[d].timeEnd && 0 == g % a[d].$d) {
            f.push([g, b.format(e), I]);
            break
        }
        n.kh.hour.qn(f)
    };
    n.Wk = function (a, b, c, d) {
        for (var f = u.M; a.rows[1];) a.deleteRow(1);
        var r = a.insertRow(-1), e = new Date(+b);
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() - f + 7) % 7);
        var k = (new Date(new Date - 6E4 * n.gc)).setUTCHours(0, 0, 0, 0), Z = new Date(+c);
        Z.setUTCHours(0, 0, 0, 0);
        Z.setUTCDate(Z.getUTCDate() + 7 - (Z.getUTCDay() - f + 7) % 7);
        for (var I =
            (new Date(new Date - 6E4 * n.gc)).getUTCFullYear(); e < Z;) {
            e.getUTCDay() == f && (r = a.insertRow(-1));
            var G = g.a("td", {parent: r}), l = e.format("dd");
            e >= b && e <= c ? (l = g.a("a", {
                textContent: l, parent: G, onclick: function (a) {
                    return function () {
                        n.stop();
                        var b = new Date(+a + 6E4 * n.gc);
                        b.setUTCMilliseconds((h.Vc - 6E4 * n.gc) % 864E5);
                        h.ng(b);
                        return !1
                    }
                }(new Date(e))
            }), e.format("yyyyMMdd") == d && (l.className = "c")) : l = g.a("span", {textContent: l, parent: G});
            +e == k && (G.className = "bj");
            var l = e.getUTCMonth(), q = e.format(e.getUTCFullYear() != I ? "MMM 'yy" :
                "MMMM");
            e.setUTCHours(24);
            l != e.getUTCMonth() && (G.className += " nk", r.className += " nk", g.a("i", {
                textContent: q,
                parent: r.cells[0]
            }))
        }
    };
    n.Vj = function () {
        function a() {
            l || -1 != G || (G = e.getUTCMonth());
            for (var a = 0; v.firstChild;) v.removeChild(v.firstChild);
            U.length = Z.length = 0;
            var b = new Date(k.max(Date.UTC(I, 0, 1, 0), c - 6E4 * n.gc)),
                d = new Date(k.min(Date.UTC(I + 1, 0, 1, 0) - 1, +r));
            b.setUTCDate(1);
            for (b.setUTCHours(0, 0, 0, 0); b < d;) G == b.getUTCMonth() && (a = U.length), g.a("option", {
                parent: v, value: b.getUTCMonth(), textContent: b.format("MMMM"),
                selected: G == b.getUTCMonth()
            }), U.push(+b), b.setUTCMonth(b.getUTCMonth() + 1), Z.push(+b - 1);
            l && (-1 == G && (a = U.length), g.a("option", {
                parent: v,
                value: -1,
                textContent: u.Pa,
                selected: -1 == G
            }), U.push(+r), Z.push(+e));
            n.Wk(T, U[a], Z[a])
        }

        for (var b = K[h.ce].b[h.u], c = (new Date).getTime(), d = 0, f = 0; f < b.length; f++) b[f].lk || (c = k.min(c, b[f].Zd), d = k.max(d, b[f].timeEnd));
        b = u.M;
        f = new Date(+ob);
        f.setUTCDate(f.getUTCDate() - (f.getUTCDay() - b + 7) % 7);
        var r = new Date(k.max(c, +f) - 6E4 * n.gc);
        r.setUTCHours(0, 0, 0, 0);
        var e = new Date(d - 6E4 * n.gc);
        for (n.oo(); n.Vf.firstChild;) n.Vf.removeChild(n.Vf.firstChild);
        g.a("a", {
            className: "g", onclick: function () {
                n.Vf.className = "d"
            }, parent: n.Vf
        });
        for (var U = [], Z = [], I = e.getUTCFullYear(), G = -1, l = !0, q = g.a("select", {
                parent: n.Vf,
                id: "r",
                onchange: function () {
                    I = +this.value;
                    l = I == r.getUTCFullYear() || I == e.getUTCFullYear();
                    var b = new Date(+h.Vc);
                    b.setUTCFullYear(I);
                    b < r ? a() : h.ng(b)
                }
            }), v = g.a("select", {
                parent: n.Vf, id: "l", onchange: function () {
                    G = +this.value;
                    var a = this.selectedIndex;
                    n.Wk(T, U[a], Z[a])
                }
            }), T = g.a("table", {parent: n.Vf}),
                 d = T.insertRow(-1), f = 0; 7 > f; f++) g.a("th", {
            textContent: (u.fe || [])[(f + b) % 7] || u.I[(f + b) % 7].slice(0, 2),
            parent: d
        });
        (function () {
            for (; q.firstChild;) q.removeChild(q.firstChild);
            for (var b = e.getFullYear(), d = (new Date(c - 6E4 * n.gc)).getUTCFullYear(); d <= b; d++) g.a("option", {
                parent: q,
                value: d,
                textContent: d,
                selected: I == d
            });
            a()
        })();
        n.Ul = function (b) {
            I = q.value = b.getUTCFullYear();
            l = I == r.getUTCFullYear() || I == e.getUTCFullYear();
            a();
            for (var c = 0; c < U.length && !(+b < U[c]); c++) ;
            c--;
            n.Wk(T, U[c], Z[c], b.format("yyyyMMdd"));
            v.value =
                l && c == U.length - 1 ? -1 : b.getUTCMonth()
        }
    };
    n.He = function () {
        var a = new Date(new Date - 6E4 * n.gc), b = new Date(h.Vc - 6E4 * n.gc);
        n.Td.hour.setAttribute("time", b.format(u.Pe));
        a = a.setUTCHours(0, 0, 0, 0) == b.setUTCHours(0, 0, 0, 0);
        n.Td.day.childNodes[1].textContent = a ? u.fc + ", " + b.format(u.J) : b.format("dddd, " + u.J);
        setTimeout(n.Uo, 100);
        n.Ul && n.Ul(b);
        n.kh.date.qf(864E5 * k.floor(b / 864E5));
        n.kh.hour.qf(+h.Vc);
        n.pq();
        n.Td.now.style.display = +h.Vc < ta.vl ? "" : "none";
        n.$k();
        n.b.wj()
    };
    n.$k = function () {
        for (var a = [], b = {}, c = 0; c < h.ze.length; c++) {
            var b =
                    h.ze[c], d = K[b].Md[h.u].Jd || K[b].Jd, f = K[b].Md[h.u].Pd || K[b].Pd,
                r = (K[b].Md[h.u].size || K[b].size).te, e;
            if ("string" == typeof e) e = '<a href="' + K[b].ne + '" target="_blank">' + K[b].source + "</a>"; else {
                e = [];
                for (c = 0; c < K[b].source.length; c++) e.push('<a href="' + K[b].ne[c] + '" target="_blank">' + K[b].source[c] + "</a>");
                e = e.join(", ")
            }
            var b = {
                model: K[b].name,
                resolution: r,
                updated: (new Date(+d)).format(u.Pe) + " UTC",
                next: (new Date(+d + 6E4 * f)).format(u.Pe) + " UTC",
                time: (new Date(h.Vc - 6E4 * n.gc)).format(u.Pe + ", " + u.J),
                altitude: "",
                zone: g.timeZone(n.gc, n.Bn),
                source: e
            };
            a.push(g.Od(u.K, b))
        }
        c = aa[h.u].description;
        aa[h.u].Xi && (b.sublayer = b.accumulation = b.altitude = n.xk(h.u));
        a.push(g.Od(u.kf[c], b));
        n.K.firstChild.innerHTML = "<p>" + a.join("<p>").replace(/\n\n+/g, "<p>").replace(/\n/g, "<br>")
    };
    n.ve = {};
    n.no = function (a, b) {
        return g.a("select", {
            onchange: function () {
                b(this.value)
            }, onkeyup: function () {
                this.onchange()
            }, onfocus: function () {
                B.documentElement.onmouseenter = function () {
                    B.documentElement.className = ""
                };
                B.documentElement.onmouseleave = function () {
                    B.documentElement.className =
                        "qj"
                }
            }, onblur: function () {
                B.documentElement.onmouseenter = B.documentElement.onmouseleave = null;
                B.documentElement.className = ""
            }, parent: a
        })
    };
    n.Fi = function (a) {
        var b = "hv " + a.className + (a.select ? " bb" : ""), c = g.a(0, {className: b, parent: a.parent});
        if (a.label) var d = g.a(0, {className: "xx", innerHTML: a.label + ":", parent: c});
        for (var f = g.a(0, {className: "yn", parent: c}), r, e = {}, k = 0; k < a.options.length; k++) {
            var h = a.options[k][0], I = g.a("a", {
                textContent: g.Nh(a.options[k][1]), value: h, onclick: function (b) {
                    if (G && b || "disabled" ==
                        this.getAttribute("disabled")) return !1;
                    n.stop();
                    r && (r.className = "");
                    r = this;
                    r.className = "c";
                    a.mg(this.value)
                }, parent: f
            });
            e[h] = I;
            a.value == h && (r = I, r.className = "c")
        }
        if (a.select) {
            var G = n.no(f, function (a) {
                e[a].onclick.call(e[a])
            });
            G.optionsMap = {};
            for (k = 0; k < a.options.length; k++) G.optionsMap[a.options[k][0]] = "---" == a.options[k][0].slice(0, 3) ? g.a("optgroup", {
                label: g.Nh(a.options[k][1]),
                parent: G
            }) : g.a("option", {
                value: a.options[k][0],
                textContent: g.Nh(a.options[k][1]),
                style: a.options[k][2] ? "font-weight: bold" :
                    "",
                parent: G
            });
            G.value = a.value
        }
        a.id && (n.ve[a.id] = {
            qf: function (a) {
                e[a] && (r && (r.className = ""), G && (G.value = a), r = e[a], r.className = "c")
            }, sh: function () {
                c.style.display = "none"
            }, show: function () {
                c.style.display = ""
            }, refresh: function () {
                for (var b = 0; b < a.options.length; b++) e[a.options[b][0]].textContent = g.Nh(a.options[b][1]);
                a.label && (d.innerHTML = a.label + ":");
                if (G) for (b = 0; b < a.options.length; b++) G.optionsMap[a.options[b][0]]["---" == a.options[b][0].slice(0, 3) ? "label" : "textContent"] = g.Nh(a.options[b][1])
            }, move: function (a) {
                a.appendChild(c)
            },
            cq: function (a) {
                c.className = b + " " + a
            }, Hd: c, options: e, select: G
        }, null === a.value && (c.style.display = "none"))
    };
    n.Jo = function () {
        n.Dp = g.a("span", {
            className: "dm",
            children: [g.a("span", {className: "tz"}), g.a("span", {className: "jh"}), g.a("span", {className: "ua"})],
            parent: B.body
        })
    };
    n.xi = function () {
        n.Dp.style.display = l.Pf || q.Pf ? "block" : "";
        if (!q.Pf && E.ui) {
            var a = E.Hh / E.ui;
            E.uj = a > E.uj ? (a + E.uj) / 2 : a;
            E.Hh = E.ui = 0
        }
    };
    n.Ho = function () {
        for (var a = g.a(0, {
                id: "i", parent: B.body, onclick: function () {
                    "xz" == a.className && (a.className = "")
                }
            }),
                 b = {}, c = {}, d = [], f = [], r = 0; r < la.length; r++) (function (e) {
            function r() {
                h.Ph(k) && n.stop();
                return !1
            }

            var k = e.id;
            e.f && (r = function () {
                n.stop();
                if (aa[h.u].Xi == e.kind) for (var a = 0; a < e.f.length; a++) if (e.f[a].yc == aa[h.u].yc && h.Ph(e.f[a].id)) return !1;
                if (e.Hg && h.Ph(e.Hg)) return !1;
                for (a = 0; a < e.f.length; a++) if (h.Ph(e.f[a].id)) return !1
            });
            b[k] = g.a("a", {
                onclick: function (b) {
                    k == aa[h.u].group && "xz" != a.className ? a.className = "xz" : (a.className = "", r());
                    b.stopPropagation()
                }, children: ["", g.a("span", {className: k})], parent: a
            });
            f.push([k,
                {
                    label: k, toString: function () {
                        return u.b[this.label] || "[" + this.label + "]"
                    }
                }]);
            c[k] = g.a(0, {parent: a});
            if (e.f) {
                d.push(k);
                for (var G = [], l = 0; l < e.f.length; l++) G.push([e.f[l].id, {
                    id: e.f[l].id, toString: function () {
                        return n.xk(this.id)
                    }
                }, e.f[l].Sf]);
                n.Fi({
                    className: "nx", label: {
                        label: e.kind, toString: function () {
                            return u.$b[this.label] || "[" + this.label + "]"
                        }
                    }, select: !0, parent: c[k], id: "sublayer-" + k, options: G, mg: function (a) {
                        n.stop();
                        h.Ph(a)
                    }
                })
            }
        })(la[r]);
        var e = b[aa[h.u].group];
        e.className = "c";
        n.Fi({
            className: "xn", select: !0,
            parent: a, id: "layers", options: f, mg: function (a) {
                return b[a].onclick()
            }, value: aa[h.u].group
        });
        n.b = {
            translate: function () {
                for (var c = 0; c < la.length; c++) b[la[c].id].firstChild.data = u.b[la[c].id] || "[" + la[c].id + "]";
                a.setAttribute("data-title", u.Ek || "[layersTitle]")
            }, update: function () {
                var a = K[h.ce], c = +h.Vc, f = [], r;
                for (r in a.b) for (var g = a.b[r], k = 0; k < g.length; k++) if (c >= g[k].Zd && c <= g[k].timeEnd) {
                    f[r] || (f[r] = !0);
                    break
                }
                g = aa[h.u].group;
                for (c = 0; c < la.length; c++) {
                    var l = !1, k = la[c].id;
                    if (la[c].f) for (r = 0; r < la[c].f.length &&
                    !l; r++) a.b[la[c].f[r].id] && f[la[c].f[r].id] && (l = !0); else l = a.b[k] && f[k];
                    l ? b[k].removeAttribute("disabled") : b[k].setAttribute("disabled", "disabled")
                }
                for (c = 0; c < d.length; c++) if (a = n.ve["sublayer-" + d[c]], d[c] == g) for (a.show(), a.qf(h.u), a = a.select, r = 0; r < Ga.length; r++) Ga[r].group == g && (k = Ga[r].id, !K[h.ce].b[k] || f && !f[k] ? a.optionsMap[k].parentNode && a.removeChild(a.optionsMap[k]) : a.appendChild(a.optionsMap[k])); else a.sh();
                e.className = "";
                e = b[g];
                e.className = "c";
                n.ve.layers.qf(g);
                a = n.ve.model.select;
                n.ve.model.refresh();
                for (var q, c = 0; c < Y.length; c++) if (f = K[Y[c]], !f.hidden) {
                    g = f.b[h.u];
                    f = +h.Vc;
                    r = !1;
                    if (g) for (k = 0; k < g.length; k++) if (f >= g[k].Zd && f <= g[k].timeEnd) {
                        (f = K[Y[c]].xf) && !q && (a.appendChild(a.optionsMap["---regional"]), q = !0);
                        a.optionsMap[f ? "---regional" : "---global"].appendChild(a.optionsMap[Y[c]]);
                        r = !0;
                        break
                    }
                    0 == r && a.optionsMap[Y[c]].parentNode && a.optionsMap[Y[c]].parentNode.removeChild(a.optionsMap[Y[c]])
                }
                !q && a.optionsMap["---regional"].parentNode && a.removeChild(a.optionsMap["---regional"])
            }, wj: function () {
                var a = "";
                q.j && q.j.h && h.units[q.j.h] && (a = h.units[q.j.h] + ", ");
                e.setAttribute("info", a + n.Hn())
            }
        }
    };
    n.xk = function (a) {
        if (!aa[a].ki) return u.f[aa[a].label] || "[" + aa[a].label + "]";
        var b = K["auto" == h.ce && 1 == h.ze.length ? h.ze[0] : h.Cg()];
        return b ? g.Od(u.f[aa[a].label], {time: (new Date((b.Md[a] && b.Md[a].start || b.start) - 6E4 * n.gc)).format(u.Qa + " " + u.Pe)}) : "?"
    };
    n.nk = {};
    n.Uo = function () {
        var a = n.Td.day.childNodes[1], b = a.firstChild.data;
        if (b in n.nk) a.style.letterSpacing = n.nk[b]; else {
            a.style.letterSpacing = "";
            var c = a.offsetWidth -
                12 - a.offsetHeight;
            a.style.width = 0;
            var d = a.scrollWidth;
            a.style.width = "";
            var f = b.length;
            n.nk[b] = c < d ? a.style.letterSpacing = ((c - d) / f).toFixed(3) + "px" : ""
        }
    };
    n.rg = function () {
        n.b.translate();
        n.Td.play.firstChild.data = n.hi ? u.wa : u.va;
        n.Td.dn.firstChild.data = u.ec;
        n.Td.next.firstChild.data = u.dc;
        n.Td.day.firstChild.data = u.cc;
        n.Td.now.firstChild.data = u.ld;
        n.Vj();
        n.N.title = u.N;
        n.H.title = u.H;
        var a = pb[u.U ? "metric" : "imperial"], b;
        for (b in a) h.units[b] != a[b] && (h.ak(b, a[b]), q.j && q.j.h == b && n.ve[b] && n.ve[b].qf(a[b]));
        var a =
            g.ge("menu-about"), c = g.ge("menu-app");
        a && (a.firstChild.data = u.ea);
        c && (c.firstChild.data = u.uf);
        n.He();
        for (b in n.ve) n.ve[b].refresh();
        n.Dn.firstChild.data = u.V
    };
    n.translate = function (a) {
        na[a].file ? g.pf(eb + "lang-" + a + ".js?v=1674656439229", function (b) {
            na[a] = eval("(" + b + ")");
            g.tm(a);
            n.translate(a)
        }) : u = na[a];
        z.rg();
        n.rg();
        F.rg();
        A.rg();
        v.rg()
    };
    n.play = function () {
        function a() {
            function d() {
                n.hi && (h.ng(c), n.Ym = setTimeout(a, 200))
            }

            for (var f, r, e = c, g = !1, l = 0; l < b.length; l++) if (c = e + b[l].$d, c >= b[l].Zd && c <= b[l].timeEnd) {
                c =
                    k.floor((c - b[l].Zd) / b[l].$d) * b[l].$d + b[l].Zd;
                g = !0;
                break
            }
            if (!g) return n.stop();
            q.ii(c, function () {
                f = !0;
                r && d()
            });
            n.Ym = setTimeout(function () {
                r = !0;
                f && d()
            }, 800)
        }

        n.hi = !0;
        n.Td.play.className = "q ll";
        n.Td.play.firstChild.data = u.wa;
        var b = K[h.ce].b[h.u].slice(0), c = +h.Vc;
        b.sort(function (a, b) {
            return a.$d - b.$d
        });
        a();
        h.log("animation", "play")
    };
    n.stop = function (a) {
        n.hi && (n.hi = !1, n.Td.play.className = "q t", n.Td.play.firstChild.data = u.va, clearTimeout(n.Ym), h.log("animation", a ? "manual-stop" : "auto-stop"))
    };
    n.$f = {};
    n.Mg =
        function (a, b) {
            var c = b ? a + ": <b>" + b + "</b>" : a;
            n.aj ? n.aj.innerHTML = c : n.aj = g.a(0, {className: "zg", innerHTML: c, parent: B.body});
            clearTimeout(n.pp);
            n.pp = setTimeout(function () {
                B.body.removeChild(n.aj);
                delete n.aj
            }, 1750)
        };
    n.Ko = function () {
        var a = 1 * g.Of("visit") || 0;
        g.yf("visit", ++a);
        var b = g.ge("news");
        if (b) {
            var c = b.getAttribute("data-news");
            2 > a || g.Of("news") == c ? b.parentNode.removeChild(b) : (b.style.display = "block", g.a(0, {
                className: "g",
                parent: b
            }), b.onclick = function () {
                b.className = "d"
            }, g.yf("news", c))
        }
    };
    n.kh = {};
    n.Jf =
        k.ceil(D.innerWidth / 100 * 16);
    D.addEventListener("resize", function () {
        n.Jf = k.ceil(D.innerWidth / 100 * 16);
        for (var a in n.kh) n.kh[a].resize()
    }, !1);
    n.gm = function (a) {
        function b(a) {
            var b = n.Jf, c = b / D.innerWidth, c = k.atan(c) / k.PI * 2 / c * c * k.PI, d = b / 2 / k.tan(c / 2),
                f = e.scrollLeft;
            g.setTransform(r, "translateX(" + -e.scrollLeft + "px)");
            var h = k.round(-k.PI / 2 / c + f / b);
            if (h != P || a) {
                for (a = 0; 10 > a; a++) {
                    var U = Z[a + h] && I[Z[a + h]] || {Bm: "&nbsp;", className: ""};
                    G[a].innerHTML = U.Bm;
                    G[a].className = U.className
                }
                P = h
            }
            for (a = 0; 10 > a; a++) {
                var l = (a + h) *
                    b, U = (l - f) * c / b / 1.5;
                if (U < -k.PI / 2 || U > k.PI / 2) U = k.PI / 2;
                var q = G[a];
                g.setTransform(q, "translateX(" + (-(a * b - (f + k.sin(U) * d * 1.5))).toFixed(3) + "px) rotateY(" + U.toFixed(3) + "rad)");
                (l = k.abs(l - f) < b / 2) && (p = Z[a + h]);
                q.style.background = l ? "rgba(247, 167, 21, " + k.cos(10 * U).toFixed(3) + ")" : "rgba(0, 0, 0, " + (1 - k.cos(U)).toFixed(3) + ")";
                q.style.color = l ? "" : "rgba(255, 255, 255, " + k.cos(U).toFixed(3) + ")"
            }
        }

        function c(a) {
            var b = e.onscroll;
            e.onscroll = null;
            e.scrollLeft = a;
            e.onscroll = b
        }

        function d() {
            if (!T && !ca && (l.paused = !1, p != w)) {
                var c =
                    Z.indexOf(p);
                if (-1 < c) {
                    var d = c * n.Jf - e.scrollLeft, f = e.scrollLeft, r = 500 * k.abs(c - e.scrollLeft / n.Jf),
                        g = Date.now();
                    l.paused = !0;
                    var h = e.onscroll;
                    e.onscroll = null;
                    var U = setInterval(function () {
                        var c = (Date.now() - g) / r;
                        1 < c && (c = 1, clearInterval(U), l.paused = !1, e.onscroll = h, a.mg(p));
                        e.scrollLeft = f + d * c;
                        b()
                    }, 13);
                    w = p
                }
            }
        }

        var f = g.a(0, {className: "ja " + (a.className || ""), parent: a.parent}), r = g.a("ul", {parent: f});
        try {
            f.addEventListener("touchmove", function (a) {
                a.stopPropagation();
                return !0
            }, !1)
        } catch (h) {
        }
        for (var e = g.a(0, {
            className: "jz",
            parent: f
        }), U = g.a(0, {parent: e}), Z = [], I = {}, G = [], q = 0; 10 > q; q++) G.push(g.a("li", {
            innerHTML: "&nbsp;",
            style: "width: " + n.Jf + "px",
            parent: r
        }));
        var u, v = 0, T = !1, ca = !1;
        e.ontouchstart = function (a) {
            v++;
            T = !0;
            l.paused = !0;
            a.stopPropagation()
        };
        e.ontouchend = function () {
            v--;
            v || (T = !1, d());
            clearInterval(C)
        };
        var C;
        e.ontouchcancel = function () {
            clearInterval(C);
            C = setInterval(function () {
                var a = e.scrollLeft;
                c(a ? a - 1 : a + 1);
                e.scrollLeft != a && (clearInterval(C), T = !1, d());
                c(a)
            }, 200)
        };
        var p, w;
        e.onscroll = function () {
            l.paused = !0;
            b();
            clearTimeout(u);
            ca = !0;
            u = setTimeout(function () {
                ca = !1;
                d()
            }, 500)
        };
        e.onclick = function (a) {
            var b = Z.indexOf(p);
            a.clientX > D.innerWidth / 2 ? b++ : b--;
            Z[b] && (p = Z[b], d())
        };
        var P;
        n.kh[a.id] = {
            qn: function (a) {
                Z.length = 0;
                I = {};
                for (var d = 0, e = 0; e < a.length; e++) I[a[e][0]] = {
                    Bm: n.Nf(a[e][1]),
                    className: a[e][2]
                }, Z.push(a[e][0]), a[e][0] == p && (d = e);
                U.style.width = Z.length * n.Jf + (D.innerWidth - n.Jf) + "px";
                c(d * n.Jf);
                b(!0)
            }, qf: function (a) {
                var d = Z.indexOf(a);
                -1 < d && (p = a, c(d * n.Jf), b(!0))
            }, resize: function () {
                if (f.offsetWidth) {
                    for (var a = 0; 10 > a; a++) G[a].style.width =
                        n.Jf + "px";
                    U.style.width = Z.length * n.Jf + (D.innerWidth - n.Jf) + "px";
                    this.qf(p)
                }
            }
        }
    };
    var F = {
        pe: function () {
            var a = B.getElementsByTagName("menu")[0];
            if (a) {
                F.link = g.a("a", {
                    textContent: u.c, onclick: function () {
                        F.Fg();
                        return !1
                    }
                });
                var b = g.a("li", {id: "menu-settings", children: [F.link]});
                a.insertBefore(b, a.firstChild);
                setInterval(function () {
                    var a = 4 * l.ej / 3;
                    l.ej = 0;
                    if (l.c && !(l.c.Pk || l.paused || h.paused)) {
                        var b = F.performance;
                        b.unshift(a);
                        b.length = 51;
                        F.gi && (B.title = "[" + k.round(b[0] + b[1] + b[2]) + "fps] " + B.title.replace(/^\[\d+fps\]/,
                            ""))
                    }
                    F.pj && F.pj()
                }, 250);
                n.$f[87] = function () {
                    "off" == h.Ue ? h.ff(h.ci) : h.ff("off");
                    n.Mg(n.Sn(), u.W[h.Ue] || u.X)
                };
                n.$f[71] = function () {
                    h.fg = !h.fg;
                    F.pn();
                    n.Mg(u.ka, h.fg ? u.T : u.S)
                };
                n.$f[70] = function () {
                    F.Wl();
                    n.Mg("FPS", F.gi ? u.T : u.S)
                }
            }
        }, performance: [0, 0, 0, 0], pn: function () {
            h.log("settings", "grid-" + (h.fg ? "on" : "off"));
            g.yf("grid", h.fg ? "1" : "0");
            q.Ae()
        }, fq: function () {
            h.log("settings", "pressures-" + (h.Eh ? "on" : "off"));
            g.yf("pressures", h.Eh ? "1" : "0");
            v.Ye()
        }, on: function () {
            h.df ? v.Ae() : v.Ye();
            h.log("settings", "cams-" + (h.df ?
                "on" : "off"));
            n.Dn.className = "s" + (h.df ? " c" : "");
            g.yf("cams", h.df ? "1" : "0")
        }, Wj: function (a) {
            for (var b = g.a(0, {
                id: a.id,
                className: "section",
                children: [g.a(0, {
                    className: "section_header clearfix",
                    children: [g.a("h2", {className: "", textContent: a.title})]
                }), g.a(0, {className: "clanek", children: [g.a("img", {src: a.cf}), g.a("p", {textContent: a.ml})]})],
                parent: a.parent
            }), b = g.a(0, {className: "resp_table", parent: b}), c = g.a(0, {
                className: "resp_table_inner",
                parent: b
            }), d = 0; d < a.rows.length; d++) {
                var f = g.a(a.rows[d].label ? "label" :
                    "div", {className: "resp_table_row " + (a.rows[d].className || ""), parent: c});
                g.a(0, {className: "resp_table_cell cell1", textContent: a.rows[d].Ke + ":", parent: f});
                g.a(0, {className: "resp_table_cell cell2", children: a.rows[d].content, parent: f})
            }
            return b
        }, Bh: function () {
            F.ff = null;
            delete F.pj
        }, gi: !1, Wl: function () {
            F.gi = !F.gi;
            F.gi || (B.title = B.title.replace(/^\[\d+fps\]/, ""))
        }, mo: function (a) {
            var b = g.a("canvas", {title: u.je, width: 140, height: 21, className: "rc", onclick: F.Wl});
            a.insertBefore(b, a.firstChild);
            var c = b.getContext("2d");
            c.strokeStyle = "#BBB";
            c.textBaseline = "middle";
            c.font = "10px 'Consolas', 'Lucida Console', 'Courier New', monospace";
            var d = c.createLinearGradient(0, 0, 0, 21);
            d.addColorStop(0, "#EEE");
            d.addColorStop(1, "#BBB");
            F.pj = function () {
                c.clearRect(0, 0, b.width, b.height);
                c.beginPath();
                c.moveTo(100, 22 - (F.performance[0] || 0));
                for (var a = 1; a < F.performance.length; a++) c.lineTo(100 - 2 * a, 22 - (F.performance[a] || 0));
                c.stroke();
                c.lineTo(0, 22);
                c.lineTo(100, 22);
                c.lineTo(100, 22 - (F.performance[0] || 0));
                c.fillStyle = d;
                c.fill();
                c.fillStyle =
                    "#888";
                c.fillText((" " + k.round(F.performance[0] + F.performance[1] + F.performance[2] || 0)).slice(-2), 103, 11);
                c.fillText("   fps", 99, 11)
            };
            F.pj()
        }, zf: function () {
            history.replaceState({D: h.Ue}, B.title, ta.bo(h.Ue, h.u))
        }
    };
    history.pushState || (F.zf = function () {
    });
    F.Th = g.Of("wind");
    F.Fg = function () {
        function a(a) {
            a = ua + (59 < a ? 1 : a / 63) * (Ha - ua);
            a != H && (H = a, H == Ba ? (k.style.visibility = "hidden", g.Wp()) : (k.style.visibility = "", g.yf("dpr", H / Ba)), h.resize(), h.log("settings", "resolution"))
        }

        function b() {
            h.ff(l.bq(G));
            F.zf();
            c.className =
                "settings pq";
            c.parentNode.onscroll = function () {
                c.className = "settings";
                this.onscroll = null
            };
            q.value = ""
        }

        h.log("settings", "open");
        var c = y.create(null, u.c, !0);
        y.kj = F.Bh;
        F.zf();
        c.className = "settings";
        y.bh = "#settings";
        y.dj = !0;
        g.a(0, {
            className: "header",
            children: [g.a(0, {className: "header_background", children: [g.a("h1", {textContent: u.c})]})],
            parent: c
        });
        g.a(0, {className: "section", textContent: u.hb, parent: c});
        g.a("ul", {
            className: "menu clearfix",
            children: [g.a("li", {children: [g.a("a", {href: "#settings-main", textContent: u.la})]}),
                g.a("li", {
                    children: [g.a("a", {
                        href: "#settings-wind",
                        textContent: u.ma
                    })]
                }), g.a("li", {children: [g.a("a", {href: "#settings-colors", textContent: u.ia})]})],
            parent: c
        });
        var d = g.a("select", {
            onchange: function () {
                h.log("settings", "language");
                g.gl("lang", this.value);
                n.translate(this.value)
            }
        }), f = [], r;
        for (r in na) f.push(r);
        f.sort();
        for (var e = 0; r = f[e]; e++) g.a("option", {
            value: r,
            textContent: na[r].label + " [" + r + "]",
            parent: d,
            selected: na[r] == u
        });
        var k, Z = F.kg(a, (H - ua) / (Ha - ua) * 63, u.mb, u.lb);
        Z.push(k = g.a("a", {
            textContent: u.ob,
            style: "display: block; " + (H == Ba ? "visibility: hidden; " : "") + "text-align: center; margin-bottom: -0.6em; position: relative; top: -0.4em",
            onclick: function () {
                a(Z[0].value = (Ba - ua) / (Ha - ua) * 63)
            }
        }));
        f = g.a("select", {
            onchange: function () {
                h.$j(this.value);
                n.ve.model.qf(this.value)
            }
        });
        g.a("option", {value: "auto", textContent: u.O, parent: f, selected: "auto" == h.ce});
        for (e = 0; e < Y.length; e++) if (!K[Y[e]].hidden) {
            var I = K[Y[e]].xf;
            g.a("option", {
                value: Y[e], textContent: K[Y[e]].name + (I ? " (" + I + ")" : ""), parent: f, selected: h.ce ==
                    Y[e]
            })
        }
        F.Wj({
            id: "settings-main",
            title: u.la,
            ml: u.jb,
            cf: "/images/aside/aplikace.jpg",
            parent: c,
            rows: [{Ke: u.ib, content: [d]}, {Ke: u.kb, content: Z}, {Ke: u.P, content: [f], className: "mobile-only"}]
        });
        var G = l.Qk(h.ci), q = g.a("select", {
            onchange: function () {
                var a = this.value || F.Th;
                a && (h.ff(a), F.zf())
            }
        });
        F.ff = function (a) {
            q.value = -1 == qa.indexOf(a) ? "" : a;
            G = l.Qk(a);
            p.wf[0].value = G.wf;
            p.length[0].value = G.length;
            p.width[0].value = G.width;
            p.gg[0].value = G.gg;
            p.re[0].value = G.re;
            p.opacity[0].value = G.opacity;
            p.Yf[0].value = G.Yf;
            Qa.value = G.color
        };
        for (var Qa = g.a("select", {
            onchange: function () {
                G.color = 1 * this.value;
                b()
            }
        }), e = 0; e < qa.length; e++) "off" != qa[e] && g.a("option", {
            value: qa[e],
            textContent: u.W[qa[e]] || qa[e],
            parent: q
        });
        g.a("option", {value: "", textContent: u.X, parent: q});
        q.value = -1 < qa.indexOf(h.ci) ? h.ci : "";
        for (e = 0; e < 2 * ya.length; e++) g.a("option", {
            value: e,
            textContent: u.rb[e],
            parent: Qa,
            selected: G.color == e
        });
        var p = {};
        F.Wj({
            id: "settings-wind",
            title: u.ma,
            ml: u.sb,
            cf: "/images/aside/cary.jpg",
            parent: c,
            rows: [{Ke: u.Fb, content: [q], className: "highlighted"},
                {
                    Ke: u.Gb, content: p.wf = F.kg(function (a) {
                        G.wf = a;
                        b()
                    }, G.wf, u.Ib, u.Hb)
                }, {
                    Ke: u.wb, content: p.length = F.kg(function (a) {
                        G.length = a;
                        b()
                    }, G.length, u.yb, u.xb)
                }, {
                    Ke: u.Jb, content: p.width = F.kg(function (a) {
                        G.width = a;
                        b()
                    }, G.width, u.Lb, u.Kb)
                }, {
                    Ke: u.Mb, content: p.gg = F.kg(function (a) {
                        G.gg = a;
                        b()
                    }, G.gg, u.Ob, u.Nb)
                }, {
                    Ke: u.zb, content: p.re = F.kg(function (a) {
                        G.re = a;
                        b()
                    }, G.re, u.Bb, u.Ab)
                }, {
                    Ke: u.Cb, content: p.opacity = F.kg(function (a) {
                        G.opacity = a;
                        b()
                    }, G.opacity, u.Eb, u.Db)
                }, {
                    Ke: u.tb, content: p.Yf = F.kg(function (a) {
                            G.Yf = a;
                            b()
                        }, G.Yf, u.vb,
                        u.ub)
                }, {Ke: u.qb, content: [Qa]}]
        });
        F.mo(c.querySelector("#settings-wind .section_header"));
        d = [];
        e = g.a("input", {
            type: "checkbox", checked: h.Eh, onclick: function () {
                h.Eh = this.checked;
                F.fq()
            }
        });
        d.push({Ke: u.sg, content: [e], label: !0});
        e = g.a("input", {
            type: "checkbox", checked: h.df, onclick: function () {
                h.df = this.checked;
                F.on()
            }
        });
        d.push({Ke: u.V, content: [e], label: !0});
        e = g.a("input", {
            type: "checkbox", checked: h.fg, onclick: function () {
                h.fg = this.checked;
                F.pn()
            }
        });
        d.push({Ke: u.ka, content: [e], label: !0});
        f = g.a("select", {
            onchange: function () {
                v.De =
                    Aa[this.selectedIndex];
                v.Ae();
                g.yf("borders", this.selectedIndex)
            }
        });
        for (e = 0; e < Aa.length; e++) g.a("option", {
            value: Aa[e],
            textContent: u.fb[e] || Aa[e],
            parent: f,
            selected: Aa[e] == v.De
        });
        d.push({Ke: u.eb, content: [f]});
        for (var T in ma) {
            f = [];
            e = 0;
            for (r in ma[T]) f.push(r), e++;
            if (!(2 > e)) {
                I = g.a("select", {
                    onchange: function () {
                        var a = this.value.split("|");
                        h.ak(a[0], a[1])
                    }
                });
                for (e = 0; e < f.length; e++) g.a("option", {
                    value: T + "|" + f[e],
                    textContent: f[e],
                    parent: I,
                    selected: h.units[T] == f[e]
                });
                d.push({Ke: u.pb[T] || T, content: [I]})
            }
        }
        F.Wj({
            id: "settings-colors",
            title: u.ia, ml: u.gb, cf: "/images/aside/mapy.jpg", parent: c, rows: d
        })
    };
    F.kg = function (a, b, c, d) {
        return [g.a("input", {
            type: "range", onchange: function () {
                a(1 * this.value)
            }, min: 0, max: 63, value: b
        }), g.a("br"), g.a("span", {textContent: String(c)}), d]
    };
    "range" != g.a("input", {type: "range"}).type && (F.kg = function (a, b, c, d) {
        for (var f = Array(64).join("\u00b7") + "(o)" + Array(64).join("\u00b7"), r = [], e = 0; 64 > e; e++) r.push(g.a("option", {
            value: e,
            textContent: f.substr(63 - e, 66)
        }));
        r[void 0 === b ? 31 : k.round(b)].selected = !0;
        return [g.a("select",
            {
                style: "text-align: center; margin: auto; display: block; margin-bottom: -1em; width: 100%",
                onchange: function () {
                    a(1 * this.value)
                },
                children: r
            }), g.a("br"), g.a("span", {textContent: String(c)}), d]
    });
    F.rg = function () {
        F.link && (F.link.textContent = u.c);
        "#settings" == y.bh && F.Fg()
    };
    var y = {
        pe: function () {
            y.zp();
            y.pk = null;
            y.lg = 0;
            y.we = g.ge("aside");
            var a = g.ge("menu-about");
            if (a) {
                var b = a.parentNode.parentNode;
                b.onclick = function () {
                    this.className = this.className ? "" : "k"
                };
                b.ontouchstart = function (a) {
                    if (this.className && "A" !=
                        a.target.tagName) return this.className = "", !1
                };
                a.onclick = function () {
                    y.Fg("about", u.ea, !0);
                    return !1
                }
            }
            F.pe();
            A.pe()
        }, yo: function () {
            if (y.we && (y.bh = location.href.replace(/.*\/|[?#].*/g, ""), y.dj = !0, y.Jl(), y.og)) return h.ah(y.og.lat, y.og.lon, 5), !0
        }, create: function (a, b, c, d) {
            g.ge("header").className = "";
            b = b ? g.Od("{page} \u2013 Ventusky", {page: b}) : "Ventusky";
            history.pushState && !d && (a ? history.pushState({
                detail: a,
                title: b,
                yq: c
            }, b, x.root + (u.Na ? u.Na + "/" + a : a)) : history.pushState({}, b));
            B.title = b;
            a && h.Pm(a);
            y.we ? (y.Bh(),
                a = y.we.getElementsByTagName("div")[0], a.innerHTML = "", a.className = "") : y.we = g.a(0, {
                parent: B.body,
                id: "aside",
                children: [a = g.a(0, {parent: B.body, id: "aside_inner"})]
            });
            B.body.className = "panel";
            g.a("span", {
                onclick: y.close,
                id: "aside_close_btn",
                children: [g.a("span", {className: "aside_close_btn_ico"})],
                parent: y.we
            });
            return a
        }, Mp: function (a) {
            g.a("span", {
                className: "dm",
                children: [g.a("span", {className: "tz"}), g.a("span", {className: "jh"}), g.a("span", {className: "ua"})],
                parent: a
            })
        }, Fg: function (a, b, c, d, f) {
            var r = y.create(a,
                b, c, d);
            y.Mp(r);
            y.bh = a;
            y.dj = !0;
            g.pf(g.Od(Wa, {link: a, lang: u.code, id: f || ""}), function (a) {
                r.innerHTML = a;
                y.Jl()
            })
        }, Fn: function (a) {
            a = a.replace(/webcam\/profil\?id=(\d+)/, "webcam-$1");
            return a.replace(/.*\/|[?#].*/g, "")
        }, Zl: function () {
            g.Gl(g.Od(Wa, {link: y.Fn(this.href), lang: u.code, id: this._auxId || ""}));
            return !1
        }, Ki: function () {
            y.Fg(y.Fn(this.href), this.textContent, !1, !1, this._auxId);
            return !1
        }
    };
    x.clickLink && (y.Ki = function () {
        this.target = "_parent";
        return !0
    });
    y.Ep = function (a, b) {
        g.Gl(g.Od(Xa, h.wi(a, b)))
    };
    y.Nm =
        function (a, b) {
            function c() {
                l.className = k + l.offsetHeight + 12 > D.innerHeight ? "yy" : ""
            }

            function d(a) {
                a.target.parentNode != l && f()
            }

            function f() {
                y.Om = !0;
                setTimeout(function () {
                    y.Om = !1
                }, 333);
                B.body.removeChild(l);
                B.documentElement.removeEventListener("touchstart", d, !1);
                B.documentElement.removeEventListener("mousedown", d, !1);
                B.documentElement.removeEventListener("wheel", d, !1)
            }

            if (!y.Om) {
                var r = h.wi(a, b), e = g.a("a", {href: y.bk(a, b), textContent: g.coords(r, 3 < V), onclick: y.Ki});
                e.setAttribute("data-distance", "0 km");
                var k = b / H, l = g.a(0, {
                    id: "h",
                    style: "left: " + a / H + "px; top: " + k + "px",
                    parent: B.body,
                    children: [e]
                });
                g.pf(g.Od(Xa, r), function (a) {
                    try {
                        var b = JSON.parse(a || "[]")
                    } catch (d) {
                        return
                    }
                    for (a = 0; a < b.length; a++) {
                        var e = !x.clickLink && b[a].url || g.Od(x.clickLink || "{lat};{lon}", {
                            lat: b[a].lat.toFixed(3),
                            lon: b[a].lon.toFixed(3)
                        }), e = g.a("a", {href: e, textContent: v.$l(b[a]), onclick: y.Ki});
                        e._auxId = b[a].id;
                        e.setAttribute("data-distance", g.Tm(b[a].distance, 100) + " km");
                        l.appendChild(e)
                    }
                    c()
                });
                c();
                B.documentElement.addEventListener("touchstart",
                    d, !1);
                B.documentElement.addEventListener("mousedown", d, !1);
                B.documentElement.addEventListener("wheel", d, !1);
                l.addEventListener("click", f, !1)
            }
        };
    y.Jl = function () {
        g.ge("aside_close_btn") && (g.ge("aside_close_btn").onclick = y.close);
        var a = g.ge("star");
        if (a) {
            for (var b = a.getAttribute("data-star").split(";"), b = {
                lat: parseFloat(b[0]),
                lon: parseFloat(b[1]),
                name: b[2],
                url: y.bh
            }, c = !1, d = 0; d < y.Oe.length; d++) if (b.lon == y.Oe[d].lon && b.lat == y.Oe[d].lat || y.Oe[d].url == b.url) {
                y.Oe[d].temporary || (c = !0);
                y.og = y.Oe[d];
                break
            }
            a.onclick =
                function () {
                    (c = !c) ? delete y.og.temporary : y.og.temporary = !0;
                    this.className = c ? "" : "star_empty";
                    v.Ye();
                    y.nn()
                };
            y.og || (y.am(), y.og = {
                lon: b.lon,
                lat: b.lat,
                name: b.name || "",
                url: y.bh,
                temporary: !0
            }, y.Oe.push(y.og), v.Ye());
            c = !c;
            a.onclick()
        }
        y.Ci()
    };
    y.Bh = function () {
        y.kj && (y.kj(), delete y.kj);
        y.dj = !1;
        y.og = null;
        y.nn();
        w.Po()
    };
    y.close = function () {
        y.we && (y.Bh(), y.we.parentNode.removeChild(y.we), B.body.className = "", B.title = "Ventusky", delete y.we, delete y.bh, h.zf(!0))
    };
    y.bk = function (a, b) {
        var c = h.wi(a, b);
        return g.Od(x.clickLink ||
            "{lat};{lon}", {lat: c.lat.toFixed(3), lon: c.lon.toFixed(3)})
    };
    y.Oe = [];
    y.zp = function () {
        try {
            var a = JSON.parse(localStorage.getItem("bookmarks"))
        } catch (b) {
        }
        a && (y.Oe = a)
    };
    y.jl = function (a, b, c) {
        y.am();
        y.Oe.push({lat: a, lon: b, name: c, temporary: !0})
    };
    y.am = function () {
        v.Ao();
        for (var a = [], b = 0; b < y.Oe.length; b++) y.Oe[b].temporary || a.push(y.Oe[b]);
        y.Oe = a
    };
    y.nn = function () {
        for (var a = [], b = 0; b < y.Oe.length; b++) y.Oe[b].temporary || a.push(y.Oe[b]);
        try {
            localStorage.setItem("bookmarks", JSON.stringify(a))
        } catch (c) {
        }
    };
    y.Tj = function () {
        for (var a =
            y.we.querySelectorAll("[data-frame]"), b = 0; b < a.length; b++) (function (a) {
            for (var b = a.getAttribute("data-frame"), c = a.getElementsByTagName("select"), e = 0; e < c.length; e++) c[e].onchange = function () {
                var c = g.Od(b, {link: this.value});
                g.pf(c, function (b) {
                    a.innerHTML = b;
                    y.Tj()
                })
            };
            a.onclick = function (a) {
                if (a = a.target.getAttribute("data-link")) {
                    a = g.Od(b, {link: a});
                    var c = this;
                    g.pf(a, function (a) {
                        c.innerHTML = a;
                        y.Tj()
                    })
                }
            }
        })(a[b]);
        a = y.we.querySelectorAll(".unroll select");
        for (b = 0; b < a.length; b++) {
            var c = a[b];
            c.parentNode.getAttribute("data-text") ||
            (c.parentNode.setAttribute("data-text", c.options[c.selectedIndex].textContent), c.addEventListener("change", c.yi = function () {
                this.parentNode.setAttribute("data-text", this.options[this.selectedIndex].textContent)
            }, !1))
        }
    };
    y.Ci = function () {
        y.Tj();
        var a = y.we.querySelector("[data-forecast]");
        if (a) {
            a = a.getAttribute("data-forecast");
            y.pk = JSON.parse(a);
            y.lg = 1;
            var b = B.querySelector("#forecast #date_selector");
            if (b) {
                b.onchange = function () {
                    y.oq(b.options.length)
                };
                if (a = B.querySelector("#forecast a.round_button.next")) a.onclick =
                    function () {
                        return y.Oh(2, 1, b.options.length)
                    };
                for (a = 1; 7 >= a; a++) {
                    var c = g.ge("d_" + a);
                    c && (c.onclick = function () {
                        return y.Oh(this.id.substr(2), 1, b.options.length)
                    })
                }
            }
        }
        if (a = y.we.querySelector("[data-aqi]")) {
            var d = a.getAttribute("data-aqi");
            !1 === ("IntersectionObserver" in D && "IntersectionObserverEntry" in D && "intersectionRatio" in D.IntersectionObserverEntry.prototype) ? (D.IntersectionObserver = function () {
            }, y.Km(d)) : (new D.IntersectionObserver(function (a) {
                0 < a[0].intersectionRatio && y.Km(d)
            }, {root: B.documentElement})).observe(a)
        }
        if (a =
            y.we.querySelector("[data-aq]")) a = a.getAttribute("data-aq").split(";"), y.wp(+a[0], +a[1]);
        if (a = y.we.querySelector("[data-astro]")) a = a.getAttribute("data-astro").split(";"), w.ae.F = {
            Ol: +a[3],
            Xh: +a[4]
        }, w.pe(+a[0], +a[1], new Date(1E3 * a[2]));
        c = y.we.querySelectorAll("script");
        for (a = 0; a < c.length; a++) {
            var f = c[a].src;
            if (!y.Ci.mh[f]) {
                var r = B.createElement("script");
                r.src = f;
                B.getElementsByTagName("head")[0].appendChild(r);
                y.Ci.mh[f] = !0
            }
        }
    };
    y.Ci.mh = {};
    y.qq = function (a, b) {
        function c() {
            return y.Oh(y.lg + 1, a, b)
        }

        function d() {
            return y.Oh(y.lg -
                1, a, b)
        }

        var f = "", r = "", e = "a", k = "a";
        y.lg >= b && (y.lg = b, r = "inactive", k = "span", c = null);
        y.lg <= a && (y.lg = a, f = "inactive", e = "span", d = null);
        ba("arrows").innerHTML = "";
        g.a(e, {parent: ba("arrows"), className: "round_button previous " + f, onclick: d});
        g.a(k, {parent: ba("arrows"), className: "round_button next " + r, onclick: c})
    };
    y.oq = function (a) {
        var b = ba("date_selector");
        y.Oh(b.options[b.selectedIndex].value, 1, a)
    };
    y.Oh = function (a, b, c) {
        var d = y.pk.gustDesc, f = "d_" + a;
        y.lg = a;
        y.qq(b, c);
        for (a = b; a <= c; a++) ba("d_" + a).className = "";
        ba(f).className =
            "active";
        ba("date_selector").value = y.lg;
        ba("date_selector").yi();
        c = y.pk[f];
        for (a = 0; 24 > a; a += 3) {
            f = "h_" + a;
            "undefined" === typeof c[f].td && (c[f].s = 0, c[f].td = "-", c[f].sr = 0, c[f].srd = "-", c[f].vsd = "-", c[f].vg = 0, c[f].vgd = "-", c[f].vd45 = 0, c[f].vdId = "S");
            b = c[f].s;
            var r = "";
            0 < c[f].sr && (r = 14 == b || 21 == b || 17 == b || 22 == b ? "with_ico snow" : "with_ico drop");
            var e = "wind_ico arrow_" + c[f].vd45, g = "";
            70 < c[f].vg ? g = '<span class="with_ico pozor">' + d + ":<br> " + c[f].vgd + "</span>" : 50 < c[f].vg && (g += '<span class="with_ico pozor-nizke">' +
                d + ":<br> " + c[f].vgd + "</span>");
            var k = "";
            1 == c[f].n && (k = "_noc");
            ba("s_" + a).className = "big_ico big_ico_" + b + k;
            ba("t_" + a).innerHTML = c[f].td;
            ba("sr_" + a).className = r;
            ba("sr_" + a).innerHTML = c[f].srd;
            ba("v_" + a).className = e;
            ba("v_" + a).innerHTML = c[f].vdId;
            ba("vs_" + a).innerHTML = c[f].vsd;
            ba("w_" + a).innerHTML = g
        }
        return !1
    };
    y.Km = function (a) {
        "" === ba("aqi_chart_section").innerHTML.trim() && g.pf(g.Od(a), function (a) {
            ba("aqi_chart_section").innerHTML = a
        })
    };
    y.wp = function (a, b) {
        g.pf(g.Od("https://api.waqi.info/feed/geo:{lat};{lon}/?token=904a1bc6edf77c428347f2fe54cf663bcffaec21",
            {lat: a, lon: b}), function (c) {
            function d(a) {
                return 50 >= a ? 0 : 100 >= a ? 1 : 150 >= a ? 2 : 200 >= a ? 3 : 300 >= a ? 4 : 5
            }

            try {
                var f = JSON.parse(c || "[]")
            } catch (g) {
                return
            }
            if ("ok" === f.status) {
                c = f.data;
                var f = c.city.geo[0], r = k.PI / 180,
                    f = k.pow(k.sin((f - a) * r / 2), 2) + k.cos(a * r) * k.cos(f * r) * k.pow(k.sin((c.city.geo[1] - b) * r / 2), 2),
                    f = 12734 * k.atan2(k.sqrt(f), k.sqrt(1 - f));
                if (!(10 < f || (r = c.aqi, 0 > r || 500 < r))) {
                    var e = d(r), h = 90 + k.min(r, 360), l = gb[e], I = "#ebeff1";
                    180 < r && (h -= 180, I = l);
                    var G = ba("aq_pie");
                    G && (G.style.cssText = "background-image: linear-gradient(" +
                        h + "deg, transparent 50%, " + I + " 50%), linear-gradient(90deg, #ebeff1 50%, transparent 50%); ", G.style.cssText += "background-color: " + l + ";", G.className = "pie");
                    r = k.round(r);
                    if (h = ba("aq_val")) h.innerHTML = '<strong class="quality-text-' + e + '" style="font-size: 150%;">AQI ' + r + "</strong>";
                    if (r = ba("aq_i" + e)) r.style.cssText = "";
                    r = {
                        pm10: "PM<sub>10</sub>",
                        pm25: "PM<sub>2.5</sub>",
                        no2: "NO<sub>2</sub>",
                        so2: "SO<sub>2</sub>",
                        o3: "O<sub>3</sub>",
                        co: "CO"
                    };
                    if (e = ba("ai_info_table")) {
                        I = e.insertRow(-1);
                        h = I.insertCell(0);
                        I =
                            I.insertCell(1);
                        I.innerHTML = "AQI";
                        for (var n in r) h = c.iaqi[n], void 0 !== h && (l = k.round(h.v), I = e.insertRow(-1), h = I.insertCell(0), I = I.insertCell(1), h.innerHTML = r[n], I.innerHTML = '<strong class="quality-text-' + d(l) + '">' + l + "</strong>");
                        f = k.round(f);
                        t = (new Date(1E3 * c.time.v)).format(u.J + " " + u.Pe);
                        e = c.city.name;
                        e = e.split(",")[0];
                        n = ba("ai_info");
                        r = n.textContent.split(";");
                        e = r[0] + " " + e + ", ";
                        e += r[1] + ": " + f + " km (" + t + "), ";
                        e += c.attributions[0].name;
                        n.textContent = e;
                        ba("aq_section").style.cssText = ""
                    }
                }
            }
        })
    };
    var O =
        {
            block: {}, ig: [], size: 0, Lm: function (a, b, c, d) {
                a = pa(a, 1 << c);
                a = c + "/" + a + "/" + b;
                var f = O.block[a];
                if (f) return h.df && f.jj && O.Si(f, a, d), f;
                O.block[a] = f = {Ik: 0, size: 4};
                for (b = 0; c = ["land", "border"][b]; b++) f[c] = g.a("img"), f[c].onload = function () {
                    this.onload = this.onerror = null;
                    f.Ik++;
                    2 == f.Ik && d()
                }, f[c].onerror = function () {
                    this.src = this.So
                }, f[c].crossOrigin = "Anonymous", f[c].src = O.mj(c, a + ".png"), f[c].So = O.mj(c, "empty.png");
                g.pf(O.mj("cities", a + ".js"), function (a) {
                    try {
                        f.cities = JSON.parse(a || "[]")
                    } catch (b) {
                        f.cities = []
                    }
                    f.Bp =
                        !0;
                    d()
                });
                h.df ? O.Si(f, a, d) : f.jj = !0;
                O.ig.push(a);
                O.size += f.size;
                O.Xl()
            }, mj: function (a, b) {
                return mb[a] + "/" + b
            }, Si: function (a, b, c) {
                delete a.jj;
                g.pf(O.mj("cams", b + ".js?" + nb), function (b) {
                    try {
                        a.cams = JSON.parse(b || "[]")
                    } catch (f) {
                        a.cams = []
                    }
                    a.Mm = !0;
                    c()
                })
            }
        };
    O.sm = g.a("img", {src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="});
    O.yp = function (a, b, c, d) {
        function f() {
            r.land.onload = r.land.onerror = null;
            r.Cp = !0;
            d()
        }

        a = pa(a, 1 << c);
        a = c + "/" + a + "/" + b;
        var r = O.block[a];
        if (r) return h.df && r.jj &&
        O.Si(r, a, d), r;
        O.block[a] = r = {loaded: 0, size: 1};
        r.border = O.sm;
        r.cities = [];
        r.land = g.a("img");
        r.land.onload = function () {
            f()
        };
        r.land.onerror = function () {
            r.land = O.sm;
            f()
        };
        r.land.crossOrigin = "Anonymous";
        r.land.src = "https://cdnstatic.ventusky.com/tiles/v1.0/osm/" + a + ".png";
        h.df ? O.Si(r, a, d) : r.jj = !0;
        O.ig.push(a);
        O.size += r.size;
        O.Xl()
    };
    O.Kq = function () {
        for (var a = 0; a < O.ig.length; a++) {
            var b = O.block[O.ig[a]];
            b.land.onload = b.land.onerror = b.border.onload = b.border.onerror = null;
            delete O.block[O.ig[a]]
        }
        O.size = 0;
        O.ig.length =
            0
    };
    O.Xl = function () {
        for (; 200 < O.size;) {
            var a = O.block[O.ig[0]];
            a.land.onload = a.land.onerror = a.border.onload = a.border.onerror = null;
            O.size -= a.size;
            delete O.block[O.ig[0]];
            O.ig.shift()
        }
    };
    var l = {};
    l.ee = g.a("canvas");
    l.context = l.ee.getContext("2d");
    l.Xe = [];
    l.B = "10m";
    l.nh = Fa["10m"].kind;
    l.He = function () {
        l.Pf = !0;
        n.xi();
        var a = Fa[l.B], b = a.kind;
        if ("wind" == b || "currents" == b) var c = [a.Re, a.Se]; else "wave" == b && (c = a.g ? [a.height, a.direction, a.g.height, a.g.direction] : [a.height, a.direction]);
        var d = l.Cg();
        if (d) {
            var f = d + (a.Wg ||
                    ""), r = {model: f, time: h.Vc, layer: c, cache: String(K[d].Jd).replace(/0+$/, "")},
                e = K[d].Md[h.u] && K[d].Md[h.u].size || K[d].size, c = g.Od(Na, r);
            g.qm(c, function (c) {
                if (!(r.model != f || r.time - h.Vc)) {
                    l.nh != b && (l.nh = b, n.ve["wind-type"].refresh());
                    l.nh = b;
                    var d = a.dh || l.Oo;
                    l.dh != d && (l.dh = d, F.ff && "off" != h.Ue && F.ff(h.Ue));
                    "wind" == b || "currents" == b ? (l.Cl = c[0], l.Dl = c[1], l.Rn = a.Ne) : (l.Ln = c[0], l.Kn = c[1], l.In = a.g, l.wq = a.Uh, l.Mn = a.Dk, l.xq = a.threshold, l.In && (l.uq = c[2], l.tq = c[3], l.sq = a.g.Uh, l.Jn = a.g.Dk, l.vq = a.g.threshold));
                    l.Wd =
                        l.Vg = e.Wd || 720;
                    l.Ud = e.Ud || 360;
                    l.Mj = 0;
                    l.Nj = 0;
                    e.qe && (l.Ud *= 180 / (e.qe - e.Fe), l.Nj = l.Ud * (90 - e.qe) / 180);
                    e.Le && (l.Wd *= 360 / (e.Le - e.Me), l.Mj = l.Wd * (180 + e.Me) / 360);
                    e.Ge ? l.Ge = q.wm(e)[l.Vg]["0,0"] : l.Ge = null;
                    l.cache.length = 0;
                    l.Pf = !1;
                    n.xi();
                    l.qj()
                }
            })
        }
    };
    l.Cg = function () {
        for (var a, b, c = 0; (!b || a) && c < h.ze.length; c++) b = h.ze[c], a = K[b].xf;
        return b && K[b].rf ? K[b].rf : b
    };
    l.Wd = l.Vg = 720;
    l.Ud = 360;
    l.ug = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_-0123456789";
    l.Lg = function (a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a.charAt(c)] =
            c;
        return b
    }(l.ug);
    l.dh = l.Oo = {};
    l.Qk = function (a) {
        a = l.dh[a] || ib[a] || a;
        a = a.slice(1);
        var b = {};
        b.wf = l.Lg[a.charAt(0)];
        b.length = l.Lg[a.charAt(1)];
        b.width = l.Lg[a.charAt(2)];
        b.gg = l.Lg[a.charAt(3)];
        b.re = l.Lg[a.charAt(4)];
        b.opacity = l.Lg[a.charAt(5)];
        b.Yf = l.Lg[a.charAt(6)];
        b.color = l.Lg[a.charAt(7)] % (2 * ya.length);
        return b
    };
    l.bq = function (a) {
        return "0" + (l.ug.charAt(a.wf) + l.ug.charAt(a.length) + l.ug.charAt(a.width) + l.ug.charAt(a.gg) + l.ug.charAt(a.re) + l.ug.charAt(a.opacity) + l.ug.charAt(a.Yf) + l.ug.charAt(a.color))
    };
    l.bp = function (a, b, c) {
        if ("off" == c) return {wf: 0, opacity: 0};
        c = l.Qk(c);
        for (var d = c.width / 64 * 2.8 + .2, f = c.gg / 64 * 2.8 / 2, r = [], e = 0; 5 > e; e++) r.push(k.max(d + f * (e - 2), .2));
        d = c.re / 64 * 135 + 20;
        f = .45 * d;
        return {
            wf: a * (c.wf / 64 * 1.6 + .2) / ((b + 6) * (b + 6)),
            opacity: .7 * (1 - c.opacity / 64) + .3,
            color: ya[c.color % ya.length] || "#FFF",
            Li: hb[c.color % ya.length] || "#000",
            eh: c.color >= ya.length,
            Pg: r,
            Qn: c.width / 64,
            gg: c.gg / 64,
            length: (c.length / 64 * (.025 - .0055) + .0055) * (1.2 + b),
            Yf: 1 - (63 - c.Yf) / 64 / 8 - .003 * b,
            Vh: d - f,
            om: 2 * f
        }
    };
    l.c = {};
    l.qj = function () {
        var a = !!l.c.eh;
        l.c = l.bp(N * J, V, h.Ue);
        l.c.Pk = !l.c.wf;
        l.c.Pg || (l.c.Pg = [1]);
        l.ee.style.opacity = k.min(l.c.opacity / (l.c.eh && q.j ? q.j.opacity : 1), 1);
        l.context.strokeStyle = l.Ai.strokeStyle = l.c.color;
        a != l.c.eh && v.Hd.insertBefore(l.ee, l.c.eh ? q.ee : q.ee.nextSibling);
        l.Rp();
        l.context.setLineDash && l.context.setLineDash([]);
        var a = "", b = Fa[l.B];
        "wave" == b.kind && b.g && (a = '<b style="color: ' + (l.Mn ? l.c.Li : l.c.color) + '">' + u.jc + '</b> <b style="color: ' + (l.Jn ? l.c.Li : l.c.color) + '">' + u.ac + "</b>");
        q.Im.innerHTML = a
    };
    l.pe = function () {
    };
    l.Rp = function () {
        var a =
            k.round(l.c.wf);
        if (l.Xe.length < a) for (var b = l.Xe.length; b < a; b++) l.Xe.push(l.cl({}, 0)); else l.Xe.length = a
    };
    l.cl = function (a, b) {
        a.x = k.random() * (N + 2 * oa) - oa;
        a.y = k.random() * (J + 2 * oa) - oa;
        a.re = b + k.random() * l.c.om;
        a.Qj = 0;
        a.Kh = -1;
        return a
    };
    l.bj = Date.now();
    l.ej = 0;
    l.cache = [];
    l.loop = function () {
        var a = Date.now(), b = 500 < a - l.bj ? 1 : k.min((a - l.bj) / 16, 10);
        l.ej++;
        l.bj = a;
        l.c.Pk || l.paused || (a = l.context, a.globalCompositeOperation = "destination-in", a.globalAlpha = k.pow(l.c.Yf, b), a.fillRect(0, 0, N, J), a.globalCompositeOperation = "source-over",
            a.globalAlpha = 1, a.beginPath(), "wind" == l.nh || "currents" == l.nh ? l.Hp(b) : "wave" == l.nh && l.Gp(b))
    };
    l.Gp = function (a) {
        if (l.Ln && l.Kn) {
            var b = l.context, c = l.Wd, d = l.Vg, f = l.Ud, r = l.Nj, e = l.Mj, g = l.Ge, h = 512 * (1 << V),
                I = 6 * l.c.length * a, G = l.Ln, n = l.Kn, q = l.xq;
            b.lineWidth = I * (1 + 1.5 * l.c.Qn);
            b.setLineDash && b.setLineDash(l.wq);
            l.context.strokeStyle = l.Ai.strokeStyle = l.Mn ? l.c.Li : l.c.color;
            for (var u = l.In ? k.round(l.Xe.length / 8) : -1, v = 6 - 3.9375 * l.c.gg, ca = 0; ca < l.Xe.length / 4; ca++) {
                var C = l.Xe[ca];
                0 >= C.re && l.cl(C, l.c.Vh);
                var p = 1E6 + k.round(C.x),
                    w = 3E6 + k.round(C.y), p = l.cache[p] || (l.cache[p] = (k.round(C.x) + R) / h % 1 * c - e),
                    P = l.cache[w] || (l.cache[w] = Ra * k.atan(k.exp(((k.round(C.y) + M) / h * 2 - 1) * k.PI)) * f - r),
                    x = p % 1, S = P % 1, p = p | 0, P = (P | 0) * d;
                if (!(0 > p || p >= d || g && !l.Vm(p, P)) && (w = ha.hg(x, S, G[P + p], G[P + p + 1], G[P + d + p], G[P + d + p + 1]), w > q)) {
                    p = ha.io(x, S, n[P + p], n[P + p + 1], n[P + d + p], n[P + d + p + 1], k.PI / 90) / 90 * k.PI + k.PI;
                    0 < C.Kh && k.abs(C.Kh - p) > .25 * k.PI ? (C.re = 0, p = C.Kh) : C.Kh = p;
                    var y = 2 - k.min(C.Qj || 0, l.c.Vh) / l.c.Vh / 2, S = k.PI / 2 * y, P = k.sin(p) * I,
                        x = k.cos(p) * I, y = k.max(w / v, 4) * (.5 + l.c.Qn), w = k.sin(p +
                            S) * y, A = k.cos(p + S) * y, z = k.sin(p - S) * y, p = k.cos(p - S) * y;
                    C.x += P;
                    C.y -= x;
                    b.moveTo(C.x + w, C.y - A);
                    b.quadraticCurveTo(C.x, C.y, C.x + z, C.y - p)
                }
                C.Qj += a;
                C.re -= 10 * a / y;
                if (C.x < 0 - oa || C.x >= N + oa || C.y < 0 - oa || C.y >= J + oa) C.re = 0;
                ca == u && (b.stroke(), b.beginPath(), b.setLineDash && b.setLineDash(l.sq), b.strokeStyle = l.Ai.strokeStyle = l.Jn ? l.c.Li : l.c.color, G = l.uq, n = l.tq, q = l.vq)
            }
            b.stroke()
        }
    };
    l.Hp = function (a) {
        if (l.Cl && l.Dl) {
            for (var b = l.Wd, c = l.Vg, d = l.Ud, f = l.Mj, r = l.Nj, e = l.Ge, g = 512 * (1 << V), h = l.c.length * a * l.Rn, I = l.Cl, G = l.Dl, n = [0], q = 1; q < l.c.Pg.length; q++) n.push(k.round(l.Xe.length /
                l.c.Pg.length * q));
            n.push(l.Xe.length);
            for (var u = l.context, q = 0; q < n.length - 1; q++) {
                u.lineWidth = l.c.Pg[q];
                for (var v = n[q]; v < n[q + 1]; v++) {
                    var p = l.Xe[v];
                    0 >= p.re && l.cl(p, l.c.Vh);
                    var C = 1E6 + k.round(p.x), w = 2E6 + k.round(p.y),
                        C = l.cache[C] || (l.cache[C] = (k.round(p.x) + R) / g % 1 * b - f),
                        x = l.cache[w] || (l.cache[w] = Ra * k.atan(k.exp(((k.round(p.y) + M) / g * 2 - 1) * k.PI)) * d - r),
                        P = C % 1, y = x % 1;
                    0 > C || C >= c || e && !l.Vm(C, x) || (C = C | 0, x = (x | 0) * c, w = ha.hg(P, y, I[x + C], I[x + C + 1], I[x + c + C], I[x + c + C + 1]) - 127, C = ha.hg(P, y, G[x + C], G[x + C + 1], G[x + c + C], G[x + c + C + 1]) - 127,
                        u.moveTo(p.x, p.y), p.x += w * h, p.y -= C * h, u.lineTo(p.x, p.y));
                    p.re -= a;
                    if (p.x < 0 - oa || p.x >= N + oa || p.y < 0 - oa || p.y >= J + oa) p.re = 0
                }
                u.stroke();
                u.beginPath()
            }
        }
    };
    l.Vm = function (a, b) {
        return 1 == l.Ge[(a | 0) + (b | 0) * l.Vg]
    };
    l.resize = function () {
        l.cache.length = 0;
        l.ee.width = l.Lj.width = N;
        l.ee.height = l.Lj.height = J;
        l.context.lineWidth = 2;
        l.context.lineCap = "butt";
        l.qj()
    };
    l.Lj = g.a("canvas");
    l.Ai = l.Lj.getContext("2d");
    l.lf = {x: 0, y: 0};
    l.Sj = function () {
        g.setTransform(l.ee, "translate(" + l.lf.x / H + "px, " + l.lf.y / H + "px)")
    };
    l.moveBy = function (a, b,
                         c) {
        l.cache.length = 0;
        l.lf.x += a;
        l.lf.y += b;
        if (c) return l.qj(), l.hn();
        l.Sj()
    };
    l.hn = function () {
        for (var a = l.lf.x, b = l.lf.y, c = 0; c < l.Xe.length; c++) l.Xe[c].x = pa(l.Xe[c].x + a, N), l.Xe[c].y = pa(l.Xe[c].y + b, J);
        l.lf.x = 0;
        l.lf.y = 0;
        l.Sj();
        if (1 > N - k.abs(a) || 1 > J - k.abs(b)) l.context.clearRect(0, 0, d, f); else {
            c = l.Lj;
            c.getContext("2d");
            var d = c.width, f = c.height;
            l.Ai.clearRect(0, 0, d, f);
            l.Ai.drawImage(l.ee, k.max(-a, 0), k.max(-b, 0), N - k.abs(a), J - k.abs(b), k.max(a, 0), k.max(b, 0), N - k.abs(a), J - k.abs(b));
            l.context.clearRect(0, 0, d, f);
            l.context.drawImage(c,
                0, 0)
        }
    };
    var q = {};
    q.ee = g.a("canvas");
    q.context = q.ee.getContext("2d");
    q.pe = function () {
        "imageSmoothingEnabled" in q.context ? q.context.imageSmoothingEnabled = !1 : q.context.mozImageSmoothingEnabled = q.context.webkitImageSmoothingEnabled = q.context.msImageSmoothingEnabled = !1;
        q.He();
        q.label = g.a("span", {className: "ew", parent: v.gf});
        q.A = g.a(0, {id: "z", parent: B.body});
        q.qh();
        E.pe()
    };
    q.Im = g.a(0, {id: "x"});
    q.Fm = function () {
        if (!D.Uint8ClampedArray) return !0;
        var a = new ArrayBuffer(8), b = new Uint8ClampedArray(a);
        (new Uint32Array(a))[1] =
            168496141;
        return 10 === b[7] && 11 === b[6] && 12 === b[5] && 13 === b[4]
    }();
    q.Ig = q.Fm ? function (a, b, c, d) {
        return d << 24 | c << 16 | b << 8 | a
    } : function (a, b, c, d) {
        return a << 24 | b << 16 | c << 8 | d
    };
    q.nq = q.Fm ? function (a) {
        return [a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24]
    } : function (a) {
        return [a >>> 24, a >>> 16 & 255, a >>> 8 & 255, a & 255]
    };
    q.Ro = q.Ig(32, 32, 32, 255);
    q.Uq = q.Ig(255, 255, 255, 179);
    q.np = function () {
        for (var a in p) (function (a) {
            if (a.hf) for (var c in p[a.hf]) c in a || (a[c] = p[a.hf][c]);
            a.Qe || (a.h ? a.Qe = function (c, d) {
                var e = ma[a.h][h.units[a.h]];
                e.Ni ? c = e.Ni(c) :
                    c = e.Oa * c;
                !a.Fh && 0 > c && (c = 0);
                a.um && c > a.max / 1E3 && (c = a.max / 1E3);
                return g.Tm(c, 1 / ((a.yg && a.yg[h.units[a.h]] || {}).precision || e.precision || (d ? 1 : .01)))
            } : a.Qe = function (a) {
                return a
            });
            a.o || (a.o = function (a) {
                return a
            });
            if (!a.Mi) {
                c = a.scale.length / 6;
                a.Mi = new Uint32Array(c);
                a.Fk = new Uint8Array(c);
                for (var d = c = 0; d < a.scale.length; d += 6) {
                    var f = parseInt(a.scale.substr(d, 6), 36), r = (f >> 16) % 256, e = (f >> 8) % 256, k = f % 256,
                        f = 2 * (f >> 24), l = q.Ig(r, e, k, f);
                    a.Mi[c] = l;
                    a.Fk[c] = (.2989 * r + .587 * e + .114 * k) * f / 255 + 119 * (1 - f / 255);
                    c++
                }
            }
        })(p[a])
    };
    q.wm =
        function (a) {
            if (!a.Ge || !a.Ge.length) return a.Ge || {};
            for (var b = [], c = 0, d = 0; d < a.Ge.length; d += 3) b[d / 3] = parseInt(a.Ge.slice(d, d + 3), 36), c += d && b[d / 3];
            for (var c = new Uint8Array(c), f = b[0], d = 1; d < b.length; d += 2) {
                for (var r = 0; r < b[d]; r++) c[f++] = 1;
                f += b[d + 1]
            }
            var e = a.Wd || 720, g = a.Ud || 360, b = a.Hf || 512, d = a.Gf || 512, h = new Uint8Array(e * g);
            a.Ge = {};
            a.Ge[720] = {"0,0": h};
            a.Ge[e] = {"0,0": h};
            for (f = 0; f < g; f++) for (var l = k.floor(f / g * a.height) * a.width, r = 0; r < e; r++) h[r + f * e] = c[k.floor(r / e * a.width) + l];
            e = {};
            a.Ge[a.width] = e;
            g = k.ceil(a.height /
                d) - 1;
            for (h = k.ceil(a.width / b) - 1; 0 <= h; h--) for (var l = k.min(b, a.width - h * b) - 1, G = g; 0 <= G; G--) {
                var n = new Uint8Array(b * d);
                e[h + "," + G] = n;
                for (f = d - 1; 0 <= f; f--) for (r = l; 0 <= r; r--) n[r + f * b] = c[r + h * b + (f + G * d) * a.width]
            }
            return a.Ge
        };
    q.sn = function (a) {
        q.j && q.j.h && n.ve[q.j.h] && n.ve[q.j.h].sh();
        var b = q.j ? !!q.j.Ve : !1;
        (a = p[a]) ? (q.ee.style.opacity = a.opacity, q.j = a, q.j && q.j.h && n.ve[q.j.h] && n.ve[q.j.h].qf(h.units[q.j.h]), q.qh(), q.De != q.j.De && (q.De = q.j.De, v.Ae()), b != !!q.j.Ve && (v.Hd.insertBefore(v.ag, q.j.Ve ? v.jg : q.ee), q.j.Ve && 10 <= V &&
        v.H(V - 10 + 1)), n.b.wj()) : (q.j = null, q.qh(), q.ee.style.opacity = .8, v.Hd.insertBefore(v.ag, q.ee), q.De && (q.De = "", v.Ae()))
    };
    q.He = function () {
        h.Cg();
        q.sn(h.u);
        q.Ae(!0);
        q.al()
    };
    q.wk = function (a, b) {
        if (aa[h.u].$g) return L.wk(a, b);
        a = k.round(a);
        b = k.round(b);
        var c = q.xm(a, b);
        if (!c) return -1;
        var d = q.j;
        return d.Fk[k.round((k.min(k.max(c.values[(b + M) % 256 * 256 + (a + R) % 256], d.min), d.max) - d.min) / d.step)]
    };
    q.xm = function (a, b) {
        if (!q.Rk || !q.j || q.j.Ve && 255 == v.Dg.getImageData(a, b, 1, 1).data[3]) return null;
        var c = E.Wi(k.floor((a + R) /
            256), k.floor((b + M) / 256), V, q.Rk);
        return c && 2 == c.status ? c : null
    };
    q.ym = function (a, b) {
        a = k.round(a);
        b = k.round(b);
        var c = q.xm(a, b);
        if (!c) return null;
        var d = (b + M) % 256 * 256 + (a + R) % 256;
        if (c.Kg && 0 == c.Kg[d]) return null;
        var f = c.values[d];
        return q.j.wg ? q.j.wg(f, q.j.h ? " " + h.units[q.j.h] : "", c.Kg[d]) : q.j.Qe(f / 1E3) + (q.j.h ? " " + h.units[q.j.h] : "")
    };
    q.al = function () {
        q.Rk = {G: q.vk(h.Vc), time: h.Vc, Kd: h.u};
        q.label && q.Gn()
    };
    q.Wm = 0;
    q.Xm = 0;
    q.Gn = function () {
        var a = q.ym(q.Wm, q.Xm);
        null !== a ? (q.label.innerHTML = a.replace(/\(([^\)]+)\)/,
            "<small>$1</small>"), q.label.style.display = "") : q.label.style.display = "none"
    };
    q.onmousemove = function (a, b, c) {
        "SPAN" == c.tagName && (c = c.parentNode);
        var d = "A" == c.tagName ? c.getBoundingClientRect().bottom * H - q.label.offsetHeight - c.offsetHeight - 6 * H : b;
        c.onmousemove && (b = d = -1E6);
        g.setTransform(q.label, " translate(-50%, 0) scale(" + H + ") translate(" + a / H + "px, " + d / H + "px)");
        0 > a ? q.label.style.display = "none" : (q.Wm = a, q.Xm = b, q.Gn())
    };
    q.ii = function (a, b) {
        var c = {G: q.vk(a), time: new Date(a), Kd: h.u};
        if (aa[h.u].$g) return L.ii(c,
            b);
        for (var d = k.floor(R / 256), f = k.floor(M / 256), r = k.ceil((R + N) / 256) + 1 - d, e = k.ceil((M + J) / 256) + 1 - f, g = r * e, l = 0, I = 0; I < r; I++) for (var G = 0; G < e; G++) {
            var n = E.Wi(d + I, f + G, V, c, function () {
                l++;
                l == g && b()
            });
            n && 0 < n.status && l++
        }
        l == g && b()
    };
    q.Qo = function (a, b, c) {
        if (a.values) {
            for (var d = 256 / 7, f = 256 / 7, r = b % 2, e = k.min(q.j.opacity / .6, 1), g = d / 2; 256 > g; g += d) for (var h = f / 2 + ((r = !r) ? f / 4 : -f / 4); 256 > h; h += f) {
                var l = k.round(g), G = k.round(h), n = q.j.Qe(a.values[256 * G + l] / 1E3);
                q.context.globalAlpha = "0" != n ? e : e / 2;
                q.context.fillText(n, 256 * b - R + l, 256 * c -
                    M + G)
            }
            q.context.globalAlpha = 1
        }
    };
    q.vk = function (a) {
        var b = h.Cg(), c = "auto" == h.ce ? Pa : K[b];
        if (c.g) {
            for (var d = [], f = 0; f < c.g.length; f++) if (!c.g[f].b || -1 != c.g[f].b.indexOf(h.u)) {
                var r = c.g[f].G, e = K[r].b[h.u];
                a = +a;
                if (e) for (var g = 0; g < e.length; g++) V >= c.g[f].jf && a >= e[g].Zd && a <= e[g].timeEnd && 0 == a % e[g].$d && d.push(r)
            }
            d.push(b);
            return d
        }
        return b
    };
    q.Ae = function (a) {
        a && clearTimeout(q.fn);
        var b = !1, c = {G: q.vk(h.Vc), time: h.Vc, Kd: h.u}, d = [], f = {};
        q.context.clearRect(0, 0, N, J);
        if (aa[h.u].$g) return L.Ae(c, a);
        for (var r = k.floor(R /
            256), e = k.floor(M / 256), g = k.floor((R + N) / 256), Z = k.floor((M + J) / 256), I = k.round((R + N / 2) / 256), G = k.round((M + J / 2) / 256), p = (g - r + 1) * (Z - e + 1), u = 1, w = 0, T = 0, ca = T = 1, C = 3, x = !1, y = [], P = Date.now(); p;) {
            if (I >= r && G >= e && I <= g && G <= Z) {
                var Q = E.Wi(I, G, V, c, a && q.Ae);
                if (Q && Q.cf) {
                    q.context.globalAlpha = b ? k.min((P - Q.ck) / 500, 1) : 1;
                    q.context.drawImage(Q.cf.canvas, Q.cf.x, Q.cf.y, 256, 256, 256 * I - R, 256 * G - M, 256, 256);
                    if (Q.cf.Lf) for (var S = 0; S < Q.cf.Lf.length; S++) y.push({
                        x: 256 * I - R + Q.cf.Lf[S] % 256,
                        y: 256 * G - M + k.floor(Q.cf.Lf[S] / 256),
                        type: "lightning"
                    });
                    h.fg && q.Qo(Q, I, G);
                    if (Q.ze) for (S = 0; S < Q.ze.length; S++) f[Q.ze[S]] || (f[Q.ze[S]] = !0, d.push(Q.ze[S]))
                }
                Q && 2 == Q.status ? Q.empty || (x = !0) : b = !0;
                p--
            }
            --T || (T = -w, w = u, u = T, --C || (ca++, C = 2), T = ca);
            I += u;
            G += w
        }
        h.ze.join("+") != d.join("+") && (h.ze = d, n.$k(), n.b.update(), n.ve.model.refresh(), n.b.wj(), l.He());
        q.Lf = y.length ? y : null;
        b || (q.al(), v.Ye(), q.Ll && (x ? q.Ll = !1 : v.H(1)));
        q.Pf = b;
        n.xi()
    };
    q.sf = [];
    q.qh = function () {
        if (q.A) {
            if (!q.j) return q.Rl();
            q.A.onclick = null;
            q.A.className = q.A.title = "";
            q.sf.length = 0;
            var a = q.j, b = a.min, c = a.max;
            if (h.units[a.h]) {
                var d =
                    ma[a.h][h.units[a.h]], f = a.yg && a.yg[h.units[a.h]] || {};
                d.hj && (q.A.className = "lb", q.A.title = g.Od(u.hc, {unit: d.hj}), q.A.onclick = function () {
                    h.ak(a.h, d.hj);
                    return !1
                });
                q.sf.push({Jh: !0, text: h.units[a.h]});
                f.A ? r = f.A : d.A && (r = d.A);
                "undefined" != typeof d.tp && (b = d.tp);
                "undefined" != typeof d.sp && (c = d.sp)
            }
            if (!r) for (var f = (c - b) / 14, r = [], c = 0; 15 > c; c++) r.push(b + c * f);
            b = [];
            f = [];
            for (c = 0; c < r.length; c++) {
                var e = k.round((k.min(k.max(r[c], a.min), a.max) - a.min) / a.step);
                b.push(q.nq(a.Mi[e]));
                f.push(144 <= a.Fk[e] ? "#000" : "#FFF")
            }
            for (c =
                     r.length - 1; 0 <= c; c--) {
                var e = b[c], l = e[3] / 255;
                q.sf.push({
                    text: a.Qe(r[c] / 1E3, !0),
                    xn: f[c],
                    Ml: "rgba(" + e.slice(0, 3).join(",") + "," + l.toFixed(2) + ")"
                })
            }
            q.Rl()
        }
    };
    q.Rl = function () {
        for (; q.A.firstChild;) q.A.removeChild(q.A.firstChild);
        if (q.j) {
            for (var a = 0; a < q.sf.length; a++) {
                var b = q.sf[a];
                g.a("span", {
                    textContent: b.text,
                    className: b.Jh ? "zh" : "jd",
                    style: b.Jh ? "" : "background: " + b.Ml + "; color: " + b.xn,
                    parent: q.A
                })
            }
            q.A.appendChild(q.Im)
        }
    };
    q.resize = function () {
        q.ee.width = N;
        q.ee.height = J;
        q.context.font = qb + " 'Helvetica Neue', Arial, Helvetica, sans-serif";
        q.context.textAlign = "center";
        q.context.textBaseline = "middle";
        q.context.fillStyle = "#000";
        q.context.imageSmoothingEnabled = !0;
        q.context.imageSmoothingQuality = "high";
        q.Ae()
    };
    q.lf = {x: 0, y: 0};
    q.Sj = function () {
        g.setTransform(q.ee, "translate(" + q.lf.x + "px, " + q.lf.y + "px)")
    };
    q.bi = -1;
    q.moveBy = function (a, b, c) {
        clearTimeout(q.fn);
        c ? q.Ae(!0) : (q.Ae(), q.fn = setTimeout(function () {
            q.Ae(!0)
        }, E.uj / 2))
    };
    var W = {};
    W.canvas = g.a("canvas");
    W.context = W.canvas.getContext("2d");
    W.pe = function () {
    };
    W.bj = Date.now();
    W.ej = 0;
    W.loop = function () {
        Date.now();
        if (l.paused || !q.Lf) W.gj && (W.context.clearRect(0, 0, N, J), W.gj = !1); else {
            var a = W.context;
            a.globalCompositeOperation = "destination-in";
            a.globalAlpha = .92;
            a.fillRect(0, 0, N, J);
            a.globalCompositeOperation = "source-over";
            a.globalAlpha = 1;
            a.beginPath();
            W.Fp();
            W.gj = !0
        }
    };
    W.Fp = function () {
        var a = W.context;
        a.beginPath();
        for (var b = 4 >= V, c = (V - 4) / 5, d = b ? .998 : .9994 + (.999992 - .9994) * c, f = 0; f < q.Lf.length; f++) {
            var r = q.Lf[f];
            if (!(k.random() < (r.Ti ? .9 : d))) {
                if (r.Ti) c = r.Ti, r.Ti = null; else {
                    d = 5 + 7 * c;
                    W.context.lineWidth = b ? 9 : 1.5 + 2.5 * (1 - c);
                    c = [];
                    for (f = 0; 3 > f; f++) {
                        var e = [];
                        c.push(e);
                        var g = 2 * k.PI / 3 * f + k.PI / 3 / 2 * k.random(), h = r.x, l = r.y, G = 4;
                        if (b) {
                            e.push([h, l]);
                            break
                        }
                        for (var n = d / 2 + k.random() * d / 2; 0 < n; n--) {
                            G += 1.25 * (k.random() - .25);
                            h += k.cos(g) * G;
                            l -= k.sin(g) * G;
                            g += k.PI / 3 * (k.random() - .5) * 1.125;
                            e.push([h, l]);
                            var p = k.round(h), u = k.round(l),
                                v = E.Wi(k.floor((p + R) / 256), k.floor((u + M) / 256), V, q.Rk);
                            if (v && 2 == v.status) {
                                if (p = (u + M) % 256 * 256 + (p + R) % 256, !v.Kg || 33 != v.Kg[p]) break
                            } else break
                        }
                    }
                    r.Ti = c
                }
                for (f = 0; f < c.length; f++) for (a.moveTo(r.x, r.y), n = 0; n < c[f].length; n++) a.lineTo(c[f][n][0],
                    c[f][n][1]);
                break
            }
        }
        a.stroke()
    };
    W.resize = function () {
        W.canvas.width = N;
        W.canvas.height = J;
        W.context.lineCap = "round";
        W.context.strokeStyle = "#FFF"
    };
    W.moveBy = function () {
        W.gj && (W.context.clearRect(0, 0, N, J), W.gj = !1)
    };
    var v = {};
    v.ag = g.a("canvas");
    v.Dg = v.ag.getContext("2d");
    v.jg = g.a("canvas");
    v.oh = v.jg.getContext("2d");
    v.Di = g.a("canvas");
    v.Te = v.Di.getContext("2d");
    v.resize = function () {
        g.setTransform(v.gf, "scale(" + 1 / H + ")");
        v.gf.style.width = N + "px";
        v.gf.style.height = J + "px";
        v.Di.width = v.ag.width = v.jg.width = N;
        v.Di.height =
            v.ag.height = v.jg.height = J;
        v.Te.fillStyle = "#555";
        v.Te.clearRect(0, 0, N, J);
        v.Dg.fillStyle = "#555";
        v.Ae(!0)
    };
    v.Vk = function () {
        g.setTransform(v.gf, "scale(" + (D.innerWidth / N).toFixed(5) + ", " + (D.innerHeight / J).toFixed(5) + ")")
    };
    v.Sg = [];
    v.Ag = [];
    v.Vo = "WebkitFontSmoothing" in B.documentElement.style;
    v.ii = function (a, b, c) {
        var d = k.floor((a + N) / 512) + 1, f = k.floor(b / 512);
        b = k.floor((b + J) / 512) + 1;
        for (a = k.floor(a / 512); a < d; a++) for (var r = f; r < b; r++) O.Lm(a, r, c, function () {
        })
    };
    v.Zk = !1;
    v.jn = function () {
        v.Zk || (v.Zk = !0, requestAnimationFrame(v.Ae))
    };
    v.Ae = function (a) {
        v.Zk = !1;
        v.oh.clearRect(0, 0, N, J);
        a && v.Dg.clearRect(0, 0, N, J);
        if (10 <= V) return v.Vp();
        a = v.De || q.De || "#FFF";
        "#FFF" != a && (v.oh.fillStyle = a);
        var b = k.floor(R / 512), c = k.floor((R + N) / 512) + 1, d = k.floor(M / 512), f = k.floor((M + J) / 512) + 1;
        for (v.Ag.length = 0; b < c; b++) for (var r = d; r < f; r++) {
            var e = O.Lm(b, r, V, v.jn);
            if (e) {
                2 == e.Ik && (v.Dg.clearRect(512 * b - R, 512 * r - M, 512, 512), v.Dg.drawImage(e.land, 512 * b - R, 512 * r - M), v.oh.drawImage(e.border, 512 * b - R, 512 * r - M), "#FFF" != a && (v.oh.globalCompositeOperation = "source-atop", v.oh.fillRect(512 *
                    b - R, 512 * r - M, 512, 512), v.oh.globalCompositeOperation = "source-over"));
                if (e.Bp) for (var h = 0; h < e.cities.length; h++) {
                    var l = 512 * b - R + e.cities[h].x, I = 512 * r - M + e.cities[h].y;
                    v.Ag.push({
                        x: l,
                        y: I,
                        size: k.min(k.max(k.floor(k.log(e.cities[h].population) - 16 + V), 1), 5),
                        name: v.$l(e.cities[h]),
                        url: e.cities[h].url
                    })
                }
                if (e.Mm) for (h = 0; h < e.cams.length; h++) {
                    var l = 512 * b - R + e.cams[h].x, I = 512 * r - M + e.cams[h].y, G = e.cams[h].i;
                    v.Ag.push({x: l, y: I, name: e.cams[h].n, type: "cam", zg: G, url: g.Od($a, {id: G})})
                }
            }
        }
        v.Ye()
    };
    v.Vp = function () {
        var a = k.floor(R /
            256), b = k.floor((R + N) / 256) + 1, c = k.floor(M / 256), d = k.floor((M + J) / 256) + 1;
        for (v.Ag.length = 0; a < b; a++) for (var f = c; f < d; f++) {
            var r = O.yp(a, f, V + 1, v.jn);
            if (r && (r.Cp && (v.Dg.clearRect(256 * a - R, 256 * f - M, 256, 256), v.Dg.drawImage(r.land, 256 * a - R, 256 * f - M)), r.Mm)) for (var e = 0; e < r.cams.length; e++) {
                var h = r.cams[e].i;
                v.Ag.push({
                    x: 256 * a - R + r.cams[e].x,
                    y: 256 * f - M + r.cams[e].y,
                    name: r.cams[e].n,
                    type: "cam",
                    zg: h,
                    url: g.Od($a, {id: h})
                })
            }
        }
        v.Ye()
    };
    v.$l = function (a) {
        return a.name + (/[a-z]/i.test(a.name || !a.ascii) ? "" : "\r\n(" + a.ascii + ")")
    };
    v.Ye =
        function () {
            if (v.gf && (!Sa || !h.paused)) {
                for (var a = v.Ag.slice(0), b = 512 * (1 << V), c = {}, d = v.vm(h.Vc), f = v.ap(h.Vc), f = y.Oe.concat(f).concat(d), r = 0; r < k.ceil((N + 1024) / b) + 1; r++) for (d = 0; d < f.length; d++) {
                    var e = f[d];
                    if (e) {
                        var l = (180 + e.lon) / 360 * b - R + b * r, n = h.$h((90 - e.lat) / 180) * b - M;
                        if (!(-512 > l || l > N + 512 || -512 > n || n > J + 512)) {
                            for (var I = 0; I < a.length; I++) {
                                var G = a[I].x - l, p = 2 * (a[I].y - n);
                                c[I] = k.min(G * G + p * p, c[I] || Infinity)
                            }
                            a.push({
                                x: l,
                                y: n,
                                nm: e.style || (e.temporary ? "qo" : "qo am"),
                                size: 5,
                                name: e.name,
                                url: e.url || y.bk(l, n),
                                value: "value" in
                                e || e.valueless ? e.value : q.ym(l, n),
                                type: e.type
                            })
                        }
                    }
                }
                for (d = b = 0; d < a.length; d++) if (!(32 > c[d] || ("pressure" == a[d].type || "cyclone" == a[d].type) && 500 > c[d] || !h.df && "cam" == a[d].type)) {
                    v.Sg[b] || (v.Sg[b] = g.a("a", {
                        className: "bf",
                        children: ["", g.a("span")],
                        parent: v.gf,
                        Vn: b
                    }));
                    var u = v.Sg[b++], e = x.clickLink ? y.bk(a[d].x, a[d].y) : a[d].url;
                    u.onmousedown = u.onmousemove = u.onmouseleave = null;
                    u.onclick = y.Ki;
                    u.removeAttribute("data-value");
                    u.firstChild.data = "";
                    u.title = "";
                    u.href = e;
                    r = a[d].nm;
                    f = 2E3 > c[d];
                    "cyclone" != a[d].type && a[d].type ?
                        "cam" == a[d].type && (u.onmousedown = y.Zl.bind({href: e}), sa || (u.ontouchstart = function () {
                            u.onmousemove = u.ontouchstart = null
                        }, u.onmousemove = v.vo.bind(a[d]), u.onmouseleave = v.uo), f = !0, r = "eg " + ({
                            actual: "tm",
                            moderate: "os",
                            old: "aa",
                            "": "sg"
                        }[v.Zj[a[d].zg] || ""] || "")) : (u.onmousedown = y.Zl.bind({
                        href: e,
                        _auxId: u._auxId
                    }), a[d].nm || (r = ["ci", "sd", "nt", "la", "ji"][a[d].size - 1]), f && (u.title = a[d].name.trim() + (a[d].value ? (a[d].name.trim() ? ", " : "") + a[d].value : "")));
                    e = v.Jm[q.wk(a[d].x, a[d].y)];
                    u.className = "bf yh " + (e ? e + " " :
                        "") + r + (f ? " sx" : "");
                    r = 0;
                    f || (a[d].value && u.setAttribute("data-value", a[d].name.trim() ? a[d].value : ""), u.firstChild.data = a[d].name.trim() || a[d].value, v.Vo && (r = u.getBoundingClientRect().width % 2 / 2));
                    g.setTransform(u, "translate(" + (r + a[d].x).toFixed(3) + "px, " + a[d].y.toFixed(3) + "px) translate(-50%, -100%)")
                }
                for (; v.Sg[b];) g.setTransform(v.Sg[b++], "translate(-10000px, -10000px)")
            }
        };
    v.Jm = [];
    v.pe = function () {
        function a(a, b, c) {
            e || (e = []);
            for (var d = V + a, f = 0; f < e.length; f++) d += e[f].zoom;
            var f = k.log(k.ceil(J / 512)) / k.log(2),
                r = q.j && q.j.Ve ? 9 : 10;
            if (!(d < f || d > r)) {
                h.pause();
                e.push({x: b, y: c, zoom: a, scale: k.pow(2, a)});
                var l = R, n = M, p = V;
                a = [];
                v.Te.clearRect(0, 0, N, J);
                g.kl(v.Hd, b / H + "px " + c / H + "px");
                for (f = 0; f < e.length; f++) l = (l + e[f].x) * e[f].scale - e[f].x, n = (n + e[f].y) * e[f].scale - e[f].y, p += e[f].zoom, v.Te.translate(e[f].x, e[f].y), v.Te.scale(e[f].scale, e[f].scale), v.Te.translate(-e[f].x, -e[f].y), a.push("translate(" + (e[f].x - b) + "px, " + (e[f].y - c) + "px)"), a.push("scale(" + e[f].scale + ")"), a.push("translate(" + -(e[f].x - b) + "px, " + -(e[f].y - c) + "px)");
                v.Hd.className = "lu";
                g.setTransform(v.Hd, a.join(" "));
                v.Te.drawImage(v.ag, 0, 0);
                v.Te.drawImage(v.jg, 0, 0);
                v.Te.setTransform(1, 0, 0, 1, 0, 0);
                clearTimeout(u);
                u = setTimeout(function () {
                    v.Hd.className = "";
                    g.setTransform(v.Hd, "");
                    h.move(l, n, p);
                    e = null;
                    u = setTimeout(function () {
                        v.Hd.className = "lu";
                        v.Te.clearRect(0, 0, N, J)
                    }, 50);
                    h.wl()
                }, 500)
            }
        }

        v.Hd = g.a(0, {id: "b", className: "lu", parent: B.body});
        for (var b in Za) {
            var c = b.match(/(\d+)\-(\d+)/);
            if (c) for (var d = 1 * c[1]; d < c[2]; d++) v.Jm[d] = Za[b]
        }
        v.Hd.appendChild(v.ag);
        v.Hd.appendChild(q.ee);
        v.Hd.appendChild(l.ee);
        v.Hd.appendChild(W.canvas);
        v.Hd.appendChild(v.jg);
        v.mp();
        var f;
        Ia(v.Hd, function (a) {
            var b = this;
            clearInterval(f);
            var c = R, d = M, e = R, r = M, g = a.clientX, l = a.clientY, n = Date.now(), u = !1;
            return {
                Ch: function (a) {
                    if (!u) {
                        if (2 > k.abs(a.clientX - g) && 2 > k.abs(a.clientY - l)) return;
                        h.pause();
                        u = !0;
                        b.className = "ws"
                    }
                    h.move(c + (g - a.clientX) * H, d + (l - a.clientY) * H, V);
                    var f = R, q = M;
                    setTimeout(function () {
                        e = f;
                        r = q
                    }, 100);
                    n = Date.now()
                }, Dh: function (a) {
                    b.className = "";
                    if (u) {
                        var c = R - e, d = M - r, G = R, q = M, p = n + 500;
                        f = setInterval(function () {
                            var a =
                                p - Date.now(), b = 1 - k.pow(a / 500, 3);
                            0 > a || 5 > (k.abs(c) + k.abs(d)) * b ? (clearInterval(f), h.wl()) : h.move(G + c * b, q + d * b, V)
                        }, 13)
                    } else a.target == v.gf && y.Nm(g * H, l * H)
                }
            }
        });
        v.Hd.ontouchstart = v.mq;
        v.Hd.onmousemove = function (a) {
            if (v.Zg) v.Zg--; else q.onmousemove(a.clientX * H, a.clientY * H, a.target)
        };
        v.Hd.onmouseleave = function () {
            if (!v.Zg) q.onmousemove(-1E4, -1E4, {})
        };
        n.N.onclick = function () {
            a(1, N / 2, J / 2)
        };
        n.H.onclick = function () {
            a(-1, N / 2, J / 2)
        };
        v.H = function (b) {
            a(-b, N / 2, J / 2)
        };
        var r = !1;
        Date.now();
        "onwheel" in v.Hd || "onmousewheel" in
        v.Hd || v.Hd.addEventListener("DOMMouseScroll", function (a) {
            return this.onwheel(a)
        });
        v.Hd.onmousewheel = v.Hd.onwheel = function (b) {
            if (r) return !1;
            r = !0;
            setTimeout(function () {
                r = !1
            }, 45);
            Date.now();
            0 > (b.detail || -b.wheelDelta || b.deltaY) ? a(1, b.clientX * H, b.clientY * H) : a(-1, b.clientX * H, b.clientY * H);
            return !1
        };
        v.Eq = a;
        var e, u;
        v.gf = g.a(0, {parent: v.Hd, id: "g"});
        v.Xq = g.Mo({parent: v.Hd, width: "100%", height: "100%"});
        v.to();
        g.kl(v.gf, "0 0")
    };
    v.mp = function () {
        g.hk(jb, function (a) {
            v.ek = a.ecmwf || a;
            v.Ye()
        })
    };
    v.ap = function (a) {
        if (3 >
            V || !h.Eh) return [];
        var b = h.Cg();
        if (a < (K[b].ji || Infinity)) return [];
        var b = {model: b, time: a, cache: String(K[b].Jd).replace(/0+$/, "")}, c = g.Od(kb, b), b = [];
        if (v.Up == c) {
            a = v.vm(a);
            for (var d = [], f = 0; f < a.length; f++) d.push({d: Infinity});
            for (var r = 0; 2 > r; r++) for (var e = ["l", "h"][r], l = [u.Yd, u.Xd][r], n = 0; n < v.cn[e].length; n++) {
                var I = v.cn[e][n], G = {};
                G.lat = I[0];
                G.lon = I[1];
                G.value = p.pressure.Qe(I[2]) + "\u00a0" + h.units.pressure;
                G.name = l;
                var q = k.abs(1E3 - I[2]);
                G.style = "qo xo " + (q > La[1] ? q > La[2] ? q > La[3] ? q > La[4] ? "tt" : "lw" : "bu" :
                    "xb" : "xc");
                G.type = "pressure";
                for (f = 0; f < a.length; f++) {
                    var q = I[0] - a[f].lat, w = I[1] - a[f].lon;
                    2 < k.abs(q) || 2 < k.abs(w) || (q = q * q + w * w, q < d[f].d && (d[f].d = q, d[f].index = b.length))
                }
                b.push(G)
            }
            for (f = 0; f < a.length; f++) isFinite(d[f].d) && (b[d[f].index] = null)
        } else g.hk(c, function (a) {
            v.cn = a;
            v.Up = c;
            v.Ye()
        });
        return b
    };
    v.to = function () {
        v.Zj = {};
        g.hk("https://webcams.ventusky.com/update.json", function (a) {
            for (var b in a) for (var c = 0; c < a[b].length; c++) v.Zj[a[b][c]] = b;
            v.Ye()
        });
        v.ph = g.a(0, {parent: v.Hd, id: "s"});
        v.Vl = g.a("span", {
            parent: v.ph,
            id: "c"
        });
        v.wo = g.a("img", {
            parent: v.ph, id: "u", onload: function () {
                v.Vl.style.width = this.offsetWidth + "px"
            }
        })
    };
    v.uo = function () {
        v.ph.style.opacity = 0
    };
    v.vo = function (a) {
        this.zg != v.qp && (v.qp = this.zg, v.wo.src = g.Od("https://webcams.ventusky.com/data/{idLast2}/{id}/latest_thumb.jpg?{now:MMddHHmm}", {
            id: this.zg,
            idLast2: this.zg.substr(this.zg.length - 2),
            now: new Date
        }), v.Vl.textContent = this.name || u.location, v.ph.className = {
            actual: "vj",
            moderate: "nj",
            old: "cv",
            "": "oe"
        }[v.Zj[this.zg] || ""] || "");
        v.ph.style.opacity = 1;
        g.setTransform(v.ph,
            "translate(" + a.clientX + "px, " + (a.clientY - 9) + "px) translate(-50%, -100%)")
    };
    v.rg = function () {
        3 > V || v.Ye()
    };
    v.vm = function (a) {
        var b = [];
        if (!v.ek || !h.Eh) return b;
        a = a / 1E3;
        for (var c = 0; c < v.ek.length; c++) {
            var d = v.ek[c];
            if (!(a < d.times[0] || a > d.times[d.times.length - 1])) {
                for (var f = {}, r = 0; a > d.times[r];) r++;
                if (0 < r) {
                    var e = (a - d.times[r - 1]) / (d.times[r] - d.times[r - 1]);
                    f.lat = d.gps[r - 1][0] + (d.gps[r][0] - d.gps[r - 1][0]) * e;
                    f.lon = d.gps[r - 1][1] + (d.gps[r][1] - d.gps[r - 1][1]) * e
                } else f.lat = d.gps[r][0], f.lon = d.gps[r][1];
                r = d.cat[r];
                f.style = "qo vd " + (r > Ka[1] ? r > Ka[2] ? r > Ka[3] ? r > Ka[4] ? "he" : "se" : "mw" : "oa" : "cd");
                f.name = d.name;
                f.valueless = !0;
                f.type = "cyclone";
                b.push(f)
            }
        }
        return b
    };
    v.Wh = 0;
    v.Zg = 0;
    v.mq = function () {
        function a() {
            g.setTransform(v.Hd, "translate(" + f + "px, " + r + "px) scale(" + e + ")")
        }

        function b(a) {
            try {
                a.preventDefault()
            } catch (e) {
            }
            for (var f = 0; f < a.changedTouches.length; f++) for (var r = 0; r < T.length; r++) if (T[r].id == a.changedTouches[f].identifier) {
                T.splice(r, 1);
                break
            }
            if (!T.length) {
                try {
                    B.ontouchstart = B.ontouchmove = B.ontouchend = B.ontouchcancel =
                        null, B.removeEventListener("touchend", b), B.removeEventListener("touchcancel", b)
                } catch (e) {
                }
                if (q) G ? c() : d(); else {
                    var g = a.changedTouches[0].clientX * H, k = a.changedTouches[0].clientY * H;
                    if (v.Wh) clearTimeout(v.Wh), v.Wh = 0, v.Eq(1, g, k); else {
                        f = a.target;
                        "SPAN" == f.tagName && (f = f.parentNode);
                        if (f.onclick) f.onclick(event); else {
                            if (f.onmousedown) f.onmousedown(); else f == v.gf && y.Ep(g, k);
                            a.target == v.gf && (v.Wh = setTimeout(function () {
                                v.Wh = 0;
                                y.Nm(g, k)
                            }, 300))
                        }
                        v.Ji = f.Vn
                    }
                }
            }
        }

        function c() {
            var b = 1E3 * u;
            g.un(v.Hd, b + "ms");
            v.ii(R * I -
                l * H, M * I - n * H, V + G);
            setTimeout(function () {
                f = l;
                r = n;
                e = I;
                a();
                setTimeout(function () {
                    g.un(v.Hd, "");
                    setTimeout(d, 50)
                }, b)
            }, 50)
        }

        function d() {
            v.Te.clearRect(0, 0, N, J);
            v.Te.translate(l * H, n * H);
            v.Te.scale(I, I);
            v.Te.drawImage(v.ag, 0, 0);
            v.Te.drawImage(v.jg, 0, 0);
            v.Te.setTransform(1, 0, 0, 1, 0, 0);
            h.move(R * I - l * H, M * I - n * H, V + G);
            r = f = 0;
            e = 1;
            a();
            h.wl()
        }

        if (!B.ontouchstart) {
            v.Hd.className = "";
            v.Zg = 100;
            g.kl(v.Hd, "0 0");
            var f = 0, r = 0, e = 1, l = 0, n = 0, I = 1, G = 0, u = 0, q = !1, p = k.log(k.ceil(J / 512)) / k.log(2),
                T = [];
            B.ontouchstart = function (a) {
                for (var b =
                    0; b < a.changedTouches.length; b++) T.push({
                    x: (a.changedTouches[b].clientX - f) / e,
                    y: (a.changedTouches[b].clientY - r) / e,
                    clientX: a.changedTouches[b].clientX,
                    clientY: a.changedTouches[b].clientY,
                    id: a.changedTouches[b].identifier
                });
                !q && 1 < T.length && (q = !0, h.pause());
                v.Zg = 100;
                return !1
            };
            B.onmousemove = function () {
                v.Zg && v.Zg--
            };
            try {
                B.addEventListener("touchend", b, {passive: !1}), B.addEventListener("touchcancel", b, {passive: !1})
            } catch (ca) {
                B.ontouchcancel = B.ontouchcancel = b
            }
            B.ontouchmove = function (b) {
                for (var c = 0; c < T.length; c++) {
                    T[c].rh =
                        0;
                    for (var d = T[c].Yh = 0; d < b.changedTouches.length; d++) if (T[c].id == b.changedTouches[d].identifier) {
                        T[c].clientX = b.changedTouches[d].clientX;
                        T[c].clientY = b.changedTouches[d].clientY;
                        T[c].rh = (b.changedTouches[d].clientX - f) / e - T[c].x;
                        T[c].Yh = (b.changedTouches[d].clientY - r) / e - T[c].y;
                        break
                    }
                }
                if (!q) if (3 < k.abs(T[0].rh) || 3 < k.abs(T[0].Yh)) q = !0, h.pause(); else return;
                h.pause();
                if (1 == T.length) f += T[0].rh * e, r += T[0].Yh * e, l += T[0].rh * e, n += T[0].Yh * e; else if (2 <= T.length) {
                    b = T[0];
                    var g = T[1], c = b.clientX, d = b.clientY, v = g.x - b.x,
                        w = g.y - b.y, x = g.clientX - c, g = g.clientY - d, y = v * v + w * w;
                    if (0 < y) {
                        var A = (v * x + w * g) / y, y = (v * g - w * x) / y, A = k.sqrt(A * A + y * y);
                        f = c + x / 2 - (b.x + v / 2) * A;
                        r = d + g / 2 - (b.y + w / 2) * A;
                        e = A;
                        A = k.log(A) / k.log(2);
                        G = k.max(k.min(k.round(A + V), 10), p) - V;
                        u = k.abs(G - A);
                        A = k.pow(2, G);
                        l = c + x / 2 - (b.x + v / 2) * A;
                        n = d + g / 2 - (b.y + w / 2) * A;
                        I = A
                    }
                }
                a();
                for (c = 50; c < T.length; c++) T[c].x = (T[c].clientX - f) / e, T[c].y = (T[c].clientY - r) / e;
                return !1
            }
        }
    };
    v.Ao = function () {
        if ("number" == typeof v.Ji) {
            var a = v.Sg[v.Ji];
            a.parentNode.removeChild(a);
            v.Sg[v.Ji] = null;
            v.Ji = null
        }
    };
    var Sa = !0, N, J, V = 3,
        R = 1600, M = 800, h = {
            Yq: function (a) {
                return (2 * k.atan(k.exp((2 * a - 1) * k.PI)) - k.PI / 2) / k.PI * 180
            }
        }, Ra = 2 / k.PI, rb = 2 * k.PI;
    h.Ih = function (a) {
        return Ra * k.atan(k.exp((2 * a - 1) * k.PI))
    };
    h.$h = function (a) {
        return k.log(k.tan(a * k.PI / 2)) / rb + .5
    };
    h.move = function (a, b, c) {
        b = k.round(k.max(k.min(b, 512 * (1 << c) - J), 0));
        a = k.round(a);
        var d = R - a, f = M - b, r = V - c;
        R = a;
        M = b;
        V = c;
        l.moveBy(d, f, r);
        q.moveBy(d, f, r);
        W.moveBy(d, f, r);
        a = !1;
        r ? (v.Dg.drawImage(v.Di, 0, 0), q.al()) : a = !0;
        v.Ae(a);
        h.Yp()
    };
    h.loop = function () {
        h.paused || (l.loop(), W.loop())
    };
    h.pause = function () {
        h.paused =
            !0;
        Sa && (v.gf.style.display = "none")
    };
    h.wl = function () {
        h.paused = !1;
        R = pa(R, 512 * (1 << V));
        Sa && (v.gf.style.display = "", v.Ye());
        q.Ae(!0);
        l.hn();
        h.zf()
    };
    h.ah = function (a, b, c) {
        var d = 512 * (1 << c);
        R = (180 + b) / 360 * d - (!y.we || N < 780 * H ? N : N - 540 * H) / 2;
        M = h.$h((90 - a) / 180) * d - J / 2;
        h.move(R, M, c)
    };
    h.wi = function (a, b) {
        var c = 512 * (1 << V);
        return {lat: 90 - 180 * h.Ih((M + b) / c), lon: (R + a) / c % 1 * 360 - 180, zoom: V}
    };
    h.vj = function () {
        return h.wi(N / 2, J / 2)
    };
    h.Yp = function () {
        clearTimeout(h.Zp);
        h.Zp = setTimeout(function () {
                try {
                    localStorage.setItem("last", JSON.stringify(h.vj()))
                } catch (a) {
                }
            },
            500)
    };
    h.xp = function () {
        try {
            var a = JSON.parse(localStorage.getItem("last"))
        } catch (b) {
        }
        if (a && a.lon && a.lat && a.zoom) return a
    };
    var Ga = [], aa = {};
    h.Sp = function (a, b, c, d, f, r) {
        var e = b.Zi || a.Zi, g = b.start || a.start, h = b.end || a.end;
        if (e) for (var l = 0; l < e.length; l++) {
            var n = k.max(e[l].start || 0, g), q = k.min(e[l].end || Infinity, h), u = 6E4 * (b.C || e[l].C || a.C),
                q = q - (q - n) % u, p = f - (f - n) % 108E5;
            n < p && 108E5 > u ? q > p ? (a.b[d].push({Zd: p, timeEnd: q, $d: u, pg: c}), a.b[d].push({
                    Zd: n,
                    timeEnd: p,
                    $d: 108E5,
                    pg: c
                })) : a.b[d].push({Zd: n, timeEnd: q, $d: 108E5, pg: c}) :
                a.b[d].push({Zd: n, timeEnd: q, $d: u, pg: c})
        } else e = 6E4 * (b.C || a.C), f -= (f - g) % 108E5, +g < +f && 108E5 > e ? (a.b[d].push({
            Zd: f,
            timeEnd: h - (h - g) % e,
            $d: e,
            pg: c
        }), a.b[d].push({Zd: g, timeEnd: f, $d: 108E5, pg: c})) : a.b[d].push({
            Zd: g,
            timeEnd: h - (h - g) % e,
            $d: e,
            pg: c
        });
        r && (r.b[d] = r.b[d] ? r.b[d].concat(a.b[d]) : a.b[d].slice(0), b.mk && r.b[d].push({
            Zd: a.b[d][a.b[d].length - 1].timeEnd,
            timeEnd: b.mk,
            pg: c,
            $d: Infinity,
            lk: !0
        }))
    };
    h.Tp = function () {
        var a = new Date(x.now);
        a.setDate(a.getDate() + -3);
        for (var b = {b: {}, g: Pa.g}, c = 0; c < Y.length; c++) {
            var d = K[Y[c]],
                f = Pa.Ip.indexOf(Y[c]);
            d.b = {};
            for (var r in d.Md) d.b[r] = [], h.Sp(d, d.Md[r], Y[c], r, a, -1 < f ? b : null)
        }
        K.auto = b;
        for (c = 0; c < la.length; c++) if (a = la[c], a.f) for (b = 0; b < a.f.length; b++) d = a.f[b], aa[d.id] = {
            id: d.id,
            file: d.file,
            Xg: d.Xg,
            Wg: d.Wg,
            Bg: d.Bg,
            Rg: d.Rg,
            $g: d.$g,
            group: a.id,
            yc: d.yc || b,
            Xi: a.kind,
            B: d.B || "10m",
            label: d.label || d.id,
            ki: d.ki,
            description: d.description || a.description || a.id
        }, Ga.push(aa[d.id]), a.f[b].Hg && (a.Hg = d.id); else aa[a.id] = {
            id: a.id, file: a.file, Xg: a.Xg, Wg: a.Wg, Bg: a.Bg, Rg: a.Rg, $g: a.$g, group: a.id, B: a.B ||
                "10m", description: a.description || a.id
        }, Ga.push(aa[a.id])
    };
    h.Ue = "normal";
    h.Vc = new Date(x.now);
    h.ce = x.model;
    h.ze = [];
    h.Cg = function (a) {
        for (var b = +(a || h.Vc), c = K[h.ce].b[h.u], d = 0; d < c.length; d++) if (b >= c[d].Zd && b <= c[d].timeEnd) return c[d].pg;
        console.warn("Unknown model for " + h.ce + ", layer " + h.u + ", time " + a);
        return x.model
    };
    h.setTime = function (a) {
        for (var b = K[h.ce].b[h.u], c = 0; c < b.length; c++) {
            var d = b[c].$d / 2, f = +a + d - (+a + d) % b[c].$d;
            if (f >= b[c].Zd && f <= b[c].timeEnd) {
                h.Vc = new Date(f);
                n.He();
                return
            }
        }
        for (var f = k.min(k.max(b[0].Zd,
            +a), b[0].timeEnd), d = b[0].$d / 2, f = f + d - (f + d) % b[0].$d, r = k.abs(+a - f), e = f, c = 1; c < b.length; c++) f = k.min(k.max(b[c].Zd, +a), b[c].timeEnd), d = b[c].$d / 2, f = f + d - (f + d) % b[c].$d, d = k.abs(+a - f), d < r && (r = d, e = f);
        h.Vc = new Date(e);
        n.He()
    };
    h.ci = "normal";
    h.vn = function (a) {
        h.Ue = a;
        "off" != a ? h.ci = a : l.context.clearRect(0, 0, N, J);
        var b = -1 == qa.indexOf(h.Ue);
        n.ve["wind-type"].qf(b ? "" : h.Ue);
        l.qj();
        F.ff && "off" != a && F.ff(a);
        b && (F.Th = a, g.yf("wind", F.Th))
    };
    h.u = Ea[0];
    h.il = function (a) {
        h.u = a;
        a = +h.Vc;
        var b = K[h.ce].b[h.u];
        if (b) for (var c = 0; c < b.length; c++) if (a <
            b[c].Zd || a > b[c].timeEnd || 0 != a % b[c].$d) {
            h.setTime(h.Vc);
            break
        }
        n.b.update();
        l.B != aa[h.u].B && (l.B = aa[h.u].B, l.He())
    };
    h.Ph = function (a) {
        h.ze = [];
        if (!K[h.ce].b[a]) return !1;
        h.il(a);
        aa[h.u].Rg && k.abs(h.Vc - x.now) < 6E4 * aa[h.u].Rg && h.setTime(x.now);
        n.Vj();
        n.He();
        q.He();
        h.zf(!0);
        h.log("layer", a);
        n.b.wj();
        return !0
    };
    h.rn = function (a) {
        h.ze = [];
        h.ce = a;
        "auto" == a || n.Jp || (n.ve.model.cq("gt"), n.Jp = !0);
        if (!K[a].b[h.u]) for (var b = 0; b < Ea.length; b++) if (K[a].b[Ea[b]]) {
            h.il(Ea[b]);
            break
        }
        h.setTime(h.Vc);
        n.Vj();
        n.b.update();
        h.ze =
            [h.Cg()];
        l.He();
        n.He()
    };
    h.ng = function (a) {
        h.setTime(a);
        n.b.update();
        q.He();
        l.He();
        v.Ye();
        h.zf()
    };
    h.ff = function (a) {
        A.xh && (A.xh.checked = "off" != a);
        h.vn(a);
        h.zf();
        h.log("wind", a)
    };
    h.$j = function (a) {
        q.Ll = !0;
        h.rn(a);
        q.He();
        l.He();
        h.zf();
        h.log("model", h.ce)
    };
    h.units = {};
    h.ak = function (a, b) {
        h.units[a] = b;
        var c = {}, d;
        for (d in h.units) ma[d][h.units[d]].hj && (c[d] = h.units[d]);
        g.gl("units", JSON.stringify(c));
        v.Ye();
        q.j && q.j.h == a && (h.fg && q.Ae(), q.qh())
    };
    h.zf = function (a) {
        A.xl();
        if (!y.dj) {
            var b = h.vj();
            b.G = h.ce;
            b.Kd = h.u;
            b.time = h.Vc;
            b.D = h.Ue;
            if (!x.clickLink) {
                var c = ta.ao(b);
                a ? history.pushState(b, "Ventusky", c) : history.replaceState(b, "Ventusky", c)
            }
            try {
                D.parent.postMessage({
                    state: {
                        lat: b.lat,
                        lon: b.lon,
                        zoom: b.zoom,
                        model: b.G,
                        layer: b.Kd,
                        time: b.time.format("yyyyMMdd/HHmm"),
                        timestamp: +b.time,
                        wind: b.D
                    }
                }, "*")
            } catch (d) {
            }
        }
    };
    history.pushState || (h.zf = function () {
    });
    D.addEventListener("popstate", function (a) {
        (a = a.state) && a.detail ? y.Fg(a.detail, a.title, a.yq) : (a && a.lat && a.lon && a.zoom || (a = ta.parse(location.href)), a && a.lat && a.lon && a.zoom &&
        (h.tn(a), y.close(), q.He()))
    }, !1);
    h.tn = function (a) {
        if (a.Kd || a.time) {
            a.Kd && K.auto.b[a.Kd] && h.il(a.Kd);
            if (a.time) {
                var b = "temperature-2m";
                h.u && (b = h.u);
                for (var b = K.auto.b[b], c = +a.time, d = 0; d < b.length; d++) if (c >= b[d].Zd && c <= b[d].timeEnd && 0 == c % b[d].$d) {
                    h.setTime(a.time);
                    break
                }
            }
            h.rn(a.G || "auto");
            n.ve.model.qf(a.G)
        }
        "undefined" != typeof a.D && h.vn(a.D);
        n.b.update();
        a.lat && a.lon && h.ah(a.lat, a.lon, "zoom" in a ? a.zoom : 3)
    };
    var V = x.zoom, M = R = 0, H = 1, Ha = 1, Ba = 1, ua = 0;
    h.resize = function (a) {
        if (!a) var b = h.vj();
        N = k.ceil(D.innerWidth *
            H);
        J = k.ceil(D.innerHeight * H);
        v.resize();
        q.resize(!0);
        l.resize();
        W.resize();
        A.resize();
        a || h.ah(b.lat, b.lon, b.zoom)
    };
    h.Vk = function () {
        v.Vk()
    };
    h.Ap = function (a) {
        try {
            var b = JSON.parse(a)
        } catch (d) {
        }
        for (var c in b) ma[c] && ma[c][b[c]] && (h.units[c] = b[c])
    };
    h.log = function () {
    };
    h.Pm = function () {
    };
    h.pe = function () {
        function a(a) {
            var b = k.max(D.innerWidth, D.innerHeight);
            Ba = 2560 < b ? 2560 / b : 1;
            Ha = D.devicePixelRatio || D.Fq || D.mh || 1;
            ua = k.max(k.min(320 / D.innerWidth, .8), .4);
            H = k.max(k.min(Ba * (g.Of("dpr") || 1), Ha), ua);
            h.resize(a)
        }

        function b() {
            h.loop();
            requestAnimationFrame(b)
        }

        if (D.ga) {
            h.log = function (a, b) {
                D.ga("send", "event", a, b)
            };
            var c = location.href.replace(/[?#].*/, "").replace(/\/[^\/]*$/, "/");
            h.Pm = function (a) {
                D.ga("set", "page", c + a);
                D.ga("send", "pageview")
            }
        }
        h.Tp();
        q.np();
        var d = g.Ui("units"), f = g.Of("grid");
        h.fg = f ? "1" == f : sa;
        f = g.Of("pressures");
        h.Eh = f ? "1" == f : !0;
        f = g.Of("cams");
        h.df = f ? "1" == f : !1;
        v.De = Aa[g.Of("borders")] || "";
        (function () {
            for (var a in ma) for (var b in ma[a]) h.units[a] && 1 != ma[a][b].Oa || (h.units[a] = b)
        })(ma);
        n.pe();
        n.translate(u.code);
        h.Ap(d);
        q.sn(Ea[0]);
        v.pe();
        a(!0);
        y.yo() ? (n.b.update(), h.setTime(x.now)) : (d = h.xp() || x, f = ta.parse(location.href), f.time || (f.time = x.now), h.tn(f), f.lat && f.lon || h.ah(d.lat, d.lon, d.zoom));
        q.pe();
        l.pe();
        requestAnimationFrame(b);
        var r;
        D.addEventListener("resize", function () {
            h.Vk();
            clearTimeout(r);
            r = setTimeout(a, 250)
        }, !1)
    };
    D.addEventListener("load", h.pe, !1);
    var ha = {
        Mh: function (a, b, c, d, f, r) {
            var e = c.length;
            a = (f ? [this.Tl, this.Xj, this.Yj, this.qo, this.Sl, this.po][f - 1] : .1 < (c[e - 1] - c[0]) / e ? this.Xj : this.Yj).call(this,
                a, b, c, d, e);
            r(a)
        },
        Tl: function (a, b, c, d, f) {
            var r = new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++) for (var k = (d[g] | 0) * b, h = d[g] % 1, l = 0; l < f; l++) {
                var n = k + c[l] | 0;
                r[e++] = .5 > c[l] % 1 ? .5 > h ? a[n] : a[n + b] : .5 > h ? a[n + 1] : a[n + b + 1]
            }
            return r
        },
        Iq: function (a, b, c, d, f) {
            var r = new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++) for (var k = (d[g] | 0) * b, h = 0; h < f; h++) {
                var l = k + c[h] | 0;
                r[e++] = this.Be.min(a[l], a[l + 1], a[l + 2], a[l += b], a[l + 1], a[l + 2], a[l += b], a[l + 1], a[l + 2])
            }
            return r
        },
        Hq: function (a, b, c, d, f) {
            var r =
                new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++) for (var k = (d[g] | 0) * b, h = 0; h < f; h++) {
                var l = k + c[h] | 0;
                r[e++] = this.Be.max(a[l], a[l + 1], a[l + 2], a[l += b], a[l + 1], a[l + 2], a[l += b], a[l + 1], a[l + 2])
            }
            return r
        },
        Sl: function (a, b, c, d, f) {
            for (var r = new Float64Array(3 * f), e = 0; e < f; e++) r[3 * e + 0] = c[e] % 1, r[3 * e + 1] = r[3 * e + 0] * r[3 * e + 0], r[3 * e + 2] = r[3 * e + 1] * r[3 * e + 0];
            for (var g = new Int32Array(f * f), k = e = 0; k < f; k++) for (var l = ((d[k] | 0) - 1) * b, h = d[k] % 1, n = h * h, q = n * h, u = 0; u < f; u++) {
                var p = l + ((c[u] | 0) - 1), v = this.fo(r[3 * u], r[3 * u + 1], r[3 *
                u + 2], h, n, q, a[p], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3]);
                g[e++] = v
            }
            return g
        },
        po: function (a, b, c, d, f) {
            for (var r = new Float64Array(3 * f), e = 0; e < f; e++) r[3 * e + 0] = c[e] % 1, r[3 * e + 1] = r[3 * e + 0] * r[3 * e + 0], r[3 * e + 2] = r[3 * e + 1] * r[3 * e + 0];
            for (var g = new Int32Array(f * f), k = e = 0; k < f; k++) for (var l = ((d[k] | 0) - 2) * b, h = d[k] % 1, n = h * h, q = n * h, u = 0; u < f; u++) {
                var p = l + ((c[u] | 0) - 2),
                    v = this.ho(r[3 * u], r[3 * u + 1], r[3 * u + 2], h, n, q, a[p], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1],
                        a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5]);
                g[e++] = v
            }
            return g
        },
        so: function (a, b, c, d, f) {
            for (var r = "undefined" == typeof Float64Array ? Array : Float64Array, e = "undefined" == typeof Int32Array ? Array : Int32Array, g = f / 2, k = new e(g), r = new r(g), l = 0; l < g; l++) k[l] = c[2 * l] | 0, r[l] = c[2 * l] % 1;
            c = new e(f * f);
            for (e = l = 0; e < g; e++) {
                for (var h = (d[2 * e] | 0) * b, n = d[2 * e] % 1, p = 0; p < g; p++) {
                    var u =
                        h + k[p], q = this.hg(r[p], n, a[u], a[u + 1], a[u += b], a[u + 1]);
                    c[l] = c[l + 1] = c[l + f] = c[l + f + 1] = q;
                    l += 2
                }
                l += f
            }
            return c
        },
        Gq: function (a, b, c, d, f) {
            for (var r = new Int32Array(f * f), e = 0, g = 0; g < f; g++) for (var k = (d[g] | 0) * b, l = d[g] % 1, h = 0; h < f; h++) {
                var n = k + c[h] | 0;
                r[e++] = a[n] || a[n + 1] || a[n + b] || a[n + b + 1] ? this.hg(c[h] % 1, l, a[n], a[n + 1], a[n += b], a[n + 1]) : 0
            }
            return r
        },
        Xj: function (a, b, c, d, f) {
            for (var g = new Int32Array(f * f), e = 0, k = 0; k < f; k++) for (var l = (d[k] | 0) * b, h = d[k] % 1, n = 0; n < f; n++) {
                var p = l + c[n] | 0;
                g[e++] = this.hg(c[n] % 1, h, a[p], a[p + 1], a[p += b], a[p + 1])
            }
            return g
        },
        hg: function (a, b, c, d, f, g) {
            c = (d - c) * a + c;
            return ((g - f) * a + f - c) * b + c
        },
        io: function (a, b, c, d, f, g, e) {
            return this.Be.atan2(ha.hg(a, b, this.Be.sin(c * e), this.Be.sin(d * e), this.Be.sin(f * e), this.Be.sin(g * e)), ha.hg(a, b, this.Be.cos(c * e), this.Be.cos(d * e), this.Be.cos(f * e), this.Be.cos(g * e))) / e
        },
        Yj: function (a, b, c, d, f) {
            for (var g = new Int32Array(f), e = new Float64Array(f), k = new Float64Array(f), l = new Float64Array(f), h = 0; h < f; h++) {
                var n = this.Be.round(c[h]);
                g[h] = n - 1;
                var n = c[h] - n, p = n * n, u = p * p;
                e[h] = 4 * u - 3 * p + 1;
                k[h] = (-4 * u + 3 * p - n) / 2;
                l[h] =
                    (-4 * u + 3 * p + n) / 2
            }
            c = new Int32Array(f * f);
            for (n = h = 0; n < f; n++) for (var u = this.Be.round(d[n]), p = (u - 1) * b, q = d[n] - u, v = q * q, w = v * v, u = 4 * w - 3 * v + 1, x = (-4 * w + 3 * v - q) / 2, q = (-4 * w + 3 * v + q) / 2, v = 0; v < f; v++) w = p + g[v], c[h++] = this.gp(e[v], k[v], l[v], u, x, q, a[w], a[w + 1], a[w + 2], a[w += b], a[w + 1], a[w + 2], a[w += b], a[w + 1], a[w + 2]);
            return c
        },
        gp: function (a, b, c, d, f, g, e, k, l, h, n, p, u, q, v) {
            return (n * a + h * b + p * c) * d + (k * a + e * b + l * c) * f + (q * a + u * b + v * c) * g
        },
        qo: function (a, b, c, d, f) {
            for (var g = new Int32Array(f), e = new Float64Array(f), k = new Float64Array(f), l = new Float64Array(f),
                     h = 0; h < f; h++) {
                var n = this.Be.round(c[h]);
                g[h] = n - 1;
                var n = c[h] - n, p = n * n, u = p * p;
                e[h] = 4 * u - 3 * p + 1;
                k[h] = (-4 * u + 3 * p - n) / 2;
                l[h] = (-4 * u + 3 * p + n) / 2
            }
            c = new Int32Array(f * f);
            for (n = h = 0; n < f; n++) for (var u = this.Be.round(d[n]), p = (u - 1 - 1) * b, q = d[n] - u, v = q * q, w = v * v, u = 4 * w - 3 * v + 1, x = (-4 * w + 3 * v - q) / 2, q = (-4 * w + 3 * v + q) / 2, v = 0; v < f; v++) w = p + g[v] - 1, c[h++] = this.hp(e[v], k[v], l[v], u, x, q, a[w], a[w + 1], a[w + 2], a[w + 3], a[w + 4], a[w += b], a[w + 1], a[w + 2], a[w + 3], a[w + 4], a[w += b], a[w + 1], a[w + 2], a[w + 3], a[w + 4], a[w += b], a[w + 1], a[w + 2], a[w + 3], a[w + 4], a[w += b], a[w + 1], a[w + 2], a[w +
            3], a[w + 4]);
            return c
        },
        hp: function (a, b, c, d, f, g, e, k, h, l, n, p, u, q, v, w, x, y, A, P, Q, S, z, B, da, E, fa, D, ga, ja, ea) {
            a = (A * a + y * b + P * c) * d + (q * a + u * b + v * c) * f + (B * a + z * b + da * c) * g;
            e = this.Be.max(e, k, h, l, n, p, u, q, v, w, x, y, A, P, Q, S, z, B, da, E, fa, D, ga, ja, ea);
            return this.Be.min(a, e)
        },
        fo: function (a, b, c, d, f, g, e, k, h, l, n, p, u, q, v, w, x, y, A, P, Q, S) {
            if (e == S && A == l && e == l && k == Q && P == h && n == y && q == v && k == n && h == v && k == h && e == k && p == x && u == w && p == u && p == e) return e;
            l = l - h - e + k;
            q = q - u - n + p;
            y = y - x - v + w;
            S = S - Q - A + P;
            e = l * c + (e - k - l) * b + (h - e) * a + k;
            n = q * c + (n - p - q) * b + (u - n) * a + p;
            v = y *
                c + (v - w - y) * b + (x - v) * a + w;
            a = S * c + (A - P - S) * b + (Q - A) * a + P - v - e + n;
            return a * g + (e - n - a) * f + (v - e) * d + n
        },
        ho: function (a, b, c, d, f, g, e, k, h, l, n, p, u, q, v, w, x, y, A, P, Q, S, z, B, da, E, fa, D, ga, ja, ea, F, K, H, N, M, L, J, R, O, V, aa) {
            if (q == N && F == x && q == x && v == H && K == w && P == ga && z == E && v == P && w == E && v == w && q == v && Q == D && S == fa && Q == S && Q == q) return q;
            var W = x - w - q + v, X = z - S - P + Q, Y = ga - D - E + fa, bb = N - H - F + K,
                W = W * c + (q - v - W) * b + (w - q) * a + v, X = X * c + (P - Q - X) * b + (S - P) * a + Q,
                Y = Y * c + (E - fa - Y) * b + (D - E) * a + fa;
            a = bb * c + (F - K - bb) * b + (H - F) * a + K - Y - W + X;
            d = a * g + (W - X - a) * f + (Y - W) * d + X;
            e = this.Be.max(e, k, h, l,
                n, p, u, q, v, w, x, y, A, P, Q, S, z, B, da, E, fa, D, ga, ja, ea, F, K, H, N, M, L, J, R, O, V, aa);
            return this.Be.min(d, e)
        },
        Be: k
    };
    if (!D.Worker || D.opera) ha.Xj = ha.Sl = ha.Yj = ha.so;
    var wa = Ua / 256, sb = Va * wa * wa, E = {
        Ug: {}, Qi: [], Uf: {"null": {request: 0}}, xg: [], rp: {}, Hi: [], Tn: [], pe: function () {
            for (var a = 0; a < Va; a++) {
                var b = g.a("canvas");
                b.width = b.height = Ua;
                b = b.getContext("2d");
                E.Tn.push(b)
            }
            E.Un = b.getImageData(0, 0, 256, 256);
            E.Em = new ia
        }, Qp: function (a) {
            var b = Infinity, c = E.Hi.indexOf(a);
            if (-1 == c) {
                for (var d = 0; d < sb; d++) {
                    var f = E.Uf[E.Hi[d]], f = f ? f.request :
                        0;
                    f < b && (c = d, b = f)
                }
                if (f = E.Uf[E.Hi[c]]) f.position = -1, f.cf = null;
                E.Hi[c] = a
            }
            return {index: c, context: E.Tn[c / wa / wa | 0], x: c % wa * 256, y: (c / wa | 0) % wa * 256}
        }, rm: function (a, b, c, d) {
            var f = E.Qp(a);
            b = E.To(b, c, d);
            E.Uf[a].position = f.index;
            E.Uf[a].cf = {canvas: f.context.canvas, x: f.x, y: f.y, Lf: b.Lf};
            f.context.putImageData(b.Do, f.x, f.y)
        }, Co: function (a) {
            return a + .5 | 0
        }, Bo: function (a) {
            return k.random() < a % 1 ? k.ceil(a) : k.floor(a)
        }, Oq: function () {
        }, To: function (a, b, c) {
            for (var d = new Uint8ClampedArray(E.Un.data.buffer), d = new Uint32Array(d.buffer),
                     f = c.Rd ? E.Bo : E.Co, g = [], e = a.length - 1; 0 <= e; e--) if (0 == b[e]) d[e] = q.Ro; else if (33 == b[e] && .99 < k.random() && g.push(e), 129 == b[e] && E.ip(e)) {
                var h = q.Ig(255, 255, 255, 255), l = q.Ig(255, 255, 255, 96);
                d[e + 0] = d[e + 1] = d[e + 2] = d[e + 3] = l;
                for (var n = 1; 9 > n; n++) d[e + 0 + 256 * n] = l, d[e + 1 + 256 * n] = h, d[e + 2 + 256 * n] = h, d[e + 3 + 256 * n] = l;
                d[e + 2305] = l;
                d[e + 2306] = l;
                d[e + 2817] = l;
                d[e + 2818] = l;
                d[e + 3073] = d[e + 3329] = h;
                d[e + 3074] = d[e + 3330] = h;
                d[e + 3072] = d[e + 3328] = l;
                d[e + 3075] = d[e + 3331] = l;
                d[e + 3585] = l;
                d[e + 3586] = l
            } else 17 == b[e] && 0 == e % 3 ? (h = 127 + 128 * k.max(k.min((a[e] -
                c.oi) / (c.fl - c.oi), 1), 0), d[e] = q.Ig(255, 255, 0, h)) : 33 == b[e] && E.Am(e) ? (h = 102, d[e] = d[e + 1] = d[e + 256] = d[e + 257] = q.Ig(255, 0, 0, h)) : 65 == b[e] && E.Am(e) && k.random() < 1 / 3 ? (h = 127 + 128 * k.max(k.min((a[e] - c.oi) / (c.fl - c.oi), 1), 0), d[e] = d[e + 1] = d[e + 256] = d[e + 257] = q.Ig(255, 255, 255, h)) : d[e] = c.Mi[f((k.min(k.max(a[e], c.min), c.max) - c.min) / c.step)] || 0;
            return {Do: E.Un, Lf: g.length ? g : null}
        }, Am: function (a) {
            return 0 == a % 4 && 256 > a % 2048 || 2 == a % 4 && 1280 > a % 2048 && 1024 <= a % 2048
        }, ip: function (a) {
            return 0 == a % 16 && 256 > a % 8192 || 8 == a % 16 && 4352 > a % 8192 && 4096 <=
                a % 8192
        }, request: 0, ui: 0, Hh: 0, uj: 1E3, Wi: function (a, b, c, d, f) {
            a = pa(a, 2 * (1 << c));
            var g = [c, a, b].join("/"), e = [g, d.G, d.Kd, d.time].join("/"), k = E.Uf[e];
            if (k) return k.request = ++E.request, 2 == k.status ? -1 == k.position && (E.rm(e, k.values, k.Kg, p[d.Kd]), k.wn || (E.Hh += Date.now() - k.ck, E.ui++, k.wn = !0)) : k.status = 1, E.rp[g] = e, k;
            if (!f) return {};
            E.Uf[e] = k = {};
            k.request = ++E.request;
            k.status = 0;
            k.ck = Date.now();
            E.xg.push(e);
            E.xg.length > fb && (E.xg.sort(function (a, b) {
                return E.Uf[a].request - E.Uf[b].request
            }), g = E.Uf[E.xg[0]], g.values = g.Kg =
                null, delete E.Uf[E.xg[0]], E.xg.shift(), g = null);
            var h;
            E.ep(a, b, c, d, function (a, b, c, g, r, l) {
                k.values = a;
                k.Kg = b;
                k.empty = g;
                k.ze = l;
                k.status = 2;
                k.position = -1;
                k.cf = null;
                c && (E.rm(e, a, k.Kg, p[d.Kd]), E.Hh += Date.now() - k.ck, E.ui++, k.wn = !0);
                h && f()
            });
            h = !0;
            return k
        }, ep: function (a, b, c, d, f) {
            function g(d) {
                var f = smparam.G;
                E.cp(a, b, c, smparam, function (a, b, c, k, h, n, p) {
                    function u(a, b) {
                        e.push(f);
                        d(a, q, b, n, p)
                    }

                    var q = ha.Tl(b, c, k, h, k.length);
                    if (n) l && l() ? g(d) : u(q, !0); else if (p && l && l()) {
                        var v, w, x, y, U, Z, A = function () {
                            for (var a = q.length -
                                1; 0 <= a; a--) 0 == q[a] && (v[a] = x[a], q[a] = y[a]);
                            e.push(f);
                            d(v, q, w && U, !1, Z)
                        };
                        E.Em.Mh(a, c, k, h, function (a, b) {
                            v = a;
                            w = b;
                            x && A()
                        });
                        g(function (a, b, c, d, e) {
                            x = a;
                            y = b;
                            U = c;
                            Z = e;
                            v && A()
                        })
                    } else E.Em.Mh(a, c, k, h, u)
                })
            }

            var e = [];
            if (Array.isArray(d.G)) {
                smparam = {};
                for (var k in d) smparam[k] = d[k];
                smparam.G = d.G[0];
                var h = 0, l = function () {
                    h++;
                    return !!(smparam.G = d.G[h])
                }
            } else smparam = d;
            g(function (a, b, c, d, g) {
                f(a, b, c, d, g, e)
            })
        }, cp: function (a, b, c, d, f) {
            function r() {
                for (var c = new Float64Array(256), d = new Float64Array(256), e = 0; 256 > e; e++) d[e] = h.Ih((256 *
                    b + e) / F) * w - z - fa, c[e] = (256 * a + e) / F * v - C - da;
                f(V, W, M, c, d, ka, P)
            }

            var e = K[d.G].Md[d.Kd].size || K[d.G].size;
            if (c < e.oe) var l = Na, n = e.Wd || 720, u = e.Ud || 360, v = n,
                w = u; else l = ab, n = e.Hf || 512, u = e.Gf || 512, v = e.width, w = e.height;
            var x = K[d.G].Md[d.Kd].variant, y = v, A = w, z = 0, C = 0, B = !0, ka = !0, P = !1, Q = k.ceil(v / n),
                S = k.ceil(w / u), D = q.wm(e)[v];
            e.qe && (w *= 180 / (e.qe - e.Fe), z = w * (90 - e.qe) / 180);
            e.Le && (v *= 360 / (e.Le - e.Me), C = v * (180 + e.Me) / 360, B = !1);
            var F = 512 * (1 << c);
            c = F / 256;
            var da = k.floor(a / c * v - C - 2), H = k.ceil((a + 1) / c * v - C + 3), fa = k.floor(h.Ih(b / c) * w - z -
                2), N = k.ceil(h.Ih((b + 1) / c) * w - z + 3), M = H - da, ja = N - fa, ea = M * ja;
            if (!B && (0 > da || H > Q * n) || 0 > fa || N > S * u) P = !0;
            c = 0;
            var e = 1, L = 0, J = 1;
            1 != Q ? B ? (c = k.floor(pa(da, v) / n), e = k.ceil(pa(H, v) / n), c > e && (e += Q)) : (c = k.max(k.floor(da / n), 0), e = k.min(k.ceil(H / n), Q)) : B || (c = k.min(k.floor(da / n), Q));
            1 != S ? (L = k.max(k.floor(fa / u), 0), J = k.min(k.ceil(N / u), S)) : L = k.min(k.floor(fa / u), S);
            var R = k.max(e - c, 0) * k.max(J - L, 0), O = p[d.Kd].o || function (a) {
                return a
            };
            0 >= R && (setTimeout(r, 1), M = ja = ea = 1);
            var V = new Int32Array(ea), W = new Int32Array(ea), X = aa[d.Kd].file,
                Y = K[d.G].Md[d.Kd].Mf || d.G, ba = d.time, ia = aa[d.Kd].Bg ? d.time.format("mm") : "";
            x && (X = aa[d.Kd].Xg[x], O = p[d.Kd].o[x]);
            for (var ha = !!p[d.Kd].Fh, x = L; x < J; x++) for (H = c; H < e; H++) (function (a, b) {
                function c(d) {
                    for (var e = a * n, g = b * u, h = k.min((a + 1) * n, v), l = k.min((b + 1) * u, fa + ja), p = a == Q - 1 ? -1 : 0, q = 0 == a ? 2 : 1, w = k.max(g, fa); w < l; w++) for (var x = (w - fa) * M, U = (w - g) * n, C = p; C < q; C++) for (var S = e + v * C, z = k.min(h + v * C, da + M), ca = k.max(S, da); ca < z; ca++) {
                        var ea = U + ca - S, E = d[ea];
                        f && 0 == f[ea - 1] + f[ea] + f[ea + 1] + f[ea + 2] || !B && (ca >= y - 2 || 1 >= ca) || w >= A - 2 || 1 >= w ? P = !0 :
                            (W[x + (ca - da)] = ha ? 1 : (E >> 24 << 1) + 1, ka = !1);
                        V[x + (ca - da)] = ha ? E : E & 16777215
                    }
                    --R || r()
                }

                var e = {
                    model: Y,
                    layer: X,
                    time: ba,
                    minutes: ia,
                    tileX: a,
                    tileY: b,
                    cache: String(K[d.G].Jd).replace(/0+$/, "")
                }, f = D && D[a + "," + b], e = g.Od(l, e);
                if (E.Ug[e]) E.Ug[e].data ? c(E.Ug[e].data) : E.Ug[e].We.push(c); else {
                    var h = {We: [c]};
                    E.Ug[e] = h;
                    E.Qi.push(e);
                    if (36 < E.Qi.length) {
                        var p = E.Qi[0];
                        E.Ug[p].We.length = 0;
                        delete E.Ug[p];
                        E.Qi.shift()
                    }
                    Array.isArray(e) ? g.qm(e, function (a) {
                        for (var b = a.length, c = [], d = new Int32Array(a[0].length), e = 0; e < a[0].length; e++) {
                            for (var f =
                                0; f < b; f++) c[f] = a[f][e];
                            d[e] = O.apply(this, c)
                        }
                        h.data = d;
                        for (e = 0; e < h.We.length; e++) h.We[e](d)
                    }) : g.pm(e, function (a) {
                        for (var b = new Int32Array(a.length), c = 0; c < a.length; c++) b[c] = O(a[c]);
                        h.data = b;
                        for (c = 0; c < h.We.length; c++) h.We[c](b)
                    })
                }
            })(H % Q, x % S)
        }
    };
    ia.prototype.hm = function (a) {
        a = new Worker(a);
        a.onmessage = this.onmessage.bind(this);
        this.Kj.push(a);
        this.Cq = this.Kj.length
    };
    ia.prototype.Bq = function (a) {
        return function (b) {
            var c = b.data.op;
            a.Mh(new Int32Array(c.source), c.gq, new Float64Array(c.x), new Float64Array(c.y),
                c.type, function (a) {
                    postMessage({$i: b.data.$i, rq: a.buffer}, [a.buffer])
                })
        }
    };
    ia.type = 0;
    ia.bi = 0;
    ia.prototype.onmessage = function (a) {
        var b = -1 < a.data.$i && this.Gm[a.data.$i];
        b && b.mg(new Int32Array(a.data.rq))
    };
    ia.prototype.Mh = function (a, b, c, d, f) {
        for (var g = !0, e = 0; e < a.length; e++) if (a[e]) {
            g = !1;
            break
        }
        if (g) f(new Int32Array(c.length * c.length), !0); else {
            if (this.Kj) return ++ia.bi, a = {
                source: a.buffer,
                gq: b,
                x: c.buffer,
                y: d.buffer,
                type: ia.type
            }, this.Kj[this.ij].postMessage({op: a, $i: ia.bi}, [a.source, a.x, a.y]), this.Gm[ia.bi] =
                {mg: f, $q: this.ij}, this.ij = (this.ij + 1) % this.Cq, ia.bi;
            ha.Mh(a, b, c, d, ia.type, function (a) {
                f(a, !0)
            })
        }
    };
    n.$f[73] = function () {
        ia.type = ia.type ? 0 : 1;
        n.Mg(u.Je, [u.T, u.S][ia.type]);
        for (var a = 0; a < E.xg.length; a++) delete E.Uf[E.xg[a]];
        E.xg.length = 0;
        setTimeout(function () {
            q.Ae(!0)
        }, 100)
    };
    var L = {
        debug: !1, Ae: function (a) {
            q.context.imageSmoothingEnabled = !0;
            q.context.imageSmoothingQuality = "high";
            q.Lf = null;
            L.tj = 0;
            if (a.G.join) {
                L.dk = [a.G.join(","), a.Kd, a.time.format("ddMMyyyyHHmm"), R, M, V].join("/");
                for (var b = [], c = a.G.length -
                    1; 0 <= c; c--) L.Ri(a.G[c], {Kd: a.Kd, time: a.time}) && b.push(a.G[c]);
                h.ze.join("+") != b.join("+") && (h.ze = b, n.$k(), n.b.update(), n.ve.model.refresh(), l.He())
            } else L.dk = [a.G, a.Kd, a.time.format("ddMMyyyyHHmm"), R, M, V].join("/"), L.Ri(a.G, {
                Kd: a.Kd,
                time: a.time
            });
            q.Pf = 0 < L.tj;
            n.xi();
            q.Pf || L.bn()
        }, yh: {}, cache: {}, Gi: [], Wn: function (a, b, c, d, f, g, e, h) {
            if (f > b || e > d || g < a || h < c) return null;
            a = k.max(a, f);
            c = k.max(c, e);
            b = k.min(b, g);
            d = k.min(d, h);
            return [a, b, c, d]
        }, Ri: function (a, b, c) {
            var d = L.dk, f = !1, r = K[a].Md[b.Kd].size || K[a].size;
            if (V <
                r.oe) var e = Na, l = r.Wd || 720, p = r.Ud || 360, u = l,
                v = p; else e = ab, l = r.Hf || 512, p = r.Gf || 512, u = r.width, v = r.height;
            var w = aa[b.Kd].file, x = K[a].Md[b.Kd].Mf || a, y = b.time, A = aa[b.Kd].Bg ? b.time.format("mm") : "",
                z = r.fj ? "/" + b.time.format("mm") : "";
            b = 512 * (1 << V);
            var C = pa(R, b), B = k.floor((C + N) / b) + 1, ka = (180 + r.Me) / 360 * b,
                P = h.$h((90 - r.qe) / 180) * b, Q = (180 + r.Le) / 360 * b, r = h.$h((90 - r.Fe) / 180) * b,
                S = Q - ka, E = r - P;
            L.debug && console.log("screen: ", C, M, N, J, "=>", C + N, M + J);
            L.debug && console.log("model: ", ka, P, Q, r);
            for (var D = k.min(C + N, b), da = N - (D - C), F =
                0, H = 0, O = 0; O < B; O++) {
                L.debug && console.log("AABB " + O + ": ", C, D, M, M + J);
                var ga = L.Wn(C, D, M, M + J, ka, Q, P, r);
                if (null != ga) {
                    var ja = ga[0], ea = ga[1], W = ga[2], X = ga[3];
                    L.debug && (q.context.fillStyle = "rgba(255,255,0,0.5)", q.context.fillRect(F + ja - C, W - M, ea - ja, X - W));
                    var Y = l / u, ga = p / v, ja = k.floor((ja - ka) / S / Y), ea = k.ceil((ea - ka) / S / Y),
                        ba = k.floor((W - P) / E / ga), W = k.ceil((X - P) / E / ga);
                    L.debug && console.log(ja, ba, ea, W);
                    Y *= S;
                    ga *= E;
                    for (X = ba; X < W; X++) for (ba = ja; ba < ea; ba++) (function (b, r, h, C, Q, ja) {
                        function B() {
                            L.debug && console.log("Load: " + F);
                            L.cache[F] = this;
                            delete L.yh[F];
                            L.Gi.push(F);
                            250 <= L.Gi.length && delete L.yh[L.Gi[L.Gi - 250]];
                            D(this)
                        }

                        function ea() {
                            delete L.yh[F];
                            D(this)
                        }

                        function D(a) {
                            if (c) H--, 0 == H && c(); else if (d == L.dk) {
                                L.tj--;
                                0 >= L.tj && (q.Pf = !1, L.bn(), n.xi());
                                var e = k.min(l, u - b * l), f = k.min(p, v - r * p), g = e / u * S, w = f / v * E;
                                q.context.lineWidth = 1;
                                q.context.strokeStyle = "rgba(255,0,0,1.0)";
                                q.context.strokeRect(k.floor(b * h + ka + (Q - ja)) + 1, k.floor(r * C + P - M) + 1, k.ceil(g) - 2, k.ceil(w) - 2);
                                q.context.drawImage(a, 0, 0, e, f, k.floor(b * h + ka + (Q - ja)), k.floor(r * C + P - M),
                                    k.ceil(g), k.ceil(w))
                            }
                        }

                        var da = {
                            model: x,
                            layer: w,
                            time: y,
                            minutesFolder: z,
                            minutes: A,
                            tileX: b,
                            tileY: r,
                            cache: String(K[a].Jd).replace(/0+$/, "")
                        }, F = g.Od(e, da);
                        f = !0;
                        L.cache[F] ? D(L.cache[F]) : (L.yh[F] ? L.yh[F].addEventListener("load", B, !1) : L.yh[F] = g.a("img", {
                            src: F,
                            onload: B,
                            onerror: ea,
                            crossOrigin: "Anonymous"
                        }), c ? H++ : L.tj++)
                    })(ba, X, Y, ga, F, C)
                }
                F += D - C;
                C = 0;
                D = k.min(b, da);
                da -= D - C
            }
            0 == H && c && c();
            return f
        }, ii: function (a, b) {
            if (a.G.join) for (var c = function () {
                d--;
                0 >= d && b()
            }, d = a.G.length, f = a.G.length - 1; 0 <= f; f--) L.Ri(a.G[f], {
                Kd: a.Kd,
                time: a.time
            }, c); else L.Ri(a.G, {Kd: a.Kd, time: a.time}, b)
        }, Rh: 50, Ii: 30, bn: function () {
            clearTimeout(L.zo);
            q.Pf || (L.zo = setTimeout(function () {
                if (!q.Pf) {
                    L.Yl || (L.Yl = g.a("canvas", {width: L.Rh, height: L.Ii}));
                    var a = L.Yl.getContext("2d");
                    a.drawImage(q.ee, 0, 0, L.Rh, L.Ii);
                    try {
                        L.Qh = a.getImageData(0, 0, L.Rh, L.Ii).data
                    } catch (b) {
                        L.Qh = []
                    }
                    v.Ye()
                }
            }, 50))
        }, wk: function (a, b) {
            if (q.Pf || !L.Qh) return 255;
            var c = k.round(a / N * L.Rh) + k.round(b / J * L.Ii) * L.Rh;
            return .2989 * L.Qh[4 * c + 0] + .587 * L.Qh[4 * c + 1] + .114 * L.Qh[4 * c + 2] | 0
        }
    }, X = {
        Kl: function (a,
                      b, c, d) {
            var f = [Ma.replace(/\/$/, "")], g = ["/?", "&", "&", "&"];
            if (a || b || c || d) {
                if (a) {
                    var e = 2 < a.zoom ? 5 < a.zoom ? 8 < a.zoom ? 3 : 2 : 1 : 0;
                    f.push(g.shift() + "p=" + a.lat.toFixed(e) + ";" + a.lon.toFixed(e) + ";" + a.zoom)
                }
                b && f.push(g.shift() + "l=" + h.u + (h.kn && h.kn != ALTITUDES[0] ? "/" + h.kn : ""));
                c && f.push(g.shift() + "t=" + h.Vc.format("yyyyMMdd/HH"));
                b && "auto" != h.ce && f.push("&m=" + h.ce);
                d && "normal" != h.Ue && f.push(g.shift() + "w=" + h.Ue)
            }
            return f.join("")
        }, Uj: function (a, b, c, d, f, k) {
            var e = [];
            d.trim() && e.push(d);
            b && (aa[h.u].Xi ? e.push(g.Od(u.Tf[aa[h.u].Xi] ||
                "{sublayer}", {group: u.b[aa[h.u].group], sublayer: n.xk(h.u)})) : e.push(u.b[h.u]));
            a && e.push(g.coords(a, 6 < a.zoom));
            c && e.push((new Date(h.Vc - 6E4 * n.gc)).format(u.J + " " + u.Pe) + " (" + g.timeZone(n.gc, n.Bn) + ")");
            return {info: e, A: f, tf: k}
        }, Fo: function (a) {
            var b = "";
            6 < a.zoom ? b = "-" + k.floor(k.abs(a.lat)) + String(k.round(k.abs(a.lat) % 1 * 60)).Ce(2, "0") + (0 > a.lat ? "s" : "n") + k.floor(k.abs(a.lon)) + String(k.round(k.abs(a.lon) % 1 * 60)).Ce(2, "0") + (0 > a.lon ? "w" : "e") : 3 < a.zoom && (b = "-" + k.round(k.abs(a.lat)) + (0 > a.lat ? "s" : "n") + k.round(k.abs(a.lon)) +
                (0 > a.lon ? "w" : "e"));
            return "ventusky-" + h.u + "-" + h.Vc.format("yyyyMMdd") + "t" + h.Vc.format("HHmm") + b
        }, ik: function (a, b, c, d, f) {
            a.fillStyle = "#555";
            a.fillRect(0, 0, d, f);
            q.j && q.j.Ve || a.drawImage(v.ag, b, c, d, f, 0, 0, d, f);
            l.c.eh || (a.globalAlpha = q.j ? q.j.opacity : .8, a.drawImage(q.ee, b, c, d, f, 0, 0, d, f), a.globalAlpha = 1, (v.De || q.De || "#FFF") == l.c.color && a.drawImage(v.jg, b, c, d, f, 0, 0, d, f))
        }, qh: function (a, b, c) {
            if (q.j) {
                var d = 12.8, f = k.round(1.5 * d), g = f * q.sf.length;
                g + f > c && (d = k.round(d * c / g * 100) / 100, f = c / q.sf.length, g = f * q.sf.length);
                a.font = "bold " + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                for (var e = d / 2, h = [], l = 0; l < q.sf.length; l++) {
                    var n = q.sf[l];
                    a.font = (n.Jh ? "" : "bold ") + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                    h[l] = a.measureText(n.text).width
                }
                e = k.round(k.max.apply(k, h) + e);
                b = b - e;
                c = c - g;
                3 > c && (a.fillStyle = "#FFF", a.fillRect(b, 0, e, c));
                l = a.createLinearGradient(b, 0, b + e, 0);
                l.addColorStop(0, "#555");
                l.addColorStop(.5, "#999");
                l.addColorStop(1, "#555");
                a.fillStyle = l;
                a.fillRect(b, c, e, g);
                for (l = 0; l < q.sf.length; l++) n = q.sf[l],
                    a.font = (n.Jh ? "" : "bold ") + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif", a.fillStyle = n.Jh ? "#FFF" : n.Ml, a.fillRect(b, k.round(l * f + c), e, k.ceil(f)), a.fillStyle = n.Jh ? "#000" : n.xn, a.fillText(n.text, b + k.round((e - h[l]) / 2), (l + .92) * f + c);
                return e
            }
        }, jk: function (a, b, c, d, f, g) {
            l.c.eh && (a.globalAlpha = q.j ? q.j.opacity : .8, a.drawImage(q.ee, b, c, d, f, 0, 0, d, f), a.globalAlpha = 1);
            q.j && q.j.Ve && a.drawImage(v.ag, b, c, d, f, 0, 0, d, f);
            ((v.De || q.De || "#FFF") != l.c.color || l.c.eh || !q.j || q.j.Ve) && a.drawImage(v.jg, b, c, d, f, 0, 0, d, f);
            a.strokeStyle =
                a.fillStyle = "#0A2941";
            a.textBaseline = "bottom";
            for (var e = 0; e < v.Ag.length; e++) {
                var h = v.Ag[e];
                if (!(h.Sf || h.x < b || h.y < c || h.x > b + d || h.y > c + f)) {
                    var n = [1, 1, 1, 2, 2][h.size - 1], p = [2, 3, 4, 5, 6][h.size - 1] - n / 2,
                        u = [3, 4, 5, 6, 7][h.size - 1];
                    a.lineWidth = n;
                    a.beginPath();
                    a.arc(k.round(h.x - b), k.round(h.y - c), p, 0, 2 * k.PI, !1);
                    a.stroke();
                    a.font = (4 > h.size ? "" : "bold ") + "14px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                    for (var n = h.name.split("\r\n"), w = n.length - 1; 0 <= w; w--) p = a.measureText(n[w]).width, a.fillText(n[w], k.round(h.x - b - p /
                        2), k.round(h.y - c - u)), u += 17.5
                }
            }
            e = d;
            g.A && (e -= X.qh(a, d, f));
            a.shadowOffsetX = a.shadowOffsetY = 1.5;
            a.shadowBlur = 3;
            a.shadowColor = "rgba(0,0,0,0.5)";
            g.tf && (n = k.min(.3 * d / X.tf.width, .15 * f / X.tf.height, 1), a.drawImage(X.tf, e - X.tf.width * n - 5, f - X.tf.height * n - 5, X.tf.width * n, X.tf.height * n), e -= X.tf.width * n + 10);
            if (g.info.length) if (d = 14, a.font = d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif", a.fillStyle = "#FFF", f = f - 5 + 3, b = e - 10, e = g.info.join(", "), a.measureText(e).width > b) {
                c = [];
                for (e = 0; e < g.info.length; e++) c[e] = a.measureText(g.info[e]).width;
                n = k.max.apply(k, c);
                if (n > b) {
                    d = k.round(14 * b / n * 100) / 100;
                    a.font = d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                    for (e = 0; e < g.info.length; e++) c[e] = a.measureText(g.info[e]).width;
                    f = f - 3 + 3 * b / n
                }
                h = a.measureText(", ").width;
                n = [];
                p = 0;
                u = "";
                for (e = g.info.length - 1; 0 <= e; e--) p && p + c[e] + h > b && (n.push(u), u = "", p = 0), u = g.info[e] + (u ? ", " + u : ""), p += c[e] + h;
                n.push(u);
                for (e = 0; e < n.length; e++) a.fillText(n[e], 5, f), f -= 1.25 * d
            } else a.fillText(e, 5, f);
            a.shadowOffsetX = a.shadowOffsetY = a.shadowBlur = 0;
            a.shadowColor = "transparent"
        }, Go: function (a,
                         b, c, d, f, k, e) {
            var h = g.a("canvas", {width: c, height: d}), n = h.getContext("2d");
            X.ik(n, a, b, c, d);
            n.globalAlpha = l.c.opacity;
            n.drawImage(l.ee, a, b, c, d, 0, 0, c, d);
            n.globalAlpha = 1;
            X.jk(n, a, b, c, d, e);
            return h.toDataURL(f, k)
        }, aq: function (a, b) {
            if ("download" in HTMLAnchorElement.prototype) {
                var c = g.a("a", {href: a, download: b, parent: B.body});
                c.click();
                c.parentNode.removeChild(c)
            } else {
                if (!sa) try {
                    for (var c = atob(a.split(",")[1]), d = new ArrayBuffer(c.length), f = new Uint8Array(d), k = 0; k < c.length; k++) f[k] = c.charCodeAt(k) & 255;
                    try {
                        var e =
                            new Blob([d], {type: "application/octet-stream"})
                    } catch (h) {
                        var l = new (D.WebKitBlobBuilder || D.MozBlobBuilder);
                        l.append(d);
                        e = l.getBlob("application/octet-stream")
                    }
                    e.name = b;
                    navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(e, b) : location.href = (D.webkitURL || D.URL).createObjectURL(e);
                    return
                } catch (h) {
                }
                c = D.open("about:blank", "_blank");
                c.document.write('<img src="' + a + '" style="position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;box-shadow:0 0 0 20px,0 0 0 2000px #222;max-width:100%;max-height:100%">');
                c.document.close()
            }
        }, No: function (a, b, c, d) {
            var f = 512 * (1 << V), r = (R + a) / f * l.Wd, e = (R + a + c) / f * l.Wd + 1;
            c = h.Ih((M + b) / f) * l.Ud;
            var n = h.Ih((M + b + d) / f) * l.Ud + 1;
            d = k.floor(e) - k.floor(r) + 1;
            for (var p = k.floor(n) - k.floor(c) + 1, u = g.a("canvas", {
                width: d,
                height: p
            }), q = u.getContext("2d"), v = q.getImageData(0, 0, d, p), w = v.data, x = 0, y = k.floor(c); y < k.floor(n) + 1; y++) for (var A = k.floor(r); A < k.floor(e) + 1; A++) {
                var C = k.floor(y - l.Nj) * l.Vg + (A - l.Mj) % l.Vg | 0;
                w[x + 0] = 255;
                w[x + 1] = l.Cl[C];
                w[x + 2] = l.Dl[C];
                w[x + 3] = 255;
                x += 4
            }
            q.putImageData(v, 0, 0);
            e = u.toDataURL("image/jpeg",
                .9);
            u = u.toDataURL("image/png");
            e = .9 * u.length > e.length ? e : u;
            return {
                rh: a + R - k.floor(r) * f / l.Wd,
                Yh: b + M - h.$h(k.floor(c) * l.Ud) / l.Ud,
                Kp: 1 / f * 2 * k.PI,
                Dq: k.floor(c),
                ih: ((b + M) / f * 2 - 1) * k.PI,
                Aq: l.Wd / f,
                Zq: f,
                Nl: e,
                width: d,
                height: p
            }
        }, Io: function (a, b, c, d, f, h) {
            function e(a) {
                return 'style="' + a.join("!important;").replace(/:\s/g, ":") + '!important"'
            }

            if ("wave" == Fa[l.B].kind) return "\x3c!-- " + u.xa + " - " + u.If + " --\x3e";
            var n = 'width="' + c + '" height="' + d + '"',
                p = ' alt="' + g.ni((h.tf ? h.info.concat("\u00a9 VentuSky.com") : h.info).join(", "),
                    !0) + '"', q = ["max-width: " + c + "px", "width: 100%", "display: inline-block"],
                v = h.info.length ? ' title="' + g.ni(h.info.join(", "), !0) + '"' : "",
                w = g.a("canvas", {width: c, height: d}), x = w.getContext("2d");
            if (l.c.Pk) X.ik(x, a, b, c, d), X.jk(x, a, b, c, d, h), c = p = "<img " + n + p + ' src="' + w.toDataURL("image/jpeg", .9) + '" ' + e(["display: block", "width: 100%", "height: auto", "border: 0"]) + ">"; else {
                X.jk(x, a, b, c, d, h);
                h = w.toDataURL("image/png");
                X.ik(x, a, b, c, d);
                for (var w = w.toDataURL("image/jpeg", .9), x = k.round(k.min(k.max(c, d) / 25, oa)), y = k.round(c *
                    d / N / J * l.c.wf), A = [], z = 0; z < l.c.Pg.length; z++) A.push(k.round(y / l.c.Pg.length * z) + ":" + l.c.Pg[z]);
                var C = {};
                C["@i"] = c;
                C["@v"] = d;
                C["@m"] = l.c.Yf;
                C["@k"] = y;
                C["@d"] = c + 2 * x;
                C["@p"] = d + 2 * x;
                C["@r"] = x;
                C["@l"] = l.c.om;
                C["@h"] = l.c.Vh;
                C["@z"] = '"' + (l.c.color || "#FFF") + '"';
                C["@x"] = "{" + A.join(",") + "}";
                C["@b"] = l.c.length * l.Rn;
                C["@g"] = ha.hg.toString();
                C["@s"] = .2;
                a = X.No(a - x, b - x, c + 2 * x, d + 2 * x);
                C["@c"] = a.Nl;
                C["@u"] = a.width;
                C["@q"] = a.height;
                C["@t"] = a.Aq;
                C["@w"] = a.Dq;
                C["@e"] = a.rh;
                C["@j"] = a.Kp;
                C["@f"] = a.ih;
                C["@y"] = 2 * l.Ud / k.PI;
                C["@o"] =
                    a.width * a.height;
                b = (cb.up.toString() + ".call(parentNode,window,document,Math,Date," + cb.vp.toString()).replace(/\$\["([^"]+)"\]/g, function (a, b) {
                    return C[b]
                }).replace(/"/g, "'").replace(/(function)\s\(/g, "$1(").replace(/([|>*+,;=])\r?\n/g, "$1").replace(/([|>*+,=&])\r?\n/g, "$1");
                var B = {}, ka = 0;
                b = b.replace(/([^a-z0-9])([a-z])(?=[^a-z0-9])/gi, function (a, b, c) {
                    if (a = "mojzik".charAt(ka++)) B[c] = a, B[a] ? B[B[a]] = c : B[a] = c; else {
                        if (B[c]) return b + B[c];
                        B[c] = c
                    }
                    return b + B[c]
                });
                b += ",'" + a.Nl + "')";
                p = "<img " + n + p + ' src="' + h +
                    '" ' + e("display: block;position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 2;margin: 0;border: 0;padding: 0".split(";")) + ' onload="onload=' + g.ni(b, !0) + ',null">';
                p = "<canvas " + n + " " + e(["left: 0", "top: 0", "width: 100%", "height: 100%", "position: absolute", "z-index: 1", "opacity: " + l.c.opacity]) + ">" + g.ni(u.R) + "</canvas>" + p;
                c = "<span " + e(["height: 0", "width: 100%", "display: block", "box-sizing: content-box", "padding: 0 0 " + k.round(d / c * 1E5) / 1E3 + "% 0", "position: relative"]) + ">" + p + "</span>";
                q.push("background: url(" +
                    w + ") no-repeat", "background-size: contain")
            }
            return '<a target="_top"' + v + " " + e(q) + ' href="' + g.ni(f, !0) + '">' + c + "</a>"
        }
    }, cb = {
        vp: function (a, b, c, d) {
            function f(a, c) {
                a.x = b.random() * $["@d"];
                a.y = b.random() * $["@p"];
                a.re = c + b.random() * $["@l"];
                return a
            }

            var g = $["@g"];
            c.strokeStyle = $["@z"];
            c.translate(-$["@r"], -$["@r"]);
            for (var e = [], k = e.length; k < $["@k"]; k++) e.push(f({}, 0));
            var h = $["@x"], l = new (a.Int8Array || Array)($["@o"]), n = new (a.Int8Array || Array)($["@o"]), p;
            (function () {
                var b = a.document.createElement("canvas");
                b.width = $["@u"];
                b.height = $["@q"];
                var c = b.getContext("2d"), e = new Image;
                e.src = d;
                e.onload = function () {
                    c.drawImage(e, 0, 0);
                    for (var a = c.getImageData(0, 0, $["@u"], $["@q"]).data, d = 0; d < $["@o"]; d++) l[d] = a[4 * d + 1] - 127, n[d] = a[4 * d + 2] - 127;
                    p = !0;
                    c = b = e.onload = null
                }
            })();
            for (var u = [], q = [], v = [], w = [], k = 0; k < $["@d"]; k++) {
                var x = (k + $["@e"]) * $["@t"];
                u[k] = x | 0;
                v[k] = x % 1
            }
            for (k = 0; k < $["@p"]; k++) x = b.atan(b.exp(k * $["@j"] + $["@f"])) * $["@y"] - $["@w"], q[k] = (x | 0) * $["@u"], w[k] = x % 1;
            return function (a) {
                if (p) {
                    var d = $["@u"], k = $["@b"] * a;
                    c.lineWidth =
                        h[0];
                    for (var x = 0; x < $["@k"]; x++) {
                        var y = e[x];
                        0 >= y.re && f(y, $["@h"]);
                        var A = b.round(y.x), C = b.round(y.y), z = u[A], B = q[C], A = v[A], U = w[C],
                            C = g(A, U, l[B + z], l[B + z + 1], l[B + d + z], l[B + d + z + 1]) * k,
                            z = g(A, U, n[B + z], n[B + z + 1], n[B + d + z], n[B + d + z + 1]) * k;
                        c.moveTo(y.x, y.y);
                        y.x += C;
                        y.y -= z;
                        c.lineTo(y.x, y.y);
                        x in h && (c.stroke(), c.beginPath(), c.lineWidth = h[x]);
                        y.re -= a;
                        if (0 > y.x || y.x >= $["@d"] || 0 > y.y || y.y >= $["@p"]) y.re = 0
                    }
                    c.stroke()
                }
            }
        }, up: function (a, b, c, d, f, g) {
            function e() {
                var f = d.now(), g = 500 < f - q ? 1 : c.min((f - q) / 16, 10);
                q = f;
                if (500 < f - v && (v = q, (f =
                    b.getElementById("ventusky")) && !f.checked ? w = !1 : (f = k.getBoundingClientRect(), w = c.max(0, c.min(f.right, a.innerWidth) - c.max(f.left, 0)) * c.max(0, c.min(f.bottom, a.innerHeight) - c.max(f.top, 0)) / f.width / f.height > $["@s"]), !w && b.body.contains && !b.body.contains(h))) return p.clearRect($["@r"], $["@r"], $["@i"], $["@v"]);
                w && (p.globalCompositeOperation = "destination-in", p.globalAlpha = c.pow($["@m"], g), p.fillRect($["@r"], $["@r"], $["@i"], $["@v"]), p.globalCompositeOperation = "source-over", p.globalAlpha = 1, u(g));
                n.call(a, e)
            }

            var k = this.getElementsByTagName("canvas")[0];
            if (k && k.getContext && k.getBoundingClientRect && d.now) {
                var h = this.parentNode, l,
                    n = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function (a) {
                        var b = d.now(), e = c.max(0, 16 - (b - l));
                        a = setTimeout(a, e);
                        l = b + e;
                        return a
                    }, p = k.getContext("2d"), u = f.call(this, a, c, p, g), q = d.now(), v = 0, w = !1;
                n.call(a, e)
            }
        }
    }, A = {
        pe: function () {
            var a = B.getElementsByTagName("menu")[0];
            if (a) {
                A.Jk = g.a("a", {
                    textContent: u.na, onclick: function () {
                        A.open();
                        return !1
                    }
                });
                var b =
                    g.a("li", {id: "menu-share", children: [A.Jk]});
                a.insertBefore(b, a.firstChild);
                A.dl = {embed: !0};
                for (a = 0; b = ["image", "live"][a]; a++) {
                    var c = g.Of("cutter-" + b);
                    A.dl[b] = c ? "1" == c : !0
                }
                A.$n()
            }
        }, $n: function () {
            var a = B.getElementsByTagName("menu")[0], b = g.a("a", {
                textContent: u.uf, className: "ii", href: "/app", onclick: function () {
                    y.Fg("app", u.uf, !0);
                    return !1
                }
            }), b = g.a("li", {id: "menu-app", children: [b]});
            a.insertBefore(b, a.firstChild);
            for (a = 0; a < Ta.length; a++) if (b = Ta[a], b.userAgent.test(navigator.userAgent) && (!b.yl || !b.yl.test(navigator.userAgent))) {
                g.a("a",
                    {className: "ii", textContent: u.rc, href: b.link, target: "_blank", parent: z.form});
                break
            }
        }, open: function () {
            function a(a) {
                d[e] && (d[e].className = "");
                d[a].className = "active";
                e = a;
                a = "";
                var b = d[e].childNodes[1];
                D.className = "";
                D.onmouseover = null;
                A.Yi.disabled = !1;
                0 == e ? (A.Eg.focus(), A.Eg.select(), b.appendChild(x), x.firstChild.data = u.ra) : 1 == e ? (b.appendChild(C), b.appendChild(w), b.appendChild(v), a = "image") : 2 == e && (b.appendChild(C), b.appendChild(x), b.appendChild(w), x.firstChild.data = u.Ff, a = "live");
                l && (w.firstChild.textContent =
                    u.oa, n.style.display = "", q.style.display = p.style.display = "none", p.value = "", l = !1);
                A.hl(a)
            }

            function b() {
                h.log("share", "action-" + ["image", "live", "embed", "gif", "video"][e]);
                A.Tg.style.backgroundColor = "#FFF";
                requestAnimationFrame(function () {
                    A.Tg.style.backgroundColor = "rgba(255,255,255,0.5)";
                    requestAnimationFrame(function () {
                        A.Tg.style.backgroundColor = "rgba(255,255,255,0.25)";
                        requestAnimationFrame(function () {
                            A.Tg.style.backgroundColor = ""
                        })
                    })
                });
                var a = h.wi(B.ti + B.si / 2, B.ih + B.ri / 2), b = X.Uj(A.Bk.checked && (3 < V ?
                    a : null), A.Cm.checked, A.Dm.checked, A.lp.value, A.jp.checked, A.kp.checked);
                if (1 == e) {
                    var c, d, f;
                    "png" == z.value ? (c = "image/png", d = 1, f = "png") : (c = "image/jpeg", d = z.value / 100, f = "jpg");
                    b = X.Go(B.ti, B.ih, B.si, B.ri, c, d, b);
                    X.aq(b, X.Fo(a) + "." + f)
                } else 2 == e && (f = y.we.scrollTop, c = w.getBoundingClientRect().top - n.getBoundingClientRect().top, n.style.display = "none", C.parentNode.removeChild(C), x.parentNode.removeChild(x), q.style.display = p.style.display = "", p.style.height = "50px", w.parentNode.appendChild(w), p.style.height = c -
                    (w.getBoundingClientRect().top - p.getBoundingClientRect().top - 50) + "px", y.we.scrollTop = f, a.zoom = V, a = X.Kl(A.Hk.checked && a, A.di.checked, A.wh.checked, A.xh.checked), a = X.Io(B.ti, B.ih, B.si, B.ri, a, b), p.value = a, p.focus(), p.select(), w.firstChild.textContent = u.Pb, l = !0)
            }

            h.log("share", "open");
            X.tf || (X.tf = g.a("img", {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAwCAMAAAC1x0iUAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAKlXH6o378Qe6mzji9gQJ10vcqQ3RUEeu7oAXwWPnzZYntC+FWUI9NIkiHBGiCmnUeXReb0d2FLoAAAd5SURBVGje7ZvpkqIwEIBb0YjK4cF4AYInini77/9qu0qyCek4wJazu1Xj92cKuT+STqdh4BN283FDZNxPQM2hVWtk8GbwhjH/IdMCNUu0ZQBvKIcastMDNdoPRAJvKAGSMwc1LbSlYcEbysaQ5HzMQI0rN8jpGt78xp5VRGY6PMOKs1se4M2bN/8O69bUCuJdLEAcm9lttg58S84/SjABmRvapg/fkqCMx06BzJHo8B1plvHoFZjz1L5n5tgeF9fYWOMcU570mD58T9xBtSCDXYHd3wWKN2/+HMd14PUcjvUHvn1fGmzrIts1cKrSuggw1jEw+guQGXqGN4CUbtiSOCeQsvKM4CzdZGVkaCt6AWELE3bpvpoxQideNw2vCxy72/ow7xlGbz6JbEHCstMT02BnqTWrdDSZn+Qbmu1PzeHT0buvSi3JFRgTtG71pCw5liPmgNw3r9JCESZIb6meLiQgsKulZ2LHxpAL/MIn9xPHksbHeYf8IfcyBaqlC5TRfXkEIC6TI/xi0UDHdaf0qCILftwd6NPn1Vkb1yY1kEnMx4o9ZPngqWhV6eLhaUgXRrhefOLHxoxtACs1VFe1EY/dv4f2XGUkLLJNZsof+xwE9uinl3ts0+tzsucgaX6UAEBfqeKSXh/lCAy2fU0HiMkTj8QFsPkjEOilPqjGE9qTtapuujTg3ecOSVum3PXW6VrtK/v1jvD2xakLpfWm0sQms8rcqDxanSceP+BzjzU+f0D0FR5nY6GE7dPqagIUnT6OyZeOM01FFV2nxeHtM4/kDNlVHUfhEdqGUmNvUchjl52s02wGDbbzHnt0Pugs7RHlLRoMQqk60XPgK6nSi90BZ01/m3FZ46gtkKD56l7lEfRNun2qx0gXFhbkehSfcJxmAedH6zbbyCOLPGZEW6eZXj1djBvp4hq+lAONsDcUl394wu1MLcA0xXCCPeJhi5Pv0Unvv2cDxVpptWYEyONFvoIzjR4WG8nxa1TMTDUvtIfZXyMLnlJHL2EdGm6u+R45jcqLPVZ49xRBHodEDn96IIyFA5oyJTnd0lTUKRwtr+CIx2ayAMaKj+G5HjmB/VqPC9opcjzGNXyHG5KqiAEcmoBW4VOsnqpudvyBiOApVPpSrrOFkO9RJHytxxmhkXf3mUcnoHd9kHJYOnhu0Wkw6hyxgxKe9IxP8el4xky5tIm3C3qsdWiAGrzUoz1mSdXIj5963NOLd0HkcKKtsGKmB9xBDi3Ve4WF0Nnzw0NCc4o1pBx5kieM16sqp+uKq4wNPV0tfp1HaQJg9I8zlccbDUELyBKRdDfa13zIw554ivdc65GWYV8BBBqeW9l+fuEeEeOh6BEuLKRYL/LIoxyHnCY72WOdpjhdkAnFXZvwdeCHV3NAiEumyz1iDFvwyGcey5d5VM/H9jH3KHADhNMTht4Z/B064pg2kW5QPS+MMx5dg/68fqVHmBBcp1B5DAEzFGsBapLKAwd/l4LZQQEuv4c3Pinufupx7GQ8wpre8dR9pUeIAvQAfe6R4382cmgWKPEb/Nmg76RwV9Ahl53Ju3Kbdlz9U483MT6Kpca59UqPYA370phpzhQezTYgkqlYQ8G45He/d4q82r5CPiNe/gp5pBM9NiYiEcgeLVYqPL/SYzo322qiy33GI5VhuIC4smKLmjY/ZAV/R4rZQj6D3+VJfcpLFPn5I/cI8Zg+/k5Bj0Q1lE7pESWS9fbEQ4pYC6rSMOTpz0T5oMapid+BzvM0ki7kYxnpthV2gR6U9QhV1k+KedTH7DdcnT8p2w9r8QvukRx/58phWY8QBY0H2gZ9Z48xLpALD28Tlvxey3uEsJRH6OB6HQz5gIexaWI75B5D4JNgP8fj18OTxp7bSPvO4Q88Hj5KeeyzQCwwF37DXJDHgTCNMNv/gUegnaZF/0Apj5RFo4zHIx5OB0ScoSbhh7dSzFEWkkenw8aafI+Wfofdi14AC0pxzcTUdjmPDL+MR5fNytdAuZriZMkOHuMQv5TIROPMIPP8PDvHo7Of1u4Y5zQ+1gowbdmQC6rdpnxgWWZdxNeVHqFf3COPp2S0ih1n5nuEpU5irCTaue0A2O3QZJmS5JE3gvCZRxTBB/yOX5LwqCf2N8kjxtOVHpNeCY/uk5ytc6DVZI7JIwaJkEc+d7l+7pEH8Hq6uhAaFESurpgu8oioKj1CRAp55OEQ06ABc5e6k2kB8sjfGPYspUfcXY48ruTSglJofMaAGirmwodXA32CjZwFNFxIrBS3Ml4Lr0wwzYPY6btAmTXYDI+zQW00Zg2yrwOAX0xksINSbNjzN3bo/Q2CRFxaHwSsJvfMCZ+lyifUiSrCFWnotKHNKgJSx1kR1AUPYzq3EIjF4s2hUoAYyhL10jtB30xNscYtAND3ab0Y/9sY2VvZH+++Ti4gLD8gwmG9KmRY78UYao42wLiQX5vfpNee4w1q7mQCfx17sKwvhxbIONFQgqk++PVbAln06na5BonkWD86oGTmh83gdArm9WsMiMPmxlZXXRBoL5dZa93tWd5/MclcyU+zPIz7RM9BEwAAAABJRU5ErkJggg==",
                crossOrigin: "Anonymous"
            }));
            var c = y.create(null, u.sa, !1);
            y.kj = A.Bh;
            c.className = "share";
            y.bh = "#share";
            g.a(0, {
                className: "header",
                children: [g.a(0, {className: "header_background", children: [g.a("h1", {textContent: u.sa})]})],
                parent: c
            });
            g.a(0, {className: "section", textContent: u.Zc, parent: c});
            for (var d = [], f = ["", u.Af, u.Cf, u.fh, u.gh, u.hh], k = 0; 4 > k; k++) d.push(g.a("li", {
                children: [g.a("label", {
                    children: [g.a("input", {
                        type: "radio", name: "share-type", onclick: function () {
                            a(this)
                        }.bind(k)
                    }), g.a("span", {
                        textContent: [u.Zb,
                            u.fd, u.kd, u.$c, u.Qb, u.Sd][k]
                    })]
                }), g.a(0, {className: "share_block clearfix", children: [k ? g.a("p", {innerHTML: f[k]}) : ""]})]
            }));
            g.a("ul", {className: "share_menu clearfix", children: d, parent: c});
            var e = -1, l;
            A.Eg = g.a("input", {
                type: "url",
                value: Ma,
                className: "ym",
                style: "width: 100%; margin: 0 0 0.5em",
                parent: d[0].childNodes[1]
            });
            A.bm(A.Eg);
            var n = g.a("p", {innerHTML: u.Df, parent: d[2].childNodes[1]}), p = g.a("textarea", {
                className: "ym pi",
                style: "width: 100%; font-size: 80%; display: none; margin-bottom: 0.666em; word-break: break-all",
                parent: d[2].childNodes[1]
            });
            A.bm(p);
            var q = g.a("p", {innerHTML: u.Ef, style: "display: none", parent: d[2].childNodes[1]}),
                v = g.a("p", {innerHTML: u.Bf, parent: d[1].childNodes[1]}), w = g.a("p", {
                    style: "text-align: center",
                    children: [g.a("a", {
                        className: "share_action", innerHTML: u.oa, onclick: function () {
                            if (l) return a(e);
                            b()
                        }
                    })]
                }), x = A.lo(function () {
                    A.xl();
                    0 == e && (A.Eg.focus(), A.Eg.select())
                }), z;
            g.a("label", {
                style: "margin: 0 0 0.5em", children: [u.Tb + ": ", z = g.a("select", {
                    children: [g.a("option", {textContent: "PNG", value: "png"})],
                    onchange: function () {
                        g.yf("image-quality", this.value)
                    }
                }), "."], parent: d[1].childNodes[1]
            });
            c = g.Of("image-quality") || 90;
            for (k = 0; k < Ja.length; k++) g.a("option", {
                textContent: "JPEG " + Ja[k] + "%",
                value: Ja[k],
                parent: z,
                selected: Ja[k] == c
            });
            var B = {ti: 0, ih: 0, si: N, ri: J}, C = A.jo(B);
            A.Tg.oncontextmenu = function () {
                l && a(e);
                h.log("share", "rmb");
                b();
                return !1
            };
            var D = g.a(0, {
                id: "socbuttons",
                className: "dormant",
                children: A.Gh = [g.a("a", {className: "socbutton socbutton-em", target: "_blank"}), g.a("a", {
                    className: "socbutton socbutton-vk",
                    target: "_blank"
                }), g.a("a", {
                    className: "socbutton socbutton-rd",
                    target: "_blank"
                }), g.a("a", {
                    className: "socbutton socbutton-tw",
                    target: "_blank"
                }), g.a("a", {className: "socbutton socbutton-fb", target: "_blank"})],
                parent: d[0],
                onmouseover: function () {
                    d[0].firstChild.firstChild.checked = !0;
                    D.className = "";
                    a(0)
                }
            });
            A.xl()
        }, bm: function (a) {
            a.readOnly = !0;
            a.onfocus = function () {
                this.select();
                setTimeout(function () {
                    B.execCommand("selectAll")
                }, 1)
            };
            a.onclick = a.createTextRange ? function () {
                var b = a.createTextRange();
                b.select();
                b.execCommand("Copy")
            } : function () {
                this.select()
            }
        }, xl: function () {
            if (A.Eg) {
                A.Bk.parentNode.style.display = 3 < V ? "" : "none";
                A.xh.parentNode.style.visibility = "normal" == h.Ue ? "hidden" : "";
                A.wh.parentNode.childNodes[2].data = "normal" == h.Ue ? "." : ",";
                var a = A.Hk.checked && h.vj(), b = X.Kl(a, A.di.checked, A.wh.checked, A.xh.checked);
                A.Eg.value = b;
                var a = (X.Uj(3 < V ? a : null, A.di.checked, A.wh.checked, "").info.join(", ") || u.R) + " \u2013 ",
                    c = "Ventusky: " + (X.Uj(!1, A.di.checked, A.wh.checked, "").info.join(", ") || u.R);
                A.Gh[4].href = "https://facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(b);
                A.Gh[3].href = "https://twitter.com/intent/tweet/?text=" + encodeURIComponent(a) + "&url=" + encodeURIComponent(b) + "&related=Ventuskycom&via=Ventuskycom";
                A.Gh[2].href = "https://www.reddit.com/submit?resubmit=true&url=" + encodeURIComponent(b) + "&title=" + encodeURIComponent(c);
                A.Gh[1].href = "http://vk.com/share.php?url=" + encodeURIComponent(b);
                A.Gh[0].href = "mailto:?subject=" + encodeURIComponent(c) + "&body=" + encodeURIComponent(c + "\r\n\r\n" + b)
            }
        }, Bh: function () {
            A.hl("");
            A.Ee.parentNode.removeChild(A.Ee);
            delete A.Eg;
            A.xh = A.wh = A.di = A.Hk = null;
            A.Yi = A.vh = A.uh = A.Ee = A.Tg = null;
            A.Cm = A.Bk = A.Dm = null;
            A.Pi = null;
            A.Gh = null
        }, resize: function () {
            A.Pi && A.Pi()
        }, jo: function (a) {
            function b(a) {
                if (D) {
                    var b = 45 * D, d = N, e = J;
                    d / e > D ? d = k.round(e * D) : e = k.round(d / D);
                    z ? (E = k.max(k.min(A.uh.value | 0, e), 45), F = k.round(E * D)) : (F = k.max(k.min(A.vh.value | 0, d), b), E = k.round(F / D))
                } else E = k.max(k.min(A.uh.value | 0, J), 45), F = k.max(k.min(A.vh.value | 0, N), 45);
                if (!a || z) A.vh.value = F;
                a && z || (A.uh.value = E);
                ca = k.max(k.round((N - (N > 780 * H ? 540 * H : 0) - F) / 2), 0);
                C = k.round((J -
                    E) / 2);
                c();
                f()
            }

            function c() {
                A.Yi.checked ? (a.ti = ca, a.ih = C, a.si = F, a.ri = E, d()) : (a.ti = 0, a.ih = 0, a.si = N, a.ri = J)
            }

            function d() {
                clearTimeout(K);
                K = setTimeout(function () {
                    g.yf("cutter-state", F + "," + E + "," + (D ? fa ? "l" : da.selectedIndex : "x"))
                }, 500)
            }

            function f() {
                var a = N, b = J;
                A.Ee.childNodes[0].style.height = A.Ee.childNodes[2].style.top = A.Ee.childNodes[3].style.top = A.Ee.childNodes[4].style.top = k.round(C / H) + "px";
                A.Ee.childNodes[1].style.top = k.round(C + E) / H + "px";
                A.Ee.childNodes[1].style.height = k.round((b - C - E) / H) + "px";
                A.Ee.childNodes[2].style.height =
                    A.Ee.childNodes[3].style.height = A.Ee.childNodes[4].style.height = k.round(E / H) + "px";
                A.Ee.childNodes[2].style.width = A.Ee.childNodes[4].style.left = k.round(ca / H) + "px";
                A.Ee.childNodes[3].style.left = k.round((ca + F) / H) + "px";
                A.Ee.childNodes[3].style.width = k.round((a - ca - F) / H) + "px";
                A.Ee.childNodes[4].style.width = k.round(F / H) + "px";
                n(S)
            }

            function n(a) {
                var b = a;
                N > 780 * H ? (b = a && (540 * H + F - N) / H, y.we.childNodes[0].style.background = 0 < b ? "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.8) " + k.max(b - 20, 0) + "px, #FFF " +
                    (b + 20) + "px)" : "", P[4].style.right = (0 < b ? b + 20 : k.max(b / 2 + 20, -12)) + "px", ka.style.left = k.round(F / H) + "px", ka.style.display = 0 < b ? "" : "none", b = a && (E > J - 340 * H || F > N - 880 * H)) : y.we.childNodes[0].style.background = a ? "rgba(255,255,255,0.8)" : "";
                B.documentElement.className = b ? "u" : ""
            }

            function e() {
                P[4].firstChild.style.borderLeftWidth = D ? "2px" : "0";
                d()
            }

            function p(a) {
                if (fa != a) if (fa = a) {
                    a:{
                        a = F;
                        var b = E;
                        0 > a && (a = -a);
                        0 > b && (b = -b);
                        if (b > a) {
                            var c = a;
                            a = b;
                            b = c
                        }
                        for (; ;) {
                            if (0 == b) break a;
                            a %= b;
                            if (0 == a) {
                                a = b;
                                break a
                            }
                            b %= a
                        }
                    }
                    5 > a && (a = 1);
                    O.textContent =
                        F / a + ":" + E / a;
                    da.appendChild(O)
                } else da.removeChild(O)
            }

            for (var q = [], w = 0; w < va.length; w += 2) q.push(va[w] / va[w + 1]);
            var x = (g.Of("cutter-state") || "640,360,0").split(","), z = 0, D = q[x[2]];
            "l" == x[2] && (D = x[0] / x[1]);
            var F = k.min(x[0], N, D ? J * D : Infinity), E = k.min(x[1], J, D ? N / D : Infinity), ca, C;
            A.vh = g.a("input", {
                type: "number",
                className: "ym pi",
                style: "width: 3.875em; text-align: right",
                value: F,
                oninput: function () {
                    z = 0;
                    b(!0)
                },
                onblur: function () {
                    this.value = F
                }
            });
            A.uh = g.a("input", {
                type: "number", className: "ym pi", style: "width: 3.875em; text-align: right",
                value: E, oninput: function () {
                    z = 1;
                    b(!0)
                }, onblur: function () {
                    this.value = E
                }
            });
            var K;
            A.Pi = function () {
                b()
            };
            var ka = g.a(0, {
                style: "position: absolute; top: 50%; display: none; width: 12px; height: 32px; margin: -16px -6px; border: 4px solid #f7a715; border-width: 0 4px; z-index: 12; cursor: e-resize; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;",
                parent: B.body
            }), P = [g.a(0, {
                children: [g.a("span", {style: "border-width: 4px 0 0 0"})],
                style: "height: 20px; top: -12px; cursor: n-resize"
            }),
                g.a(0, {
                    children: [g.a("span", {style: "border-width: 0 0 4px 0"})],
                    style: "height: 20px; top: auto; bottom: -12px; cursor: s-resize"
                }), g.a(0, {
                    children: [g.a("span", {style: "border-width: 0 0 0 4px"})],
                    style: "width: 20px; left: -12px; height: 100%; cursor: w-resize"
                }), g.a(0, {
                    children: [g.a("span", {style: "border-width: 0 4px 0 0"})],
                    style: "width: 20px; left: auto; right: -12px; height: 100%; cursor: e-resize"
                }), g.a(0, {
                    children: [g.a("span", {style: "border-width: 2px 2px 8px 2px; border-radius: 6px 6px 0 0; width: 12px; margin: -8px -6px; box-shadow: 0 0 4px #000"})],
                    style: "width: 20px; height: 20px; left: auto; right: -12px; top: -22px; cursor: pointer",
                    onclick: function () {
                        if (D) D = 0, p(!1), R.selected = !0; else {
                            for (var a = 0; a < q.length; a++) if (k.round(F / q[a]) == E || k.round(E * q[a]) == F) {
                                D = q[a];
                                da.selectedIndex = a;
                                break
                            }
                            a == q.length && (D = F / E, p(!0), O.selected = !0)
                        }
                        e();
                        D && b()
                    }
                })];
            A.Tg = g.a(0, {id: "q", children: P});
            A.Ee = g.a(0, {
                id: "t", children: [g.a(0), g.a(0), g.a(0), g.a(0), A.Tg], ontouchstart: function (a) {
                    if (!Q) return v.Hd.ontouchstart(a)
                }, onmousedown: function (a) {
                    if (!Q) return v.Hd.onmousedown(a)
                },
                onwheel: v.Hd.onwheel, onmousewheel: v.Hd.onmousewheel, parent: B.body
            });
            for (var Q = !1, w = 0; 4 > w; w++) (function (a) {
                function c(f) {
                    var g = 3 == a ? (N - (N > 780 * H ? 540 * H : 0)) / H : Infinity;
                    Q = l.paused = !0;
                    var k = f[d];
                    k > g && (k = (k - g) / e * H + g);
                    var h = 2 > a ? E : F, n = 2 > a ? A.uh : A.vh, r = 0;
                    z = 2 > a;
                    P[a].firstChild.style.De = "#f7a715";
                    return {
                        Ch: function (a) {
                            a = a[d];
                            a > g && (a = (a - g) / e * H + g);
                            a = a - k;
                            a < r && (a += 1 / e);
                            r = a;
                            n.value = h + a * e;
                            b();
                            return !1
                        }, Dh: function () {
                            P[a].firstChild.style.De = "";
                            Q = l.paused = !1
                        }
                    }
                }

                var d = "client" + (2 > a ? "Y" : "X"), e = (a % 2 ? 2 : -2) * H;
                Ia(P[a], c);
                3 ==
                a && Ia(ka, c)
            })(w);
            var S, M;
            A.hl = function (a) {
                "boolean" == typeof a ? (A.dl[M] = a, g.yf("cutter-" + M, a ? "1" : "0")) : (M = a, a = A.dl[M]);
                a != S && (S = a, A.Yi.checked = a, A.Ee.style.display = a ? "block" : "", L.style.display = a ? "inline" : "", L.childNodes[2].data = a ? u.Rb + ": " : u.Sb + ".", ga.style.display = a ? "inline" : "none", a ? f() : n(!1), c())
            };
            for (var L = g.a("label", {
                style: "",
                children: [A.Yi = g.a("input", {
                    type: "checkbox", onclick: function () {
                        A.hl(this.checked)
                    }
                }), " ", u.Sb + "."]
            }), da = g.a("select", {
                onchange: function () {
                    p(!1);
                    D = q[this.selectedIndex] ||
                        0;
                    e();
                    b()
                }
            }), w = 0; w < va.length; w += 2) g.a("option", {
                textContent: va[w] == Ya ? u.hd : va[w] + ":" + va[w + 1],
                parent: da
            });
            var R = g.a("option", {textContent: u.Vb, selected: !0, parent: da}), fa = !1,
                O = g.a("option", {textContent: "\ufffd"});
            "x" == x[2] ? e() : "l" == x[2] ? (p(!0), O.selected = !0) : da.selectedIndex = x[2];
            var ga = g.a("span", {
                style: "display: none",
                children: [g.a("span", {
                    style: "white-space: nowrap",
                    children: [A.vh, "px \u00d7 ", A.uh, "px,"]
                }), g.a("wbr"), g.a("span", {style: "white-space: nowrap", children: [" " + u.Ub + ": ", da, "."]})]
            }), w =
                g.a(0, {
                    style: "margin-top: 0.5em", children: [u.gd, ":", g.a(0, {
                        style: "-webkit-columns: 2; -moz-columns: 2; columns: 2",
                        children: [A.lp = g.a("input", {
                            className: "ym",
                            style: (A.Fl ? "" : "display: none;") + "width: 90%; font-size: 80%",
                            placeholder: "Text..."
                        }), g.a("label", {
                            style: A.Fl ? "" : "display: none;",
                            children: [A.kp = g.a("input", {type: "checkbox", checked: !0}), " logo,"]
                        }), g.a("label", {
                            children: [A.Cm = g.a("input", {
                                type: "checkbox",
                                checked: !0
                            }), " " + u.Wb + ","]
                        }), g.a("label", {
                            children: [A.Bk = g.a("input", {type: "checkbox", checked: !0}),
                                " " + u.pa + ","]
                        }), g.a("label", {
                            children: [A.Dm = g.a("input", {
                                type: "checkbox",
                                checked: !0
                            }), " " + u.qa + ","]
                        }), g.a("label", {
                            children: [A.jp = g.a("input", {
                                type: "checkbox",
                                checked: !h.fg
                            }), " " + u.Xb + "."]
                        })]
                    })]
                });
            A.Pi();
            clearTimeout(K);
            return g.a(0, {style: "margin-bottom: 0.5em", children: [L, ga, w]})
        }, lo: function (a) {
            return g.a(0, {
                style: "margin-bottom: 0.666em", children: [u.ra, ":", g.a(0, {
                    style: "-webkit-columns: 2; -moz-columns: 2; columns: 2", children: [g.a("label", {
                        children: [A.di = g.a("input", {
                            type: "checkbox", onclick: a,
                            checked: !0
                        }), " " + u.Wb + ","]
                    }), g.a("label", {
                        children: [A.Hk = g.a("input", {
                            type: "checkbox",
                            onclick: a,
                            checked: !0
                        }), " " + u.pa + ","]
                    }), g.a("label", {
                        children: [A.wh = g.a("input", {
                            type: "checkbox",
                            onclick: a,
                            checked: !0
                        }), " " + u.qa, ","]
                    }), g.a("label", {
                        children: [A.xh = g.a("input", {
                            type: "checkbox",
                            onclick: a,
                            checked: "off" != h.Ue
                        }), " " + u.Yb + "."]
                    })]
                })]
            })
        }, rg: function () {
            A.Jk && (A.Jk.textContent = u.na)
        }
    }, w = {
        Qg: 0, El: 1, Kf: function (a, b) {
            var c = B.createElementNS("http://www.w3.org/2000/svg", a);
            if (!b) return c;
            for (var d in b) c.setAttribute(d,
                b[d]);
            return c
        }, Vi: function () {
            return db.Vi.apply(db, arguments)
        }, pe: function (a, b, c) {
            SunCalc.Zn();
            w.le = [];
            for (var d in w.ae.le) {
                var f = {};
                f.alt = parseFloat(d);
                f.top = w.color(w.ae.le[d].top);
                f.bottom = w.color(w.ae.le[d].bottom);
                f.$e = w.ae.le[d].$e;
                f.Ze = w.ae.le[d].Ze;
                w.le.push(f)
            }
            w.le.sort(function (a, b) {
                return b.alt - a.alt
            });
            w.le.unshift({alt: 180, top: w.le[0].top, bottom: w.le[0].bottom, $e: w.le[0].$e, Ze: w.le[0].Ze});
            w.le.reverse();
            w.le.unshift({alt: -180, top: w.le[0].top, bottom: w.le[0].bottom, $e: w.le[0].$e, Ze: w.le[0].Ze});
            w.Hm = a;
            w.Qm = b;
            w.time = c;
            w.F = w.getTimezoneOffset(w.time);
            Date.pi(w.F);
            var h = g.ge("astro-date");
            if (h) {
                var e = g.ge("astro-date-next"), l = g.ge("astro-date-prev");
                h.onchange = function () {
                    var a = new Date(1E3 * h.value);
                    w.xo(a.getFullYear(), a.getMonth(), a.getDate());
                    e.className = e.className.replace(/ inactive/, "") + (h.selectedIndex >= h.options.length - 1 ? " inactive" : "");
                    l.className = l.className.replace(/ inactive/, "") + (0 >= h.selectedIndex ? " inactive" : "")
                };
                g.ge("astro-date-next").onclick = function () {
                    h.selectedIndex = k.min(h.selectedIndex +
                        1, h.options.length - 1);
                    h.onchange();
                    h.yi && h.yi();
                    return !1
                };
                g.ge("astro-date-prev").onclick = function () {
                    h.selectedIndex = k.max(h.selectedIndex - 1, 0);
                    h.onchange();
                    h.yi && h.yi();
                    return !1
                }
            }
            w.Ck();
            var n = (g.ge("astro-sun") || {}).offsetWidth + "/" + (g.ge("astro-moon") || {}).offsetWidth;
            D.addEventListener("resize", w.bl = function () {
                var a = (g.ge("astro-sun") || {}).offsetWidth + "/" + (g.ge("astro-moon") || {}).offsetWidth;
                n !== a && (n = a, w.Ck())
            }, !1)
        }, Po: function () {
            w.bl && (D.removeEventListener("resize", w.bl, !1), delete w.bl)
        }, Ck: function () {
            w.Ql(w.Qg,
                w.Hm, w.Qm);
            w.Ql(w.El, w.Hm, w.Qm);
            w.ln()
        }, Gg: "nightEnd nauticalDawn dawn rise set dusk nauticalDusk night".split(" "), table: function (a, b, c, d) {
            var f = 0, k = null, e = g.ge("astro-" + ["sun", "moon"][a] + "-table");
            if (e) {
                for (; e.rows[1];) e.deleteRow(1);
                if (a === w.Qg) for (w.jm || (w.jm = e.rows[0].cells[0].innerHTML), e.rows[0].cells[0].innerHTML = w.jm + " " + w.qk(w.time), c = new Date(+w.time), c.setLocalHours(0), c.setLocalMinutes(0), c.setLocalSeconds(0), c.setLocalMilliseconds(0), d = new Date(+c + 864E5), a = w.ae.Gg[0], f = 0; 9 > f; f++) {
                    var h =
                        8 === f ? d : b[w.Gg[f]];
                    +h ? (k = e.insertRow(-1), k.insertCell(-1).innerHTML = '<span style="display: inline-block; width: 0.75em; height: 0.75em; border: 1px solid #BBB; border-color: rgba(0,0,0,0.166); background: ' + (a.Wq || a.color) + '"></span> ' + a.label(), k.insertCell(-1).innerHTML = w.Nf(c) + " " + u.ua + " " + w.Nf(h), k.insertCell(-1).innerHTML = w.jq(h - c), c = h, 8 > f && (a = w.ae.Gg[f + 1] || w.ae.Gg[7 - f])) : 5 > f && (a = w.ae.Gg[(f + 1) % 5])
                } else for (b = new Date(+w.time), b.setLocalHours(12, 0, 0, 0), f = 0; 5 > f; f++) {
                    k = e.insertRow(-1);
                    k.insertCell(-1).innerHTML =
                        '<span style="display: inline-block; width: 0.75em; height: 0.75em; border: 1px solid #000; border-radius: 100%; background: #000; overflow: hidden"><span style="display: block; width: 100%; height: 100%; margin-left: ' + (100 - 200 * SunCalc.ai(b).nj) + '%; background: #FFF"></span></span> ' + w.qk(b);
                    a = w.getTimezoneOffset(b);
                    h = w.Vi(b, c, d, a / 60);
                    h.set && h.set.pi(a);
                    h.rise && h.rise.pi(a);
                    if (h.alwaysUp || h.alwaysDown) k.insertCell(-1).innerHTML = "&mdash;", k.insertCell(-1).innerHTML = "&mdash;", k.insertCell(-1).innerHTML =
                        "&mdash;";
                    +h.rise === +h.set ? (k.insertCell(-1).innerHTML = "&mdash;", k.insertCell(-1).innerHTML = "&mdash;", k.insertCell(-1).innerHTML = "&mdash;") : +h.rise > +h.set ? (k.insertCell(-1).innerHTML = "&mdash;", k.insertCell(-1).innerHTML = w.Nf(h.set), k.insertCell(-1).innerHTML = w.Nf(h.rise)) : (k.insertCell(-1).innerHTML = w.Nf(h.rise), k.insertCell(-1).innerHTML = w.Nf(h.set), k.insertCell(-1).innerHTML = "&mdash;");
                    a = b.setLocalHours(0);
                    b.setLocalHours(23, 59, 59);
                    b.setLocalMinutes(59);
                    b.setLocalSeconds(59);
                    h = +b;
                    k.insertCell(-1).innerHTML =
                        w.rk(SunCalc.ai(a).Zh) + " " + u.ua + " " + w.rk(SunCalc.ai(h).Zh);
                    b.setLocalHours(36)
                }
            }
        }, jq: function (a) {
            a = k.round(a / 6E4);
            return 60 < a ? k.floor(a / 60) + " " + u.bc + " " + a % 60 + " " + u.ta : a + " " + u.ta
        }, oj: [], Mk: function () {
            clearTimeout(w.Lk);
            w.Il = 300;
            return !1
        }, Sm: function (a) {
            clearTimeout(w.Lk);
            var b = this.getBoundingClientRect();
            a = k.min(k.max((a.clientX - b.left) / (b.right - b.left), 0), 1);
            w.Rj(a)
        }, Kk: function () {
            clearTimeout(w.Lk);
            w.Lk = setTimeout(function () {
                w.Il = 500;
                w.ln(!0)
            }, 100);
            return !1
        }, ln: function (a) {
            var b = new Date(+w.time);
            b.setLocalHours(0, 0, 0, 0);
            b = (w.time - b) / 864E5;
            a ? w.Rj(b) : w.setPosition(b)
        }, Rj: function (a) {
            w.hq = a;
            if (!w.Sk) {
                var b = +new Date;
                w.Sk = setInterval(function () {
                    var a = +new Date;
                    step = (a - b) / w.Il;
                    b = a;
                    a = w.hq - w.im;
                    k.abs(a) < step ? (clearInterval(w.Sk), w.Sk = null) : a = k.min(k.max(a, -step), step);
                    w.setPosition(w.im + a)
                }, 13)
            }
        }, setPosition: function (a) {
            w.im = a;
            for (var b = 0; b < w.oj.length; b++) w.oj[b](a)
        }, xo: function (a, b, c) {
            w.time.setFullYear(a, b, c);
            w.F = w.getTimezoneOffset(w.time);
            Date.pi(w.F);
            w.oj.length = 0;
            w.Ck()
        }, eq: function (a) {
            if (!a.eo) {
                a.eo =
                    !0;
                a.addEventListener("mousemove", w.Sm, !1);
                a.addEventListener("mouseout", w.Kk, !1);
                a.addEventListener("mouseover", w.Mk, !1);
                var b = function () {
                    b = null;
                    a.removeEventListener("mousemove", w.Sm);
                    a.removeEventListener("mouseout", w.Kk);
                    a.removeEventListener("mouseover", w.Mk)
                }, c = g.a(0), d = g.a(0), f = !1;
                c.appendChild(d);
                c.style.cssText = "position: absolute; left: 0; right: 0; top: 0; bottom: 0; overflow: auto; z-index: 1000";
                d.style.cssText = "width: 200%; height: 100%; background: rgba(0,0,0,0)";
                c.onscroll = function () {
                    f &&
                    w.Rj(k.min(k.max((a.offsetWidth - this.scrollLeft) / a.offsetWidth, 0), 1))
                };
                a.appendChild(c);
                c.scrollHeight - c.offsetHeight && a.removeChild(c);
                a.addEventListener("touchstart", function (d) {
                    b && b();
                    c.scrollLeft = a.getBoundingClientRect().right - d.touches[0].clientX;
                    f = !0;
                    return w.Mk.call(this, d.touches[0])
                }, !1);
                d = function () {
                    f = !1;
                    return w.Kk.apply(this, arguments)
                };
                a.addEventListener("touchend", d, !1);
                a.addEventListener("touchcancel", d, !1)
            }
        }, Ql: function (a, b, c) {
            function d(a) {
                var b = new Date(+w.time);
                b.setLocalHours(0);
                b.setLocalMinutes(1440 * a);
                var c = k.floor(l * a);
                a = v[c];
                var d = x[c].altitude / k.PI * 180;
                w.Yg(f + "-time", w.Nf(b));
                w.Yg(f + "-altitude", (0 !== a.altitude ? 0 > a.altitude ? "&minus;" : "+" : "") + k.abs(k.round(a.altitude / k.PI * 180)) + " \u00b0");
                w.Yg(f + "-azimuth", '<span style="' + "-webkit-#-moz-#-ms-#-o-##".replace(/#/g, "transform: rotate(" + a.azimuth.toFixed(3) + "rad);") + '; display: inline-block; vertical-align: middle; width: 1em; text-align: center">&darr;</span>' + H[(a.azimuth / k.PI * 4 + 4.5) % 8 | 0]);
                w.Yg(f + "-fraction", w.rk(a.Zh));
                w.Yg(f + "-phase", w.ae.Gg[-.833 > d ? -6 > d ? -12 > d ? -18 > d ? 0 : 1 : 2 : 3 : 4].label());
                E.style.left = c + "px";
                for (c = 0; c < w.le.length && !(d < w.le[c].alt); c++) ;
                c >= w.le.length || (b = w.le[c - 1], c = w.le[c], d = (d - b.alt) / (c.alt - b.alt), Q.style.opacity = k.min(k.max(w.Pl(b.$e, c.$e, d), 0), 1), S.style.opacity = k.min(k.max(w.Pl(b.Ze, c.Ze, d), 0), 1), D.setAttribute("stop-color", w.dm(b.top, c.top, d)), F.setAttribute("stop-color", w.dm(b.bottom, c.bottom, d)), E.style.top = n / 2 - a.altitude / k.PI * n + "px")
            }

            var f = "astro-" + ["sun", "moon"][a], h = g.ge(f);
            if (h) {
                for (var e =
                    0; h.childNodes[e];) h.childNodes[e].onscroll ? e++ : h.removeChild(h.childNodes[e]);
                h.style.position = "relative";
                h.style.webkitUserSelect = "none";
                h.style.MozUserSelect = "none";
                h.style.msUserSelect = "none";
                h.style.userSelect = "none";
                var l = h.offsetWidth, n = h.offsetHeight, p = w.Kf("svg", {width: "100%", height: "100%"});
                h.addEventListener ? w.eq(h) : h.style.display = "none";
                var q = new Date(+w.time);
                q.setLocalHours(0);
                q.setLocalMinutes(0);
                q.setLocalSeconds(0);
                q.setLocalMilliseconds(0);
                w.Yg(f + "-date", w.qk(q));
                w.Yg(f + "-timezone",
                    "UTC+" + (w.F / 60 + 100 + "").slice(1) + ":" + (w.F % 60 + 100 + "").slice(1));
                for (var v = [], x = a === w.Qg ? v : [], y = -1, A = 0, z = [], e = 0; e <= l; e++) {
                    q.setLocalHours(0);
                    q.setLocalMinutes(e / l * 1440);
                    var C = a === w.Qg ? SunCalc.zm(q, b, c) : SunCalc.$o(q, b, c);
                    v.push(C);
                    a !== w.Qg && (x.push(SunCalc.zm(q, b, c)), C.Zh = SunCalc.ai(q).Zh);
                    C = x[e].altitude / k.PI * 180;
                    C = e !== l ? -.833 > C ? -6 > C ? -12 > C ? -18 > C ? 0 : 1 : 2 : 3 : 4 : -1;
                    C !== y && (-1 < y && z.push({nj: w.ae.Gg[y], start: A, length: e - A}), A = e, y = C)
                }
                q = [];
                for (e = 0; e < v.length; e++) e && .1 < k.abs(v[e].altitude - v[e - 1].altitude) && v[e + 1] &&
                (v[e].altitude = (v[e - 1].altitude + v[e + 1].altitude) / 2), q.push(e + " " + (n / 2 - v[e].altitude / k.PI * n).toFixed(3));
                for (e = 0; e < z.length; e++) p.appendChild(w.Kf("rect", {
                    x: z[e].start,
                    y: "50%",
                    width: z[e].length,
                    height: "50%",
                    fill: z[e].nj.color
                }));
                var e = w.Kf("path", {
                        d: "M" + q.join("L"),
                        stroke: "#111",
                        "stroke-width": "1px",
                        fill: "none",
                        "stroke-dasharray": "1 6"
                    }), z = w.Kf("rect", {width: "100%", height: "50%", fill: "url(#astro-back)"}),
                    q = w.Kf("linearGradient", {id: "astro-back", y1: "0%", y2: "100%", x1: "50%", x2: "50%"}),
                    D = w.Kf("stop", {
                        "stop-color": "#0072B5",
                        offset: 0
                    }), F = w.Kf("stop", {"stop-color": "#B4D4E9", offset: 1});
                q.appendChild(D);
                q.appendChild(F);
                p.appendChild(q);
                p.appendChild(z);
                p.appendChild(e);
                e = e.cloneNode(!0);
                e.setAttribute("stroke", "#EEE");
                e.setAttribute("stroke-dashoffset", "3.5");
                p.appendChild(e);
                e = w.Kf("path", {
                    d: "M0 " + n / 2 + " h" + l,
                    stroke: "rgba(0,0,0,0.25)",
                    "stroke-width": "1px",
                    fill: "none"
                });
                p.appendChild(e);
                e = new Date(+w.time);
                e.setLocalHours(12);
                e.setLocalMinutes(0);
                e.setLocalSeconds(0);
                e.setLocalMilliseconds(0);
                var z = w.getTimezoneOffset(e),
                    z = a === w.Qg ? SunCalc.fp(e, b, c) : w.Vi(e, b, c, z / 60), P;
                for (P in w.ae.tl) z[P] && !isNaN(z[P]) && (y = (60 * z[P].getLocalHours() + z[P].getLocalMinutes()) / 1440 * l, e = w.Kf("path", {
                    d: "M" + y + " " + (n / 2 - 5) + " v 10",
                    stroke: "#111",
                    "stroke-width": "2px",
                    fill: "none"
                }), q = w.Kf("text", {
                    x: y,
                    y: n / 2 + 20,
                    "font-family": "Helvetica Neue, Arial",
                    "font-size": "14px",
                    fill: "#666",
                    "text-anchor": "middle",
                    "alignment-baseline": "central"
                }), y = w.Kf("text", {
                    x: y,
                    y: n / 2 + 40,
                    "font-family": "Helvetica Neue, Arial",
                    "font-weight": "bold",
                    "font-size": "16px",
                    fill: "#666",
                    "text-anchor": "middle",
                    "alignment-baseline": "central"
                }), q.appendChild(B.createTextNode(w.ae.tl[P]())), y.appendChild(B.createTextNode(w.Nf(z[P]))), p.appendChild(e), p.appendChild(q), p.appendChild(y));
                w.table(a, z, b, c);
                var Q = g.a(0);
                Q.style.cssText = "position: absolute; width: 100%; height: 50%; left: 0; top: 0; opacity: 0; background: url(" + w.ae.Ei + w.ae.$e + ")";
                var S = Q.cloneNode(!0);
                S.style.background = "url(" + w.ae.Ei + w.ae.Ze + ")";
                h.appendChild(Q);
                h.appendChild(S);
                var E = g.a("img");
                E.style.cssText = "position: absolute; margin: -16px;";
                a === w.Qg ? E.src = w.ae.Ei + w.ae.sun : a === w.El && (a = w.ae.Rm.length, E.src = w.ae.Ei + w.ae.Rm[(SunCalc.ai(new Date(+w.time)).nj * a + a - .5) % a | 0]);
                h.appendChild(E);
                var H = [u.Ga, u.Ha, u.Fa, u.Ka, u.Ja, u.La, u.Ma, u.Ia];
                w.oj.push(d);
                h.appendChild(p)
            }
        }, Nf: function (a) {
            return "string" === typeof a ? a : a ? a.Yo(w.ae.Tq) : "&mdash;"
        }, qk: function (a) {
            return a ? a.Xo(u.J) : "&mdash;"
        }, rk: function (a) {
            return k.round(100 * a) + " %"
        }, Yg: function (a, b) {
            (g.ge(a) || {}).innerHTML = b
        }, color: function (a) {
            var b = null;
            return /^\#[0-9A-F]{3}$/i.test(a) ? (b = parseInt(a.substr(1),
                16), [17 * (b / 16 / 16 | 0), 17 * (b / 16 % 16 | 0), b % 16 * 17]) : /^\#[0-9A-F]{6}$/i.test(a) ? (b = parseInt(a.substr(1), 16), [b / 256 / 256 | 0, b / 256 % 256 | 0, b % 256]) : /^rgb?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(a) ? (a = a.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i), [parseInt(a[1] || 10), parseInt(a[2] || 10), parseInt(a[3] || 10)]) : [0, 0, 0]
        }, Pl: function (a, b, c) {
            return a * (1 - c) + b * c
        }, dm: function (a, b, c) {
            return "rgb(" + k.floor(a[0] * (1 - c) + b[0] * c) + ", " + k.floor(a[1] * (1 - c) + b[1] * c) + ", " + k.floor(a[2] * (1 - c) + b[2] * c) + ")"
        }, cj: function (a, b, c) {
            var d;
            d = c + (3 > b ? a-- : a - 2);
            return ~~(c - (23 * b / 9 + d + 4 + a / 4 - a / 100 + a / 400) % 7 + 1)
        }, getTimezoneOffset: function (a) {
            var b = w.ae.F, c = 0, d = 0, f = 0, g = 0, e = b.Ol, k = 60, h = a.getFullYear(), l = 5 * h / 4 | 0;
            if (0 === b.Xh) return b.Ol;
            if (1 === b.Xh) c = 31 - (4 + l) % 7, d = 31 - (1 + l) % 7, f = 3, g = 10; else if (2 === b.Xh) 2007 > h ? (c = 1 + (2 + 6 * h - (h / 4 | 0)) % 7, d = 31 - (1 + l) % 7, f = 4, g = 10) : (c = 14 - (1 + l) % 7, d = 7 - (1 + l) % 7, f = 3, g = 11); else if (3 === b.Xh) for (e += 60, k = -60, f = 4, g = 9, d = w.cj(h, g, 30), c = w.cj(h, f, 30); 0 < c - 7;) c -= 7; else if (4 === b.Xh) {
                e += 60;
                k = -60;
                f = 4;
                g = 10;
                for (d = w.cj(h, g, 31); 0 < d - 7;) d -= 7;
                for (c = w.cj(h,
                    f, 30); 0 < c - 7;) c -= 7
            }
            b = new Date(h, g - 1, d, 3, 0, 0);
            a = +a;
            a > +new Date(h, f - 1, c, 2, 0, 0) && a < +b && (e += k);
            return e
        }
    };
    Date.prototype.gc = (new Date).getTimezoneOffset();
    Date.pi = function (a) {
        return this.prototype.gc = a
    };
    Date.getTimezoneOffset = function () {
        return this.prototype.gc
    };
    Date.prototype.pi = function (a) {
        return this.gc = a
    };
    Date.prototype.getTimezoneOffset = function () {
        return this.gc
    };
    Date.prototype.Yo = function (a) {
        return (this.getLocalHours() + 100 + "").slice(1) + ":" + (this.getLocalMinutes() + 100 + "").slice(1) + (a ? ":" + (this.getLocalSeconds() +
            100 + "").slice(1) : "")
    };
    Date.prototype.Xo = function (a) {
        var b = this;
        return a.replace(/(\\?)(d+|M+|y+|H+|h+|m+|s+|t+)/g, function (a, d, f) {
            d && (d = a.slice(0, 2), f = a.slice(2));
            var g = f.length;
            switch (f.charAt(0)) {
                case "d":
                    f = 2 >= g ? b.getLocalDate().toString().Ce(g, "0") : 3 === g ? (u.fe || [])[b.getLocalDay()] || u.I[b.getLocalDay()].slice(0, 2) : u.I[b.getLocalDay()];
                    break;
                case "M":
                    a = b.getLocalMonth();
                    f = 2 >= g ? (a + 1).toString().Ce(g, "0") : 3 === g ? u.ba[a] || u.L[a].slice(0, 3) : u.L[a];
                    break;
                case "y":
                    a = b.getLocalFullYear(g);
                    2 >= g && (a %= 100);
                    f = a.toString().Ce(g, "0");
                    break;
                case "H":
                    f = b.getLocalHours().toString().Ce(g, "0");
                    break;
                case "h":
                    f = (b.getLocalHours() % 12 || 12).toString().Ce(g, "0");
                    break;
                case "t":
                    f = (12 > b.getLocalHours() ? u.yn : u.zn).slice(0, g);
                    break;
                case "m":
                    f = b.getLocalMinutes().toString().Ce(g, "0");
                    break;
                case "s":
                    f = b.getLocalSeconds().toString().Ce(g, "0")
            }
            return d + f
        }).replace(/\\(.)/g, "$1")
    };
    "Milliseconds Seconds Minutes Hours Date Month FullYear Year Day".split(" ").forEach(function () {
        return function (a) {
            Date.prototype["getLocal" +
            a] = function () {
                return (new Date(+this + 6E4 * this.gc))["getUTC" + a]()
            };
            return Date.prototype["setLocal" + a] = function (b) {
                var c, d;
                d = 6E4 * this.gc;
                c = new Date(+this + d);
                c["setUTC" + a](b);
                b = c.getTime() - d;
                this.setTime(b);
                return b
            }
        }
    }(this));
    w.ae = {
        Ei: "https://cdnstatic.ventusky.com/images/astro/",
        sun: "slunce.png",
        Rm: "0.png 1.png 2.png 3.png 4.png 5.png 6.png 7.png 8.png 9.png 10.png 11.png 12.png 13.png 14.png 15.png 16.png 17.png 18.png 19.png 20.png 21.png 22.png 23.png 24.png 25.png 26.png 27.png 28.png 29.png 30.png".split(" "),
        $e: "hvezdy.png",
        Ze: "vesmir.png",
        le: {
            3: {top: "#1288CC", bottom: "#B4D4E9", $e: 0, Ze: 0},
            "-3": {top: "#0072B5", bottom: "#67A9D3", $e: 0, Ze: 0},
            "-9": {top: "#00395A", bottom: "#3481B2", $e: .5, Ze: 0},
            "-15": {top: "#00395A", bottom: "#0072B5", $e: 1, Ze: .2},
            "-21": {top: "#000000", bottom: "#000000", $e: 1, Ze: .5},
            "-60": {top: "#000000", bottom: "#000000", $e: 1, Ze: 1}
        },
        tl: {
            rise: function () {
                return u.Da
            }, set: function () {
                return u.Ea
            }
        },
        Gg: [{
            label: function () {
                return u.Ca
            }, color: "#aaaaaa"
        }, {
            label: function () {
                return u.ya
            }, color: "#cccccc"
        }, {
            label: function () {
                return u.Ba
            },
            color: "#d0dce5"
        }, {
            label: function () {
                return u.za
            }, color: "#d7eaf6"
        }, {
            label: function () {
                return u.Aa
            }, color: "#fdedd0"
        }]
    };
    (function () {
        function a(a) {
            return new Date(864E5 * (a + .5 - 2440588))
        }

        function b(a, b) {
            return v(n(a) * p(y) - q(b) * n(y), p(a))
        }

        function c(a, b) {
            return u(n(b) * p(y) + p(b) * n(y) * n(a))
        }

        function d(a, b, c) {
            return v(n(a), p(a) * n(b) - q(c) * p(b))
        }

        function f(a, b, c) {
            return u(n(b) * n(c) + p(b) * p(c) * p(a))
        }

        function g(a) {
            var b = x * (1.9148 * n(a) + .02 * n(2 * a) + 3E-4 * n(3 * a));
            return a + b + 102.9372 * x + l
        }

        function e(a) {
            a = g(x * (357.5291 + .98560028 *
                a));
            return {bf: c(a, 0), tg: b(a, 0)}
        }

        function h(a) {
            var d = x * (134.963 + 13.064993 * a), e = x * (93.272 + 13.22935 * a);
            a = x * (218.316 + 13.176396 * a) + 6.289 * x * n(d);
            e = 5.128 * x * n(e);
            d = 385001 - 20905 * p(d);
            return {tg: b(a, e), bf: c(a, e), lm: d}
        }

        var l = k.PI, n = k.sin, p = k.cos, q = k.tan, u = k.asin, v = k.atan2, w = k.acos, x = l / 180,
            y = 23.4397 * x, z = {
                zm: function (a, b, c) {
                    c = x * -c;
                    b = x * b;
                    var g = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
                    a = e(g);
                    c = x * (280.16 + 360.9856235 * g) - c - a.tg;
                    return {azimuth: d(c, b, a.bf), altitude: f(c, b, a.bf)}
                }
            }, A = z.tl = [[-.833, "sunrise", "sunset"], [-.3, "sunriseEnd",
                "sunsetStart"], [-6, "dawn", "dusk"], [-12, "nauticalDawn", "nauticalDusk"], [-18, "nightEnd", "night"], [6, "goldenHourEnd", "goldenHour"]];
        z.Zn = function () {
            A.push([-.833, "rise", "set"])
        };
        z.fp = function (b, d, e) {
            e = x * -e;
            d = x * d;
            b = k.round(b.valueOf() / 864E5 - .5 + 2440588 - 2451545 - 9E-4 - e / (2 * l));
            var f = 9E-4 + (0 + e) / (2 * l) + b, h = x * (357.5291 + .98560028 * f), q = g(h), u = c(q, 0),
                f = 2451545 + f + .0053 * n(h) - .0069 * n(2 * q), v, y, z, B, C, D = {Vq: a(f), Pq: a(f - .5)};
            v = 0;
            for (y = A.length; v < y; v += 1) {
                z = A[v];
                B = e;
                C = b;
                var E = h, F = q, H;
                H = d;
                var K = u;
                H = w((n(z[0] * x) - n(H) * n(K)) /
                    (p(H) * p(K)));
                B = 2451545 + (9E-4 + (H + B) / (2 * l) + C) + .0053 * n(E) - .0069 * n(2 * F);
                C = f - (B - f);
                D[z[1]] = a(C);
                D[z[2]] = a(B)
            }
            return D
        };
        z.$o = function (a, b, c) {
            c = x * -c;
            b = x * b;
            var e = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
            a = h(e);
            c = x * (280.16 + 360.9856235 * e) - c - a.tg;
            e = f(c, b, a.bf);
            e += .017 * x / q(e + 10.26 * x / (e + 5.1 * x));
            return {azimuth: d(c, b, a.bf), altitude: e, Mq: a.lm}
        };
        z.ai = function (a) {
            var b = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
            a = e(b);
            var b = h(b), c = w(n(a.bf) * n(b.bf) + p(a.bf) * p(b.bf) * p(a.tg - b.tg)),
                c = v(149598E3 * n(c), b.lm - 149598E3 * p(c));
            a = v(p(a.bf) *
                n(a.tg - b.tg), n(a.bf) * p(b.bf) - p(a.bf) * n(b.bf) * p(a.tg - b.tg));
            return {Zh: (1 + p(c)) / 2, nj: .5 + .5 * c * (0 > a ? -1 : 1) / k.PI, Kh: a}
        };
        D.SunCalc = z
    })();
    var db = function () {
        function a(a) {
            return a - 360 * k.floor(a / 360)
        }

        function b(a) {
            return k.sin(a * k.PI / 180)
        }

        function c(a) {
            return k.cos(a * k.PI / 180)
        }

        function d(a, b) {
            return 180 / k.PI * k.atan(a / b) - 180 * (0 > b)
        }

        function f(e, f, g, h, l, n, p, q) {
            n = a(98.9818 + .985647352 * (367 * g - k.floor(7 * (g + k.floor((h + 9) / 12)) / 4) + k.floor(275 * h / 9) + l - 730530 + n / 24) + 15 * n + q) / 15;
            g = c(15 * (n - e)) * c(f);
            h = b(f);
            l = g * b(p) - h * c(p);
            e =
                b(15 * (n - e)) * c(f);
            return [d(g * c(p) + h * b(p), k.sqrt(l * l + e * e)), a(d(e, l) + 180)]
        }

        function g(f, r, z, A) {
            f = 367 * f - k.floor(7 * (f + k.floor((r + 9) / 12)) / 4) + k.floor(275 * r / 9) + z - 730530 + A / 24 + 2451543.5;
            r = (f - 2451545) / 36525;
            var B = r * r, D = B * r, E = D * r;
            z = 218.3164477 + 481267.88123421 * r - .0015786 * B + D / 538841 - E / 65194E3;
            A = 297.8501921 + 445267.1114034 * r - .0018819 * B + D / 545868 - E / 113065E3;
            for (var F = 357.5291092 + 35999.0502909 * r - 1.536E-4 * B + D / 2449E4, H = 134.9633964 + 477198.8675055 * r + .0087414 * B + D / 69699 - E / 14712E3, D = 93.272095 + 483202.0175233 * r - .0036539 * B - D /
                3526E3 + E / 86331E4, E = 119.75 + 131.849 * r, K = 1 - .002516 * r - 7.4E-6 * B, N = K * K, M = 0, B = 0, L = 1, J = 0, J = 0; 60 > J; J++) L = 1, 1 === k.abs(h[J]) && (L = K), 2 === k.abs(h[J]) && (L = N), M += p[J] * L * b(a(e[J] * A + h[J] * F + l[J] * H + n[J] * D)), B += q[J] * L * c(a(e[J] * A + h[J] * F + l[J] * H + n[J] * D));
            for (var O = 0, J = 0; 60 > J; J++) L = 1, 1 === k.abs(v[J]) && (L = K), 2 === k.abs(v[J]) && (L = N), O += y[J] * L * b(a(u[J] * A + v[J] * F + w[J] * H + x[J] * D));
            M = M + 3958 * b(a(E)) + 1962 * b(a(z - D)) + 318 * b(a(53.09 + 479264.29 * r));
            O = O - 2235 * b(a(z)) + 382 * b(a(313.45 + 481266.484 * r)) + 175 * b(a(E - D)) + 175 * b(a(E + D)) + 127 * b(a(z - H)) - 115 *
                b(a(z + H));
            r = a(z + M / 1E6);
            z = a(O / 1E6);
            180 < z && (z = z - 360);
            A = k.round(385000.56 + B / 1E3);
            F = 23.4393 - 3.563E-9 * (f - 2451543.5);
            f = a(d(b(r) * c(F) - k.tan(z * k.PI / 180) * b(F), c(r))) / 15;
            r = a(180 / k.PI * k.asin(b(z) * c(F) + c(z) * b(F) * b(r)));
            180 < r && (r = r - 360);
            return [f, r, A]
        }

        var e = [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 1, 0, 2, 0, 0, 4, 0, 4, 2, 2, 1, 1, 2, 2, 4, 2, 0, 2, 2, 1, 2, 0, 0, 2, 2, 2, 4, 0, 3, 2, 4, 0, 2, 2, 2, 4, 0, 4, 1, 2, 0, 1, 3, 4, 2, 0, 1, 2, 2],
            h = [0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, -2, 1, 2, -2, 0, 0, -1, 0, 0, 1, -1, 2, 2, 1, -1, 0, 0, -1, 0, 1, 0, 1, 0, 0, -1, 2, 1, 0, 0],
            l = [1, -1, 0, 2, 0, 0, -2, -1, 1, 0, -1, 0, 1, 0, 1, 1, -1, 3, -2, -1, 0, -1, 0, 1, 2, 0, -3, -2, -1, -2, 1, 0, 2, 0, -1, 1, 0, -1, 2, -1, 1, -2, -1, -1, -2, 0, 1, 4, 0, -2, 0, 2, 1, -2, -3, 2, 1, -1, 3, -1],
            n = [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, -2, 2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, -2, 2, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -2, -2, 0, 0, 0, 0, 0, 0, 0, -2],
            p = [6288774, 1274027, 658314, 213618, -185116, -114332, 58793, 57066, 53322, 45758, -40923, -34720, -30383, 15327, -12528, 10980, 10675, 10034, 8548, -7888, -6766, -5163, 4987, 4036, 3994, 3861, 3665, -2689, -2602, 2390, -2348, 2236, -2120, -2069, 2048, -1773,
                -1595, 1215, -1110, -892, -810, 759, -713, -700, 691, 596, 549, 537, 520, -487, -399, -381, 351, -340, 330, 327, -323, 299, 294, 0],
            q = [-20905355, -3699111, -2955968, -569925, 48888, -3149, 246158, -152138, -170733, -204586, -129620, 108743, 104755, 10321, 0, 79661, -34782, -23210, -21636, 24208, 30824, -8379, -16675, -12831, -10445, -11650, 14403, -7003, 0, 10056, 6322, -9884, 5751, 0, -4950, 4130, 0, -3958, 0, 3258, 2616, -1897, -2117, 2354, 0, 0, -1423, -1117, -1571, -1739, 0, -4421, 0, 0, 0, 0, 1165, 0, 0, 8752],
            u = [0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 4,
                0, 4, 2, 2, 2, 2, 0, 2, 2, 2, 2, 4, 2, 2, 0, 2, 1, 1, 0, 2, 1, 2, 0, 4, 4, 1, 4, 1, 4, 2],
            v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1, -1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 1, 0, -1, -2, 0, 1, 1, 1, 1, 1, 0, -1, 1, 0, -1, 0, 0, 0, -1, -2],
            w = [0, 1, 1, 0, -1, -1, 0, 2, 1, 2, 0, -2, 1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 1, 1, 0, 0, 3, 0, -1, 1, -2, 0, 2, 1, -2, 3, 2, -3, -1, 0, 0, 1, 0, 1, 1, 0, 0, -2, -1, 1, -2, 2, -2, -1, 1, 1, -1, 0, 0],
            x = [1, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, -1, 1, 3, 1, 1, 1, -1, -1, -1, 1, -1, 1, -3, 1, -3, -1, -1, 1, -1, 1, -1, 1, 1, 1, 1, -1, 3, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1],
            y = [5128122,
                280602, 277693, 173237, 55413, 46271, 32573, 17198, 9266, 8822, 8216, 4324, 4200, -3359, 2463, 2211, 2065, -1870, 1828, -1794, -1749, -1565, -1491, -1475, -1410, -1344, -1335, 1107, 1021, 833, 777, 671, 607, 596, 491, -451, 439, 422, 421, -366, -351, 331, 315, 302, -283, -229, 223, 223, -220, -220, -185, 181, -177, 176, 166, -164, 132, -119, 115, 107];
        return {
            Vi: function (a, b, c, d) {
                for (var e = a.getLocalFullYear(), h = a.getLocalMonth() + 1, l = a.getLocalDate(), n = 0, p = [], q = [], u = [], v = 0, v = 0; 24 >= v; v++) u[v] = !1;
                var w = g(e, h, l, n - d), w = f(w[0], w[1], e, h, l, n - d, b, c);
                q[0] = w[0];
                u[0] =
                    !0;
                p = 0 < q[0] ? [-2, -2] : [-1, -1];
                n = 24;
                w = g(e, h, l, n - d);
                w = f(w[0], w[1], e, h, l, n - d, b, c);
                q[24] = w[0];
                u[24] = !0;
                for (var x = 0; 2 > x; x++) {
                    for (var y = !1, z = 0, A = 24; 1 < k.ceil((A - z) / 2);) if (hmid = z + k.round((A - z) / 2), u[hmid] || (n = hmid, w = g(e, h, l, n - d), w = f(w[0], w[1], e, h, l, n - d, b, c), q[hmid] = w[0], u[hmid] = !0), 0 === x && 0 >= q[z] && 0 <= q[hmid] || 1 === x && 0 <= q[z] && 0 >= q[hmid]) A = hmid, y = !0; else if (0 === x && 0 >= q[hmid] && 0 <= q[A] || 1 === x && 0 <= q[hmid] && 0 >= q[A]) z = hmid, y = !0; else break;
                    if (1 < A - z) for (v = z; v < A; v++) if (y = !1, u[v + 1] || (n = v + 1, w = g(e, h, l, n - d), w = f(w[0], w[1],
                        e, h, l, n - d, b, c), q[n] = w[0], u[n] = !0), 0 === x && 0 >= q[v] && 0 <= q[v + 1] || 1 === x && 0 <= q[v] && 0 >= q[v + 1]) {
                        z = v;
                        A = v + 1;
                        y = !0;
                        break
                    }
                    y && (v = q[z], y = q[A], n = z + .5, w = g(e, h, l, n - d), w = f(w[0], w[1], e, h, l, n - d, b, c), 0 === x && 0 >= w[0] && (z = n, v = w[0]), 0 === x && 0 < w[0] && (A = n, y = w[0]), 1 === x && 0 >= w[0] && (A = n, y = w[0]), 1 === x && 0 < w[0] && (z = n, v = w[0]), p[x] = z + (A - z) * k.abs(v) / (k.abs(v) + k.abs(y)))
                }
                b = p;
                c = new Date(a);
                a = new Date(a);
                c.setLocalHours(0);
                a.setLocalHours(0);
                c.setLocalMinutes(0);
                a.setLocalMinutes(0);
                c.setLocalMilliseconds(0);
                a.setLocalMilliseconds(0);
                c.setLocalSeconds(3600 *
                    b[0]);
                a.setLocalSeconds(3600 * b[1]);
                return {Sq: -1 < b[0] ? c : void 0, set: -1 < b[1] ? a : void 0}
            }
        }
    }()
}(window, document, MapOptions, Math);
