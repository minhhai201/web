let app = new Vue({
    el: '#app',
    data: {
        taikhoan: [
            {username: 'Hải', password: 'hai', email: 'hai@gmail.com', date: '', gender: 'Nam'},
            {username: 'Hải', password: 'hai', email: 'hai@gmail.com', date: '', gender: 'Nam'}

        ],
        gameNoiBat: [
            {
                anh: 'lol.jpg',
                title: 'Liên Minh Huyền Thoại',
                intro: 'Liên Minh Huyền Thoại là một trò chơi video'
            }, {
                anh: 'valorant.jpg',
                title: 'Valorant',
                intro: 'Valorant là một game bắn súng chiến thuật online'
            }, {
                anh: 'pupg.jpg',
                title: 'PUPG',
                intro: 'Battlegrounds là một trò chơi hành động trong đó'
            }, {
                anh: 'fifa.jpg',
                title: 'FIFA 21',
                intro: 'FIFA 21 là mộttrò chơi video mô phỏng bóng đá đ'
            }, {
                anh: 'tocchien.jpg',
                title: 'Liên Minh: Tốc Chiến',
                intro: 'Giống như Liên Minh Huyền Thoại, người chơi đảm nhận'
            }, {
                anh: 'wasteland3.jpg',
                title: 'Wasteland 3',
                intro: 'Wasteland 3 là một trò chơi điện tử nhập vai theo đội có'
            }, {
                anh: 'tocchien.jpg',
                title: 'Liên Minh: Tốc Chiến',
                intro: 'Giống như Liên Minh Huyền Thoại, người chơi đảm nhận'
            },
            {
                anh: 'warzone.jpg',
                title: 'Call of Duty: Warzone',
                intro: 'Warzone có hai chế độ chơi chính: Battle Royale v'
            },

        ],
        gameMoi: [
            {
                anh: 'doom%20eternal.jpg',
                title: 'Doom Eternal',
                intro: 'Lấy bối cảnh một thời gian sau các sự kiện củ'
            },
            {
                anh: 'valorant.jpg',
                title: 'Valorant',
                intro: 'Valorant là một game bắn súng chiến thuật online'
            },
            {
                anh: 'pupg.jpg',
                title: 'PUPG',
                intro: 'Battlegrounds là một trò chơi hành động trong đó'
            },
            {
                anh: 'assaaainCreedValhalla.jpg',
                title: 'Assassin Creed Valhalla',
                intro: 'Đây là phần chính thứ mười hai và là bản phát hành thứ hai '
            },
            {
                anh: 'tocchien.jpg',
                title: 'Liên Minh: Tốc Chiến',
                intro: 'Giống như Liên Minh Huyền Thoại, người chơi đảm nhận'
            },
            {
                anh: 'warzone.jpg',
                title: 'Call of Duty: Warzone',
                intro: 'Warzone có hai chế độ chơi chính: Battle Royale v'
            },
            {
                anh: 'warcraft.jpg',
                title: 'Warcraft III',
                intro: 'Warcraft III: The Frozen Throne xoay quanh những trận chiến'
            },
            {
                anh: 'lienquan.jpg',
                title: 'Liên Quân',
                intro: 'Siêu việt: Ngàn năm về trước,ở Athanor diễn ra cuộc'
            },
        ], gameChienThuat: [
            {
                anh: 'lol.jpg',
                title: 'Liên Minh Huyền Thoại',
                intro: 'Liên Minh Huyền Thoại là một tr'
            },
            {
                anh: 'warcraft.jpg',
                title: 'Warcraft III',
                intro: 'Warcraft III: The Frozen Throne xoay quanh những trận chiến'
            },
            {
                anh: 'valorant.jpg',
                title: 'Valorant',
                intro: 'Valorant là một game bắn súng chiến thuật online'
            },
            {
                anh: 'lienquan.jpg',
                title: 'Liên Quân',
                intro: 'Siêu việt: Ngàn năm về trước,ở Athanor diễn ra cuộc'
            },
            {
                anh: 'Hinh-Nen-Dau-Truong-Chan-Ly-24.jpg',
                title: 'Đấu Trường CHân LÝ',
                intro: 'Đấu Trường Chân Lý(là một chế độ chơi của Liên Minh Huyền Tho'
            },
            {
                anh: 'tocchien.jpg',
                title: 'Liên Minh: Tốc Chiến',
                intro: 'Giống như Liên Minh Huyền Thoại, người chơi đảm nhận'
            },
            {
                anh: 'fifa.jpg',
                title: 'FIFA 21',
                intro: 'FIFA 21 là mộttrò chơi video mô phỏng bóng đá được'
            }, {
                anh: 'pupg.jpg',
                title: 'PUPG',
                intro: 'Battlegrounds là một trò chơi hành động trong đó'
            },

        ], gameHanhDong: [
            {
                anh: 'lol.jpg',
                title: 'Liên Minh Huyền Thoại',
                intro: 'Liên Minh Huyền Thoại là một tr'
            },
            {
                anh: 'warcraft.jpg',
                title: 'Warcraft III',
                intro: 'Warcraft III: The Frozen Throne xoay quanh những trận chiến'
            },
            {
                anh: 'valorant.jpg',
                title: 'Valorant',
                intro: 'Valorant là một game bắn súng chiến thuật online'
            },
            {
                anh: 'lienquan.jpg',
                title: 'Liên Quân',
                intro: 'Siêu việt: Ngàn năm về trước,ở Athanor diễn ra cuộc'
            },
            {
                anh: 'Cyberpunk%202077.jpg',
                title: 'Cyberpunk 2077',
                intro: 'Cốt truyện của trò chơi diễn ra tại Night City'
            },
            {
                anh: 'wasteland3.jpg',
                title: 'Wasteland 3',
                intro: 'Wasteland 3 là một trò chơi điện tử nhập vai theo đội có tính'
            },
            {
                anh: 'warzone.jpg',
                title: 'Call of Duty: Warzone',
                intro: 'Warzone có hai chế độ chơi chính: Battle Roy'
            }, {
                anh: 'assaaainCreedValhalla.jpg',
                title: 'Assassin Creed Valhalla',
                intro: 'Đây là phần chính thứ mười hai và là bản phát hành'
            },

        ], gameDuaXe: [
            {
                anh: 'RealRacing3.jpg',
                title: 'Real Racing 3',
                intro: 'Người chơi bắt đầu trò chơi ở cấp độ lái xe'
            },
            {
                anh: 'RallyFury.jpg',
                title: 'Rally Fury',
                intro: 'Trải nghiệm cảm giác hồi hộp và thử thách của cuộc đua rally'
            },
            {
                anh: 'AsphaltXtreme.jpg',
                title: 'Asphalt Xtreme',
                intro: 'Trò chơi điện tử có một đội hình gồm những chiếc ô tô tập hợp'
            },
            {
                anh: 'deadParadise.jpg',
                title: 'Dead Paradise',
                intro: 'Chào mừng bạn đến Dead Paradise: The Road Warrior'
            },
            {
                anh: 'trafficFeverRacingGame.jpg',
                title: 'Traffic Fever Racing Game',
                intro: 'Vượt qua mọi chiếc xe bạn nhìn thấy trong khối lượng gi'
            },
            {
                anh: 'CityRacingLite.jpg',
                title: 'City RacingLite',
                intro: 'Incredible kích thước nhỏ, cạnh tranh Bất chủng tộc, th'
            },
            {
                anh: 'fifa.jpg',
                title: 'FIFA 21',
                intro: 'FIFA 21 là mộttrò chơi video mô phỏng bóng đá được'
            }, {
                anh: 'pupg.jpg',
                title: 'PUPG',
                intro: 'Battlegrounds là một trò chơi hành động trong đó'
            },

        ],
        danhSachPK: ['Vô lăng chơi game', 'Phụ kiện cho game thủ', 'Máy chơi game', 'Bàn di chuột chơi game', 'Bàn phím cơ chơi game', 'Chuột chơi game', 'Tai nghe chơi game', 'Ghế chơi game', 'Tay cầm chơi game',]
        ,
        danhSachSP: [
            {
                anh: 'anh3.jpg',
                title: 'Đầu thu USB Bluetooth 4.0 Orico BTA-403',
                gia: '159.000 đ'
            },
            {
                anh: 'anh4.jpg',
                title: 'Tai nghe DareU EH722X 7.1 Black',
                gia: '549.000 đ'
            },
            {
                anh: 'anh5.jpg',
                title: 'Tai nghe DareU EH722X 7.1 Pink',
                gia: '600.000 đ'
            },
            {
                anh: 'anh6.png',
                title: 'Chuột Asus Cerberus',
                gia: '499.000 đ'
            },
            {
                anh: 'anh7.png',
                title: 'Ghế game DXRacer Valkyrie Series GC-V03-NW-B4',
                gia: '6.999.000 đ'
            },
            {
                anh: 'anh8.jpg',
                title: 'Ghế game DXRacer Valkyrie Series GC-V03-N-B4',
                gia: '6.159.000 đ'
            },
            {
                anh: 'anh9.jpg',
                title: 'Bàn phím cơ Logitech G512 RGB GX Red switch',
                gia: '2.159.000 đ'
            }, {

                anh: 'anh10.jpg',
                title: 'Chuột Logitech G502 HERO',
                gia: '959.000 đ'
            }, {
                anh: 'anh11.png',
                title: 'Chuột Logitech G402',
                gia: '559.000 đ'
            }, {
                anh: 'anh12.jpg',
                title: 'Bàn phím cơ Fuhlen D (Destroyer',
                gia: '859.000 đ'
            },

        ],
        dienDan:[
            {
                anh: 'd6.jpg',
                title: 'Tìm hiểu sự kiện Nữ Thần Chiến Binh 2020: Trang phục, báu vật, gói vật phẩm và nhiều nữa!',
                content: 'Tìm hiểu sự kiện Nữ Thần Chiến ',
                time: '1 giờ'
            },
            {
                anh: 'd5.jpg',
                title: 'Nhật ký phát triển: Nhìn lại Liên Minh 2020!',
                content: 'Nhật ký phát triển: Nhìn lại Liên Minh 2020!',
                time: '1 ngày'
            },
            {
                anh: 'd4.jpg',
                title: 'Công bố giải đấu Solo Yasuo - Thách Đấu Thần Kiếm từ 03.08 đến 08.08',
                content: 'Công bố giải đấu Solo Yasuo',
                time: '1 ngày'
            },
            {
                anh: 'd3.jpg',
                title: 'Công bố cuộc thi cosplay "Lễ Hội Ma Ám" - Tổng giải thưởng lên đến 18.000 RP từ 27/10 đến 04/11',
                content: 'Công bố cuộc thi cosplay "Lễ Hội Ma Ám" - ',
                time: '1 ngày'
            },
            {
                anh: 'd2.jpg',
                title: 'Kết quả Vòng bảng & Lịch thi đấu Vòng chung kết VCSB mùa Đông 2020',
                content: 'Kết quả Vòng bảng & Lịch',
                time: '13 ngày'
            },
            {
                anh: 'd1.jpg',
                title: 'Bình chọn tuyển thủ tham dự Siêu Sao Đại Chiến 2020',
                content: 'Bình chọn tuyển thủ',
                time: '5 ngày'
            },
        ],BXH:[
            {
                anh: 'AsphaltXtreme.jpg',
                title: 'Asphalt Xtreme',
                theloai: 'Game Đua xe/ Mạo hiểm',
                sao: 9,
            },
            {
                anh: 'pupg.jpg',
                title: 'PUBG',
                theloai: 'Nhập vai',
                sao: 9,
            },
            {
                anh: 'lol.jpg',
                title: 'Liên minh huyền thoại',
                theloai: 'Chiến thuật',
                sao: 8,
            },
            {
                anh: 'tocchien.jpg',
                title: 'Liên minh huyền thoại tốc chiến',
                theloai: 'Chiến thuật',
                sao: 8,
            },
            {
                anh: 'lienquan.jpg',
                title: 'Liên quân',
                theloai: 'Chiến thuật',
                sao: 7,
            },
            {
                anh: 'valorant.jpg',
                title: 'Valorant',
                theloai: 'Bắn súng/Nhập vai',
                sao: 7,
            },
            {
                anh: 'fifa.jpg',
                title: 'FiFa',
                theloai: 'Thể Thao',
                sao: 5,
            },
            {
                anh: 'riseOfKingDoms.jpg',
                title: 'Rise Of King Doms',
                theloai: 'Chiến thuật',
                sao: 5,
            },
            {
                anh: 'warcraft.jpg',
                title: 'Warcraft III',
                theloai: 'Chiến thuật',
                sao: 5,
            },
            {
                anh: 'warzone.jpg',
                title: 'Warzone',
                theloai: 'Hành Động',
                sao: 4,
            },
        ],
        themes: 'home',
        login: {
            email: '',
            pass: '',
            result: ''
        },
        dangki: {
            username: '',
            email: '',
            pass: '',
            date: '',
            gender: '',
            result: ''
        },
        daDangNhap: false,
        ttdn: {}

    },
    created: function () {
        let aa = JSON.parse(localStorage.getItem("taikhoan")) || [];
        for (let a of aa) {
            this.taikhoan.push({
                username: a.username,
                password: a.password,
                email: a.email,
                date: a.date,
                gender: a.gender
            })
        }

        this.ttdn = JSON.parse(localStorage.getItem("ttdn"));

    },


    methods: {
        dangnhap_func: function () {
            for (let a of this.taikhoan) {
                if (a.email === this.login.email && a.password === this.login.pass) {
                    this.login.result = "thanh cong";
                    this.daDangNhap = true;
                    this.themes = 'home';
                    this.ttdn = {
                        username: a.username,
                        password: a.password,
                        email: a.email,
                        date: a.date,
                        gender: a.gender
                    }
                    localStorage.setItem("ttdn", JSON.stringify({
                        username: a.username,
                        password: a.password,
                        email: a.email,
                        date: a.date,
                        gender: a.gender
                    }));

                } else {
                    this.login.result = "Sai";
                }
            }
        },
        dangki_func: function () {
            console.log(this.taikhoan);
            this.taikhoan.push({
                username: this.dangki.username,
                password: this.dangki.pass,
                email: this.dangki.email,
                date: this.dangki.date,
                gender: this.dangki.gender
            });
            localStorage.setItem("taikhoan", JSON.stringify(this.taikhoan));
            this.dangki.result = "thanh cong";
            this.themes = 'dangnhap'
        },

    }
});