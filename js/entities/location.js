LocationManager.module("Entities", function (Entities, LocationManager, Backbone, Marionette, $, _) {
    Entities.Location = Backbone.Model.extend({});

    Entities.LocationCollection = Backbone.Collection.extend({
        model: Entities.Location,
        // comparator: 'name'
    });

    var locations;
    
    var initializeLocations = function () {
        locations = new Entities.LocationCollection([
            {
                id: 1, locationName: "Gower", locationImg: "gower", locationDescription: "Just a short drive from Swansea, the Gower Peninsula is more than just a pretty face. It was designated as the UK’s first Area of Outstanding Natural Beauty back in 1956, and we’re glad to say it hasn’t changed much since! Visit the Gower Peninsula for a rich and varied environment which is breath-taking (and we’re not just saying that!) – From wild moors and limestone cliffs to golden, sandy beaches. Gower is a geological goldmine with inspiring landscapes – just look at Dylan Thomas’ work",
                attraction1: "The Beach", attraction1Descr: "Stay on dry land, and you will be missing out! It gets some of the most awesome waves in Britain, and sandy Llangennith has been popular amongst surfers for decades. Rhossili Bay has also been enjoying some limelight on the world stage too. It was voted 10th Best Beach in the World as part of the TripAdvisor Travellers’ Choice Awards in 2013, and then 9th in the World in 2014.", attraction1Img: "gowerbeach",
                attraction2: "Coast & Countryside", attraction2Descr: "The 19 mile-long Peninsula starts at Mumbles and extends westwards.  It’s famous for its beautiful coastline and beaches (from vast Rhossili Bay to tiny, secluded Pwll Du), and is a favourite destination for walkers and surfers.  Inland you’ll find sheltered woodland and rolling grasslands; country pubs and fine food.", attraction2Img: "coast",
                attraction3: "Rhossili Bay beach", attraction3Descr: "Rhossili Bay is the first beach to be awarded Britain’s Best Beach by TripAdvisors Travellers’ Choice for the second year running, not to mention the 3rd best beach in Europe and 9th best in the world! Quite an accolade when you think that the competition includes Australia, Bermuda and Brazil.", attraction3Img: "rhossili"
            },
            {
                id: 2, locationName: "Mumbles", locationImg: "mumbles", locationDescription: "Mumbles marks the beginning of the Gower Peninsula’s coastline. It’s a well-loved area of Swansea, and when you go there, it’s clear to see why! There are plenty of things to do in Mumbles. They say you learn something new every day, so why not learn a few things when you visit? Surround yourself in the history and tradition that this area is steeped with. There’s a Lighthouse built in 1794, and a Victorian Pier. Oystermouth Castle is also well worth a visit, sitting on a hilltop with fabulous views overlooking the sea.",
                attraction1: "Mumbles Lighthouse", attraction1Descr: "Stop at pretty Limeslade or Bracelet Bay to enjoy great views of this picturesque lighthouse. When the seas are big the waves crashing against the island make for a spectacular sight. When all is calm, pick your way across the beach at low tide and walk to one of Swansea’s most photographed sights.", attraction1Img: "lighthouse",
                attraction2: "Oystermouth Castle", attraction2Descr: "There are 600 castles in Wales, but there aren't many which come with a better view than this one! Over recent years the castle has undergone conservation work to ensure the castle structure is safe and sustainable for the foreseeable future. Now the public can explore parts of the castle that have been hidden away for centuries and learn about the castle’s exciting history.", attraction2Img: "castle",
                attraction3: "Cafes and Restaurants", attraction3Descr: "Feeling hungry?  No visit to Mumbles would be complete without sampling some of the areas local, “fresh off the boat”, seafood or some of the best home grown food around – tasty stuff!  Pop in for exquisite handmade chocolates (you deserve it!) or sample some of the town’s world-class ice-cream, which flavour will you choose?", attraction3Img: "cafes"
            },
            {
                id: 3, locationName: "City Center", locationImg: "citycenter", locationDescription: "Whether you’re looking for a great family day out, a place to shop for top brands or unique purchases you wont find anywhere else, or want to enjoy the experience of dining out in the fantastic choice of restaurants or bars we have to offer – Swansea’s got it all. Swansea is a great destination for visitors and residents alike, benefitting from a wonderful coastal location. On your doorstep, you will find Swansea Marina for nautical types and the promenade overlooking the bay that stretches for mile",
                attraction1: "Tenpin Bowling", attraction1Descr: "There’s nothing like a fun game of ten pin bowling with family or friends, so if you enjoy this sort of thing look no further than Tenpin Swansea.  Based in Parc Tawe, Tenpin is a modern 26 lane bowling alley, with a bar, entertainment, and snack area.", attraction1Img: "bowling",
                attraction2: "Cinema", attraction2Descr: "Seeing a good movie is not a problem in Swansea. The Odeon multiplex in Parc Tawe is well equipped and is the place to go to watch the latest blockbuster.  In addition there is the new Vue cinema which is based on York Street (just off Wind Street). This huge cinema shows all the latest films at a variety of times that will suit everyone. Together, these venues offer an excellent choice of film to see in Swansea City Centre", attraction2Img: "cinema",
                attraction3: "Lazerzone", attraction3Descr: "Laser zone is a high tech, live action laser gaming arena situated next to Swansea Castle.  The multi level themed arena is an interactive centre with special effects, fog, laser beams, ideal for anyone over the age of 7 who enjoys an entertaining adventure!", attraction3Img: "laserzone",
            }
        ])
        
    };

    var API = {
        getLocationEntities: function () {
            if (locations === undefined) {
                initializeLocations();
            }
            return locations;
        }
    };

    LocationManager.reqres.setHandler("location:entities", function () {
        return API.getLocationEntities();
    });

});