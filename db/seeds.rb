puts 'Seeding data...'
User.destroy_all
GolfCourse.destroy_all
Review.destroy_all


u1 = User.create(username: "robert", email: "bobmail@gmail.com", password: "robert123")
u2 = User.create(username: "harry", email: "harebear114@gmail.com", password: "harry123")
u3 = User.create(username: "adrian", email: "barbarian44@gmail.com", password: "adrian123")
u4 = User.create(username: "keith", email: "keithreef@gmail.com", password: "keith123")
u5 = User.create(username: "william", email: "williamtell@gmail.com", password: "william123")
u6 = User.create(username: "ian", email: "ianmian@gmail.com", password: "ian123")
u7 = User.create(username: "jason", email: "whitethunder@gmail.com", password: "jason123")
u8 = User.create(username: "john", email: "iamhim@gmail.com", password: "john123")


GolfCourse.create(name: 'Saint Andrews Royal Country Club', location: "St Andrews, Fife, Scotland", price: "$320.00", holes: 18, par: 72, length: "7305 yards" , user: u1, review: r6 ,image_url: 'https://www.linksgolfstandrews.com/wp-content/uploads/2015/07/St-Andrews-Golf-Week.jpg')
GolfCourse.create(name: 'Augusta National', location: "Augusta, Georgia, USA", price: "$525.00", holes: 18, par: 72, length: "7510 yards", user: u3, review: r4 ,image_url: 'https://www.andaluciagolf.com/images/NEWS246/Augusta%20National%2012.jpg')
GolfCourse.create(name: 'Pebble Beach', location: "Pebble Beach, California, USA", price: "$595.00", holes: 18, par: 72, length: "7075 yards", user: u5 , review: r3 ,image_url: 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/11/23/56537f5d3962008d615642bd_Pebble-Beach-8th.png.rend.hgtvcom.966.544.suffix/1573528047803.png')
GolfCourse.create(name: 'Spanish Bay', location: "Pebble Beach, California, USA", price: "$350.00", holes: 18, par: 72, length: "6820 yards", user: u7 , review: r2 ,image_url: 'https://www.pebblebeach.com/content/uploads/PB-17-Mile-Drive-Joann-Dost-2.jpg')
GolfCourse.create(name: 'The Lakes', location: "El Segundo, California, USA", price: "$32.00", holes: 10, par: 3, length: "1060 yards", user: u2 , review: r7 ,image_url: 'https://s3.topgolf.com/uploads/images/venue/usa/el-segundo/golf-course/drone-shots/teg-tlaes-2022-03-09-032.jpg?resize.width=1200&resize.height=630&resize.method=cover')
GolfCourse.create(name: 'Brentwood Country Club', location: "Brentwood, California, USA", price: "$105.00", holes: 18, par: 72, length: "6173 yards", user: u4 , review: r8 ,image_url: 'https://www.golfcoursearchitecture.net/Portals/0/EasyDNNnews/12189/3427.jpg')
GolfCourse.create(name: 'TPC Harding', location: "San Francisco, California, USA", price: "$200.00", holes: 18, par: 72, length: "7169 yards", user: u6 , review: r12 ,image_url: 'https://golf-pass.brightspotcdn.com/ee/5a/9ccd1d3a0efe9880b5ce9bb36198/1724.jpg')
GolfCourse.create(name: 'Torrey Pines', location: "La Jolla, California, USA", price: "$252.00", holes: 18, par: 72, length: "7804 yards", user: u8 , review: r10 ,image_url: 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2019/01/14/5c3bf24cf193692d16a72559_186%20-%20Torrey%20Pines%20G.%20Cse.%20(South)%20-%20Jon%20Cavalier.jpeg.rend.hgtvcom.966.544.suffix/1573163040843.jpeg')
GolfCourse.create(name: 'Riviera Country Club', location: "Pacific Palisades, California, USA", price: "$52.00", holes: 18, par: 71, length: "7013 yards", user: u1 , review: r11 ,image_url: 'https://www.therivieracountryclub.com/images/dynamic/getImage.gif?ID=100056')
GolfCourse.create(name: 'Palouse Ridge Golf Club', location: "Pullman, Washington, USA", price: "$50.00", holes: 18, par: 72, length: "6723 yards", user: u4 , review: r1 ,image_url: 'https://golf-pass.brightspotcdn.com/dims4/default/7731026/2147483647/strip/true/crop/500x323+0+5/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2F98%2F2e%2F217f2f83aaa1bfd785fec33958e2%2F16744.jpg')
GolfCourse.create(name: 'Alondra Golf Course', location: "Alondra, California, USA", price: "$28.00", holes: 18, par: 72, length: "6615 yards", user: u6 , review: r9 ,image_url: 'https://golf-pass.brightspotcdn.com/dims4/default/a209cdb/2147483647/strip/true/crop/426x275+137+0/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2F8c%2F02%2F62535cc2f0480fde67871acd30a0%2F77570.jpg')
GolfCourse.create(name: 'Lakewood Country Club', location: "Lakewood, California, USA", price: "$70.00", holes: 18, par: 72, length: "7033 yards", user: u3 , review: r5 ,image_url: 'https://www.lakewoodgolfcc.com/app/uploads/sites/21/2020/08/LKWD-2012-04-03-4285-1024x683.jpg')
GolfCourse.create(name: 'Rancho Park Golf Course', location: "Los Angeles, California, USA", price: "$25.00", holes: 18, par: 71, length: "6839 yards", user: u2 , review: r13 ,image_url: 'https://golf.lacity.org/golf/proto/lacity/images/gallery/rancho%20park/03.jpg')



r1 = Review.create(user: u1, recommendation: true, pros: "Visited my aunt and needed to get the golf game goin. Enjoyed the course! Go Cougs!", cons: "It rained during the back 9...", rating: 6)
r2 = Review.create(user: u2, recommendation: true, pros: "Such a beatiful course. Wasn't able to get a tee time at Pebble but this was a great consolation experience.", cons: "I coudldn't play Pebble!", rating: 8)
r3 = Review.create(user: u3, recommendation: true, pros: "If I could play one course for the rest of my life, this just might be it.", cons: "It's so difficult for me as a 12+ handicap I cry myself to sleep sometimes.", rating: 9)
r4 = Review.create(user: u8, recommendation: true, pros: "Every time I go here I picture myself teeing off on the 18th hole for a green jacket.", cons: "Very exclusive as a public goer.", rating: 9)
r5 = Review.create(user: u6, recommendation: true, pros: "I grew up going to this course so it's home to me.", cons: "I haven't gone much lately as the price has always been stiff compared to other local courses.", rating: 5)
r6 = Review.create(user: u4, recommendation: true, pros: "Historic golf course!", cons: "Impossible to get a tee time without connections and good luck finding your miss-hits.", rating: 8)
r7 = Review.create(user: u1, recommendation: true, pros: "Anytime I wanna play TopGolf and hit the links, I'M HERE BRO.", cons: "Ain't nobody got time for the wait at TopGolf and I lose hella balls here.", rating: 5)
r8 = Review.create(user: u7, recommendation: true, pros: "Groundskeeper is super chill and nice to be so close to home!", cons: "The traffic around Brentwood can be a headache for my golfing partners.", rating: 6)
r9 = Review.create(user: u8, recommendation: true, pros: "For the price it's tough to beat being able to play a full par 72 locally.", cons: "The course is not best maintained despite the great deal.", rating: 5)
r10 = Review.create(user: u5, recommendation: true, pros: "One of Tiger Woods' main stomping grounds! Privileged to play here.", cons: "Very tough getting a public tee time and DIFFICULT.", rating: 8)
r11 = Review.create(user: u3, recommendation: true, pros: "Extremely beautiful scenery and views. Host of one of the biggest PGA events.", cons: "Have you driven to Pacific Palisades??? Good luck getting a tee time.", rating: 8)
r12 = Review.create(user: u5, recommendation: true, pros: "Beatiful golf course. Always enjoy playing here", cons: "For what the course is the price is a bit steep for me as a local.", rating: 6)
r13 = Review.create(user: u4, recommendation: true, pros: "Great course, a host of the LPGA tour.", cons: "The terrain is very hilly, be prepared for a lot of exercise and high launch trajectory.", rating: 7)


puts 'Done seeding!'