# Product API Documentation

## Endpoint: /pagination/products?page={number}

## Response

```json
{
  "content": [
    {
      "id": 1,
      "title": "aut fugit ex quas",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 6,
      "brand": {
        "id": 6,
        "name": "Johnson & Johnson",
        "slug": "johnson-johnson",
        "description": "Praesentium voluptatum optio et qui autem aut animi. Numquam itaque aut atque dolores. Sapiente distinctio eveniet itaque voluptas nulla numquam nulla. Sequi quos commodi accusantium id rerum alias expedita. Ratione non est suscipit voluptas laudantium eveniet ea hic.\n\nOmnis sit nemo alias harum quo totam explicabo vel. Explicabo recusandae mollitia necessitatibus molestias rerum. Quia ut voluptas ullam ipsum placeat assumenda.\n\nIpsum blanditiis pariatur quia recusandae mollitia dignissimos similique. Quidem consequatur optio suscipit sit temporibus et aut dolore. Architecto nisi dicta officia ut necessitatibus vitae. Sapiente eos facere consequatur ullam."
      },
      "type": "Medical Device",
      "activeIngredient": "Codeine",
      "manufacturer": "Klocko-Grady",
      "indications": "Occaecati rerum aut consequuntur veniam labore a ducimus. Eum qui ut sed pariatur suscipit dolor quis. Nihil vitae ullam ducimus quia sed nisi.\n\nAut voluptates molestiae sint laborum incidunt qui ab. Adipisci tempora ea autem commodi ut. Velit incidunt nam consequatur id ut.",
      "categoryId": 4,
      "category": {
        "id": 4,
        "name": "veritatis qui perspiciatis",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "veritatis-qui-perspiciatis",
        "priority": 1,
        "parentId": null,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Capsule",
      "noted": "Sed dolore est vel facere. Perferendis doloribus modi error rem et. Placeat corporis a velit modi tempore. Beatae accusantium voluptas adipisci quod qui perspiciatis.",
      "description": "Non velit et quia minima. Id et aut soluta ratione nostrum vel. Nobis necessitatibus quia voluptate accusamus dolorem. Debitis neque laudantium et et ea quod.\n\nLabore recusandae possimus dolor perferendis aut facilis fugit pariatur. Vel nam dolores occaecati fugit.\n\nIncidunt suscipit tenetur alias adipisci rerum. Sapiente inventore numquam et voluptatibus et voluptatum voluptatem in. Dolorem dignissimos quis dolorem sed tempora non sit.\n\nFacilis temporibus qui non quia reprehenderit. Voluptas odit voluptas voluptates ullam aut autem. Nam neque nemo assumenda laboriosam aliquid. Cum pariatur quo consectetur et.\n\nBlanditiis ea error qui. Corrupti laudantium aut in voluptatibus reprehenderit animi blanditiis. Doloremque tempore qui dolor harum ex repellendus voluptatibus. Dolores quibusdam expedita est sit amet. Id quod error eum itaque.",
      "quantity": 499,
      "price": 348000.0,
      "registrationNumber": "REG72815-630854-85",
      "slug": "aut-fugit-ex-quas",
      "createdAt": "2025-01-06T15:08:53",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 83,
          "productId": 1,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 105,
          "productId": 1,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 56,
          "productId": 1,
          "customerId": 48,
          "customer": {
            "id": 48,
            "email": "dschmeler@example.com",
            "password": "$2y$12$LzhGQyIv0TMyHO7WcXF2UuM.xqNiH9X1D/IBrvTD/xjjw/4qdAAKW",
            "fullName": "Nelle Hahn",
            "gender": "female",
            "phoneNumber": "1-210-667-7493",
            "address": "679 Alda Highway Apt. 278\nLake Eloiseton, NY 49610-7615",
            "createdAt": "2024-05-01T05:39:47",
            "updatedAt": "2025-03-06T16:39:59",
            "orders": [
              {
                "id": 40,
                "customerId": 48,
                "userId": 7,
                "status": "admin_cancelled",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 1002000,
                "createdAt": "2024-10-22T00:00:38",
                "updatedAt": "2024-10-22T00:00:38"
              }
            ]
          },
          "content": "Quasi rerum nihil inventore consequatur id. Ut quidem occaecati expedita sed ab et et iure. Laborum iste asperiores debitis non illum.",
          "createdAt": "2025-02-24T03:07:33",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        },
        {
          "id": 57,
          "productId": 1,
          "customerId": 6,
          "customer": {
            "id": 6,
            "email": "green.bridgette@example.com",
            "password": "$2y$12$aZsFDWbM9BpUBQgkH7aWWO1kWt6xzeNd.rV40zqCWKABmH8/N5hMy",
            "fullName": "Freddie Kshlerin",
            "gender": "male",
            "phoneNumber": "(508) 732-2093",
            "address": "2226 Simone Springs Apt. 199\nNorth Dorianchester, MT 28254",
            "createdAt": "2024-03-26T05:40:48",
            "updatedAt": "2025-03-06T16:39:50",
            "orders": []
          },
          "content": "Cum non quae sed maiores sit. Dignissimos modi aut qui beatae fuga consequatur. Accusamus nobis nam deleniti at iste sint aspernatur praesentium. Id amet quae a.",
          "createdAt": "2024-10-01T17:30:05",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        },
        {
          "id": 95,
          "productId": 1,
          "customerId": 25,
          "customer": {
            "id": 25,
            "email": "ramona.hudson@example.com",
            "password": "$2y$12$f6zp7TEMtGlmm6c1gqLsKekQ8RJM13j2mecbrdeLmMEL1izguctUO",
            "fullName": "Makenzie Moen",
            "gender": "female",
            "phoneNumber": "(724) 729-5692",
            "address": "6903 Floyd Overpass Suite 486\nNorth Bridie, MA 59380-8928",
            "createdAt": "2024-03-27T23:01:24",
            "updatedAt": "2025-03-06T16:39:54",
            "orders": [
              {
                "id": 17,
                "customerId": 25,
                "userId": 8,
                "status": "processing",
                "paymentMethod": "offline",
                "paymentStatus": "success",
                "totalPrice": 1285000,
                "createdAt": "2025-02-16T14:20:18",
                "updatedAt": "2025-02-16T14:20:18"
              },
              {
                "id": 82,
                "customerId": 25,
                "userId": 6,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 4220000,
                "createdAt": "2025-01-31T03:14:56",
                "updatedAt": "2025-01-31T03:14:56"
              }
            ]
          },
          "content": "Ipsum fugit doloremque ipsum sint. Sint et incidunt autem dolores sit quia. Animi quis voluptatem explicabo iste. Amet non tempora est sapiente eveniet neque reprehenderit.",
          "createdAt": "2024-09-10T04:16:08",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        },
        {
          "id": 143,
          "productId": 1,
          "customerId": 49,
          "customer": {
            "id": 49,
            "email": "winifred.reilly@example.org",
            "password": "$2y$12$3yGWJk6ITQPK8obPu2CGDeMO0zQtQa.xf4J7yaRT/ZnI1RzEZluK.",
            "fullName": "Stefan Lueilwitz",
            "gender": "male",
            "phoneNumber": "(325) 727-1004",
            "address": "7763 Yost Fields Apt. 709\nLake Arianna, WV 34651",
            "createdAt": "2025-02-10T00:57:03",
            "updatedAt": "2025-03-06T16:39:59",
            "orders": [
              {
                "id": 13,
                "customerId": 49,
                "userId": 2,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 710000,
                "createdAt": "2024-04-05T22:00:10",
                "updatedAt": "2024-04-05T22:00:10"
              },
              {
                "id": 36,
                "customerId": 49,
                "userId": 8,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 2307000,
                "createdAt": "2024-11-14T18:39:44",
                "updatedAt": "2024-11-14T18:39:44"
              },
              {
                "id": 54,
                "customerId": 49,
                "userId": 4,
                "status": "admin_cancelled",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 2410000,
                "createdAt": "2025-01-30T09:45:15",
                "updatedAt": "2025-01-30T09:45:15"
              }
            ]
          },
          "content": "Dolor assumenda alias qui blanditiis. Provident ea quos corrupti qui rerum sed dolores. Eos sed quod optio.\n\nEa iure placeat fuga nulla nihil et eos. Voluptates quisquam iusto ea laudantium. Voluptates labore nesciunt dolor alias.\n\nVoluptatem sunt porro distinctio. Voluptatibus dolorum doloremque nemo minima dolorem delectus voluptatibus. Qui quia numquam et et ipsam voluptatem consequatur ratione. Eos eum earum quaerat deserunt qui.",
          "createdAt": "2024-12-23T12:53:31",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    },
    {
      "id": 2,
      "title": "officia hic",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 7,
      "brand": {
        "id": 7,
        "name": "AstraZeneca",
        "slug": "astrazeneca",
        "description": "Quia nostrum harum aut cum animi. Dolorem ducimus facere accusamus qui totam quo dolorum. Esse hic sed molestias tempora blanditiis perspiciatis.\n\nA molestiae dolores et mollitia ut. Quis non distinctio est reprehenderit. Ex quod vitae inventore ea corporis. Accusantium consequatur natus tempora voluptatem esse rem quidem. Nulla sunt consequatur vitae ullam fugit blanditiis sunt voluptate.\n\nOmnis deserunt aut corporis odit voluptas voluptatem. Qui voluptatem praesentium excepturi qui facilis et."
      },
      "type": "Prescription",
      "activeIngredient": "Omeprazole",
      "manufacturer": "Considine Inc",
      "indications": "Dignissimos aut voluptas alias aperiam nemo. Voluptatem hic eveniet ea aliquam et. Consectetur nam et vel sequi esse maxime sint. Voluptates minus quaerat commodi.",
      "categoryId": 8,
      "category": {
        "id": 8,
        "name": "iste est",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "iste-est",
        "priority": 5,
        "parentId": 4,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Patch",
      "noted": "Expedita eaque aut dolores dolorem voluptatem non omnis. Quo incidunt optio dignissimos et dolor voluptas. Repellat eaque sunt laborum rerum dolores vel nisi officia. Vel ea quas odio perferendis. Quia aspernatur iure itaque quod.",
      "description": "Et quod odit similique modi voluptatem adipisci. Est et eligendi tenetur non perferendis pariatur. Ut deleniti consequatur quidem facilis. Eum veritatis nulla eos dicta aliquid modi laborum.\n\nUt saepe eum consequuntur nulla eos distinctio quis. Atque inventore aliquam culpa a autem est velit rerum. Consequatur commodi est ipsum officiis.\n\nAperiam voluptas perspiciatis recusandae autem rem nobis iusto. Aut eum voluptatem non qui qui. Possimus sint ratione fugit saepe corrupti dolorem commodi. Beatae rerum pariatur at ut illo. Et laudantium facilis ut sit illum porro voluptatem.\n\nPossimus fuga velit consequatur soluta sunt. Rerum omnis aut velit dignissimos mollitia rerum enim. Voluptas tenetur voluptatem dolore odit sequi nobis ut. Tenetur nobis molestias voluptatibus veniam quae dignissimos velit.\n\nEst voluptate quaerat quia modi. Aspernatur repellat qui aliquid ut odio illum. Ut a voluptatem et atque est quas ad. Et iusto consequuntur qui nobis.\n\nAnimi itaque et modi. Nobis distinctio nihil adipisci et id. Est voluptate quia est ipsa.",
      "quantity": 7,
      "price": 479000.0,
      "registrationNumber": "REG53267-444128-29",
      "slug": "officia-hic",
      "createdAt": "2024-07-25T18:34:21",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 18,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 21,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 30,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 62,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 161,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 165,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 184,
          "productId": 2,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 128,
          "productId": 2,
          "customerId": 32,
          "customer": {
            "id": 32,
            "email": "reilly.lewis@example.net",
            "password": "$2y$12$WRDjOHbEzpmx313tT5T8C.Qqylbq04Wn5uC7DuAy0xvnfFqBH4nwy",
            "fullName": "Chadrick Corkery",
            "gender": "male",
            "phoneNumber": "(240) 216-2119",
            "address": "24959 Herman Light\nHudsonburgh, TX 78939-5613",
            "createdAt": "2025-01-04T05:17:20",
            "updatedAt": "2025-03-06T16:39:55",
            "orders": [
              {
                "id": 3,
                "customerId": 32,
                "userId": 3,
                "status": "processing",
                "paymentMethod": "offline",
                "paymentStatus": "success",
                "totalPrice": 969000,
                "createdAt": "2024-09-28T09:15:18",
                "updatedAt": "2024-09-28T09:15:18"
              },
              {
                "id": 4,
                "customerId": 32,
                "userId": 2,
                "status": "shipped",
                "paymentMethod": "online",
                "paymentStatus": "pending",
                "totalPrice": 1463000,
                "createdAt": "2024-12-21T15:12:34",
                "updatedAt": "2024-12-21T15:12:34"
              },
              {
                "id": 22,
                "customerId": 32,
                "userId": 10,
                "status": "waiting",
                "paymentMethod": "online",
                "paymentStatus": "success",
                "totalPrice": 1170000,
                "createdAt": "2024-04-17T01:46:39",
                "updatedAt": "2024-04-17T01:46:39"
              },
              {
                "id": 46,
                "customerId": 32,
                "userId": 3,
                "status": "shipped",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 4201000,
                "createdAt": "2024-09-28T11:35:08",
                "updatedAt": "2024-09-28T11:35:08"
              },
              {
                "id": 92,
                "customerId": 32,
                "userId": 1,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "success",
                "totalPrice": 117000,
                "createdAt": "2024-05-05T22:28:16",
                "updatedAt": "2024-05-05T22:28:16"
              }
            ]
          },
          "content": "Nulla saepe distinctio et ab inventore harum. Voluptas culpa ullam ut debitis sit quas iste. Cumque cumque asperiores corrupti autem. At vero voluptate hic aut deserunt distinctio.",
          "createdAt": "2025-01-13T20:46:13",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": [
            {
              "id": 6,
              "commentId": 128,
              "replyContent": "Voluptas quae ut aut eos sit possimus aut. Error cum id accusamus tempore omnis. Dolor pariatur omnis repudiandae nihil perspiciatis.",
              "createdAt": "2024-12-11T13:48:26",
              "updatedAt": "2025-03-06T16:39:59"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "ut quis numquam aut",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 6,
      "brand": {
        "id": 6,
        "name": "Johnson & Johnson",
        "slug": "johnson-johnson",
        "description": "Praesentium voluptatum optio et qui autem aut animi. Numquam itaque aut atque dolores. Sapiente distinctio eveniet itaque voluptas nulla numquam nulla. Sequi quos commodi accusantium id rerum alias expedita. Ratione non est suscipit voluptas laudantium eveniet ea hic.\n\nOmnis sit nemo alias harum quo totam explicabo vel. Explicabo recusandae mollitia necessitatibus molestias rerum. Quia ut voluptas ullam ipsum placeat assumenda.\n\nIpsum blanditiis pariatur quia recusandae mollitia dignissimos similique. Quidem consequatur optio suscipit sit temporibus et aut dolore. Architecto nisi dicta officia ut necessitatibus vitae. Sapiente eos facere consequatur ullam."
      },
      "type": "Supplement",
      "activeIngredient": "Fluoxetine",
      "manufacturer": "Hauck-Dickinson",
      "indications": "Molestiae et nihil laborum exercitationem dicta quas atque. Ut ullam corrupti quidem error qui totam. Sunt sit itaque unde suscipit accusantium laboriosam ratione. Recusandae commodi quisquam eum illum nihil inventore.\n\nEligendi reiciendis doloremque tempore magni et. Voluptates sit autem amet.\n\nMinima quidem perferendis eos et sit delectus atque. Veritatis laborum est et id ratione aperiam sed. Maxime ipsam quibusdam ut eaque molestiae autem consequatur.",
      "categoryId": 2,
      "category": {
        "id": 2,
        "name": "omnis eaque quam",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "omnis-eaque-quam",
        "priority": 6,
        "parentId": null,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Gel",
      "noted": "Aut aut natus placeat et cum repudiandae. Non et earum laboriosam consectetur eum animi. Corrupti consequatur repudiandae ipsa impedit mollitia dolor.",
      "description": "Facilis esse ex iusto quo iure amet et. Sit vitae expedita molestias corrupti. Et aut ducimus et fugiat corporis et vero corrupti. Est laboriosam eum officiis qui aut.\n\nNobis voluptatum itaque nam dolor dolores. Dolorem omnis aut voluptates quo quia mollitia ipsa. Ut itaque harum quis dolor repellendus consectetur eaque. Optio molestiae facere voluptatem ipsum consequatur ea dolores. Et autem est quaerat voluptatem et.\n\nAtque aut molestiae eum est expedita voluptate. Quia consequuntur quis amet nisi reprehenderit minima consequatur. Et facere est earum dicta.\n\nOmnis nam nihil et qui repellat iste qui. Totam possimus quos distinctio omnis error totam. Harum reprehenderit cum eos nostrum laudantium. Sapiente expedita tempora eveniet dolor.\n\nRerum quo est reiciendis laborum quos molestiae provident. Dicta error qui illo animi qui dolore rerum in. Qui eos at eius. Sed dolores totam in sed neque.",
      "quantity": 69,
      "price": 435000.0,
      "registrationNumber": "REG01714-809840-32",
      "slug": "ut-quis-numquam-aut",
      "createdAt": "2024-12-07T13:28:12",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 182,
          "productId": 3,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 21,
          "productId": 3,
          "customerId": 21,
          "customer": {
            "id": 21,
            "email": "fahey.oswaldo@example.com",
            "password": "$2y$12$Z62Pt1JhMLs50aIwjwc5wuG0kPjV9fIoOYFIqsBg5eIFRM1iiGQQ6",
            "fullName": "Fred Kuhn",
            "gender": "male",
            "phoneNumber": "+12609421544",
            "address": "9067 Stacy Canyon Suite 961\nSchoenborough, TX 06924-2559",
            "createdAt": "2024-04-29T20:14:17",
            "updatedAt": "2025-03-06T16:39:53",
            "orders": []
          },
          "content": "Quod est autem ut impedit vero aut. Similique ipsa ut quisquam quis. Qui quos recusandae et aut molestiae neque repellat. Ex similique asperiores molestias voluptates similique. Explicabo iste illum itaque incidunt.\n\nQui molestias numquam aspernatur expedita molestias. Quo recusandae sed id aut saepe illo quasi. Labore maiores sunt exercitationem pariatur commodi. Necessitatibus molestias neque aspernatur non cum omnis.\n\nEt excepturi eos temporibus accusantium quis. Eaque velit enim eligendi. Voluptatem fuga asperiores ab et aut consequatur. Minus et ab ea deserunt.",
          "createdAt": "2024-10-25T15:08:24",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        },
        {
          "id": 97,
          "productId": 3,
          "customerId": 46,
          "customer": {
            "id": 46,
            "email": "schultz.desmond@example.net",
            "password": "$2y$12$qH6Vk2b4bK63rAijt5lA6.KlJNfwalPrNga0mW0jOLEVL9h11V6Ia",
            "fullName": "Duncan Hagenes",
            "gender": "male",
            "phoneNumber": "435.627.0785",
            "address": "412 Runte Plains Apt. 586\nWest Ova, AZ 90853-4392",
            "createdAt": "2024-05-20T08:51:16",
            "updatedAt": "2025-03-06T16:39:58",
            "orders": [
              {
                "id": 70,
                "customerId": 46,
                "userId": 5,
                "status": "waiting",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 450000,
                "createdAt": "2024-08-08T08:38:31",
                "updatedAt": "2024-08-08T08:38:31"
              }
            ]
          },
          "content": "Iusto iste sit rem numquam omnis sed unde voluptas. Officia est qui veniam dolorum. Illo libero et provident assumenda quia a. Quia reiciendis voluptas veritatis perspiciatis.\n\nQuibusdam quasi illum aut earum alias vel ducimus omnis. Ratione asperiores et qui facere recusandae. Vitae officia rerum sequi et ut. Itaque ab sequi quisquam vel. Ducimus saepe iure molestias.",
          "createdAt": "2024-09-29T06:28:57",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    },
    {
      "id": 4,
      "title": "qui aperiam",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 17,
      "brand": {
        "id": 17,
        "name": "Boehringer Ingelheim",
        "slug": "boehringer-ingelheim",
        "description": "Possimus iusto hic est ex necessitatibus perferendis. Fugiat dolores ex et quis saepe facilis dolore. Minus sunt autem dolores natus nostrum reprehenderit vel. In culpa magni nobis aut quibusdam ad. Ad est omnis et iste et.\n\nQuidem dolorem commodi beatae. Et inventore labore ab mollitia doloribus quam. Est nihil animi sit. Quia perspiciatis voluptatem velit ipsa enim voluptas. Rerum exercitationem qui consectetur sint excepturi sint.\n\nA facere alias ducimus sed. Impedit ex ea voluptate architecto. Pariatur et labore perspiciatis. Est in quo velit iste. Eum ut impedit dignissimos eos et."
      },
      "type": "Medical Device",
      "activeIngredient": "Salbutamol",
      "manufacturer": "D'Amore, Lang and Mohr",
      "indications": "Impedit nemo labore nostrum ut. Debitis excepturi deleniti praesentium dignissimos aspernatur deserunt enim neque.\n\nQui exercitationem molestiae hic repellat ducimus soluta. Tempora sint ut cumque temporibus dolore aliquam eum.\n\nSit corrupti atque autem recusandae sunt. Dicta dolores incidunt sit ut illo recusandae illum. Vel facilis in ullam animi enim. Ab dolores qui quia.",
      "categoryId": 6,
      "category": {
        "id": 6,
        "name": "est",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "est",
        "priority": 5,
        "parentId": 3,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Capsule",
      "noted": "Sit laudantium iusto mollitia libero qui laudantium ex. Error sit dolores ut est deleniti quia minima. Incidunt voluptatum provident ut illum.\n\nEst aut et qui occaecati eveniet. Exercitationem facilis dolorem nam aut totam officia. Asperiores aperiam modi cum sint a ipsum. Adipisci suscipit et rerum est maiores fugit.",
      "description": "Quis quas nihil ut quis. Repellat error velit autem officiis nihil soluta. Dicta et beatae vitae vel unde omnis illum recusandae. Et amet voluptatem velit sunt.\n\nDolor laborum architecto et dicta quisquam nesciunt quasi. Cumque et officia qui accusantium explicabo ad sint. Facilis temporibus nihil aspernatur est exercitationem pariatur voluptatem officiis.\n\nFacere sequi hic cupiditate eius et tenetur cupiditate. Accusantium amet odit ut eos aut est nemo.",
      "quantity": 336,
      "price": 133000.0,
      "registrationNumber": "REG78517-539185-01",
      "slug": "qui-aperiam",
      "createdAt": "2024-05-04T04:58:32",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 135,
          "productId": 4,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": []
    },
    {
      "id": 5,
      "title": "voluptatum autem",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 5,
      "brand": {
        "id": 5,
        "name": "GlaxoSmithKline",
        "slug": "glaxosmithkline",
        "description": "Vel eligendi voluptatem magnam sunt odio. Consequatur ex modi omnis qui corrupti molestiae. Excepturi vitae tenetur reiciendis quia.\n\nMinus quae et quas quasi mollitia ea est. Ad in tempora neque asperiores qui. Omnis totam tenetur rem deleniti quia. Et in aperiam aut quia. In quaerat et in enim aperiam in dolorum.\n\nBeatae iure dicta debitis accusamus eos dolorem error asperiores. Quia eligendi autem eius tempora architecto numquam. Molestias omnis ipsam quis et vel ea id eaque. Voluptas voluptatem id error voluptatem repellendus.\n\nAnimi nulla ratione sint aut omnis et. Enim neque distinctio ut facere. Aut quidem aut dolores est eveniet repellendus. Aut nihil iure est tempore nostrum voluptatum harum.\n\nRerum doloribus id totam saepe vero sint. Doloribus incidunt quo saepe est provident. Reprehenderit magni sit harum vel dolorem voluptas dolore. Et aut culpa dolor quia nisi expedita."
      },
      "type": "Supplement",
      "activeIngredient": "Paracetamol",
      "manufacturer": "Kertzmann, Herman and Batz",
      "indications": "Facilis voluptas quibusdam qui est enim. Eos tempora optio alias. Assumenda assumenda sed voluptas qui quia qui.",
      "categoryId": 15,
      "category": {
        "id": 15,
        "name": "consectetur commodi voluptatem",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "consectetur-commodi-voluptatem",
        "priority": 9,
        "parentId": 1,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Injection",
      "noted": "Sequi molestias dignissimos repellat perspiciatis ut. Sunt numquam repellat et deserunt veritatis iusto ex.",
      "description": "Et ab accusantium est dolorem qui magni velit. Omnis praesentium aut distinctio laboriosam. Aliquid a voluptas et molestiae sunt molestiae.\n\nEst architecto aliquam consequuntur iure minima. Sunt eum occaecati quod numquam fuga et illum et. Omnis sint explicabo asperiores placeat ut. Est ut corporis dicta similique ea qui.\n\nLaudantium qui nemo dolores aspernatur dicta. Cumque sunt facere atque ut. Accusantium tenetur atque molestias sed inventore occaecati.\n\nQuos rem et vero vero in. Fugiat ut magnam quod maxime est reiciendis itaque et. Dolor quis numquam provident rerum aut.",
      "quantity": 231,
      "price": 272000.0,
      "registrationNumber": "REG34943-677824-38",
      "slug": "voluptatum-autem",
      "createdAt": "2024-10-16T14:58:59",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [],
      "comments": [
        {
          "id": 8,
          "productId": 5,
          "customerId": 29,
          "customer": {
            "id": 29,
            "email": "jonathon.roberts@example.com",
            "password": "$2y$12$.NqD/iD7w5VuiLpjHE948.PY0XRxqUXFauEBFEKH2QfbpB.ZFyx6u",
            "fullName": "Chadrick Kiehn",
            "gender": "male",
            "phoneNumber": "+1.660.658.0872",
            "address": "48976 Bessie Plains Apt. 158\nHermannchester, AZ 37673-0075",
            "createdAt": "2024-11-22T05:58:03",
            "updatedAt": "2025-03-06T16:39:55",
            "orders": [
              {
                "id": 47,
                "customerId": 29,
                "userId": 8,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 598000,
                "createdAt": "2024-12-26T03:15:02",
                "updatedAt": "2024-12-26T03:15:02"
              }
            ]
          },
          "content": "Aut voluptates excepturi dicta voluptas quia. Ex fuga quasi amet rerum beatae. Cum autem et maxime exercitationem. Tempore incidunt doloremque in adipisci voluptas ea voluptatem.\n\nSed inventore culpa repellat itaque perferendis fugit debitis deleniti. Dolorum dolor porro in veritatis quam enim reiciendis. Voluptatem minus perspiciatis beatae.",
          "createdAt": "2024-10-27T20:09:18",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        },
        {
          "id": 44,
          "productId": 5,
          "customerId": 4,
          "customer": {
            "id": 4,
            "email": "bennie.runte@example.net",
            "password": "$2y$12$Tux1leHPl4S/6ivImo8PLea6hkcfV9XGN.vzV81DMkdFdgr20SW86",
            "fullName": "Krystal Boehm",
            "gender": "female",
            "phoneNumber": "501-763-2550",
            "address": "2945 Brenda Oval\nFrancescostad, AZ 48667",
            "createdAt": "2025-01-09T07:14:56",
            "updatedAt": "2025-03-06T16:39:49",
            "orders": [
              {
                "id": 24,
                "customerId": 4,
                "userId": 6,
                "status": "waiting",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 1656000,
                "createdAt": "2025-01-31T20:25:42",
                "updatedAt": "2025-01-31T20:25:42"
              },
              {
                "id": 30,
                "customerId": 4,
                "userId": 6,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "pending",
                "totalPrice": 61000,
                "createdAt": "2025-01-06T03:53:07",
                "updatedAt": "2025-01-06T03:53:07"
              },
              {
                "id": 53,
                "customerId": 4,
                "userId": 8,
                "status": "customer_cancelled",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 1615000,
                "createdAt": "2024-07-11T03:09:14",
                "updatedAt": "2024-07-11T03:09:14"
              },
              {
                "id": 57,
                "customerId": 4,
                "userId": 7,
                "status": "admin_cancelled",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 2413000,
                "createdAt": "2025-02-23T10:37:48",
                "updatedAt": "2025-02-23T10:37:48"
              }
            ]
          },
          "content": "Quos non voluptas sed. Accusamus quaerat quas est quis. Voluptas maiores cum pariatur sint cumque esse minima.",
          "createdAt": "2025-01-02T19:11:29",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": [
            {
              "id": 20,
              "commentId": 44,
              "replyContent": "Doloribus aut voluptatibus et. Est assumenda culpa sequi quia quibusdam culpa voluptas. Consequatur rerum voluptates occaecati adipisci ea accusamus. Recusandae sunt culpa sed rerum ut sint consectetur.",
              "createdAt": "2024-11-30T09:26:45",
              "updatedAt": "2025-03-06T16:39:59"
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "velit ut et occaecati",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 14,
      "brand": {
        "id": 14,
        "name": "Gilead Sciences",
        "slug": "gilead-sciences",
        "description": "Est molestias rem corrupti aut quo excepturi et. Vero quod sequi sunt adipisci est exercitationem sed. Voluptatem dolor rerum rem ipsam illo quod possimus.\n\nEius blanditiis fugiat eveniet rerum. Et aut repellendus at assumenda non ipsa iste. Voluptatem hic facilis reiciendis quia quae cum. Harum ex sunt eum et assumenda.\n\nQuos reprehenderit porro ut expedita omnis nemo assumenda sequi. Odit mollitia harum explicabo quia.\n\nQuisquam repudiandae eligendi eos delectus est fugit asperiores. Similique et ratione qui debitis sed ullam maxime. Adipisci et repellendus ea dolores. Odit incidunt ut et omnis."
      },
      "type": "Prescription",
      "activeIngredient": "Atorvastatin",
      "manufacturer": "Bogan-Keeling",
      "indications": "Accusantium quos amet soluta doloremque sapiente provident rerum. Fuga autem quaerat distinctio autem officiis. Consectetur quaerat voluptates vel ipsum. Omnis amet alias voluptatem deserunt perferendis minus.\n\nVoluptas incidunt quas libero minima. Rem et autem totam dicta architecto aut. Aut aut quos fuga harum. Omnis est dolore illo. Enim qui in sit et.\n\nUnde eligendi voluptatem delectus omnis temporibus aut doloribus omnis. Necessitatibus quia quasi aut quisquam nesciunt sint. Ut eveniet culpa similique vel.",
      "categoryId": 6,
      "category": {
        "id": 6,
        "name": "est",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "est",
        "priority": 5,
        "parentId": 3,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Capsule",
      "noted": "Et sapiente recusandae aut. Maiores rem ratione est veniam mollitia et exercitationem. Assumenda voluptas id ut laboriosam rerum libero. Ipsum aliquid et sunt et ut.\n\nIpsam nihil porro aut iure nihil officiis sint. Quas adipisci possimus facere. Numquam animi dolorum dolores hic a. Ratione natus ipsam aliquid sint blanditiis. Repellendus autem animi dolore nulla quia quidem.",
      "description": "Deserunt asperiores quis officia tempore. Facilis qui quis consequatur consequatur itaque sed odio. Veritatis necessitatibus cupiditate a voluptas occaecati. Laboriosam aliquid nam sed in mollitia est quis totam.\n\nQui est doloremque alias perferendis consequatur. Distinctio aut nostrum tenetur et nulla sequi alias ullam. Assumenda assumenda recusandae non sed et.\n\nVoluptatem quam voluptatem sed vel ut atque. Nam sit suscipit aspernatur at. Ipsam architecto eos incidunt illum odit illo. Nisi dolorem quaerat nihil repellat.\n\nFugiat quae aut voluptates dolores corporis doloribus accusantium. Inventore dolor totam voluptatibus. Cum molestias aliquam et placeat.\n\nDicta ut perspiciatis dolores cumque. Non ex rerum molestiae et sed placeat. Saepe laudantium quis autem omnis aut. Ut ut voluptatibus neque minima laudantium rem voluptas.",
      "quantity": 207,
      "price": 303000.0,
      "registrationNumber": "REG36140-070199-27",
      "slug": "velit-ut-et-occaecati",
      "createdAt": "2024-08-30T22:48:43",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 107,
          "productId": 6,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 29,
          "productId": 6,
          "customerId": 21,
          "customer": {
            "id": 21,
            "email": "fahey.oswaldo@example.com",
            "password": "$2y$12$Z62Pt1JhMLs50aIwjwc5wuG0kPjV9fIoOYFIqsBg5eIFRM1iiGQQ6",
            "fullName": "Fred Kuhn",
            "gender": "male",
            "phoneNumber": "+12609421544",
            "address": "9067 Stacy Canyon Suite 961\nSchoenborough, TX 06924-2559",
            "createdAt": "2024-04-29T20:14:17",
            "updatedAt": "2025-03-06T16:39:53",
            "orders": []
          },
          "content": "Accusantium deserunt perspiciatis quo aliquam veritatis atque. Assumenda ut velit fuga. Amet sunt quibusdam in ipsum tenetur doloremque aliquid. Quidem voluptatem ex et sunt qui.",
          "createdAt": "2024-11-03T20:29:27",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": [
            {
              "id": 29,
              "commentId": 29,
              "replyContent": "Id ea unde consequuntur atque voluptatem qui dolorem. Non officiis deleniti ratione dolores atque eveniet. Dolor numquam nemo eum velit vero nam molestias.\n\nVoluptatibus praesentium iure nesciunt odio eum. Quia eos dolorem necessitatibus ut vitae quibusdam molestiae. Sit et quia quae suscipit.",
              "createdAt": "2025-01-04T19:04:24",
              "updatedAt": "2025-03-06T16:39:59"
            }
          ]
        },
        {
          "id": 94,
          "productId": 6,
          "customerId": 9,
          "customer": {
            "id": 9,
            "email": "mrosenbaum@example.com",
            "password": "$2y$12$HF/DwAc7YWhNWDeJWONasewpqu8IUIEW0HRW4XvFDlwMuwBbUgkL6",
            "fullName": "Amy Von",
            "gender": "female",
            "phoneNumber": "1-979-212-4870",
            "address": "39942 Jessy Keys\nPort Brisa, SC 98641",
            "createdAt": "2024-05-29T09:07:21",
            "updatedAt": "2025-03-06T16:39:50",
            "orders": [
              {
                "id": 2,
                "customerId": 9,
                "userId": 9,
                "status": "waiting",
                "paymentMethod": "online",
                "paymentStatus": "pending",
                "totalPrice": 1020000,
                "createdAt": "2024-05-11T03:59:42",
                "updatedAt": "2024-05-11T03:59:42"
              },
              {
                "id": 19,
                "customerId": 9,
                "userId": 2,
                "status": "processing",
                "paymentMethod": "offline",
                "paymentStatus": "pending",
                "totalPrice": 1010000,
                "createdAt": "2024-09-12T09:11:19",
                "updatedAt": "2024-09-12T09:11:19"
              }
            ]
          },
          "content": "Est voluptate molestiae consequatur est ipsa veniam sit. Dolorem quod alias porro placeat delectus. Corporis explicabo optio pariatur quia nihil.",
          "createdAt": "2024-11-17T03:25:32",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    },
    {
      "id": 7,
      "title": "dolore sequi",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 10,
      "brand": {
        "id": 10,
        "name": "Abbott",
        "slug": "abbott",
        "description": "Aut nobis id vel quis. Ipsam id fuga tenetur dolore consectetur ducimus. Tempora illum commodi sit.\n\nPossimus eveniet magnam eos iusto debitis optio tempora facilis. Facilis eum sunt exercitationem provident qui eum. Et dolore quidem molestias.\n\nEnim eum ut sed sit maiores fuga cumque ducimus. Perspiciatis id ratione sapiente ratione. Beatae id velit totam minus."
      },
      "type": "Herbal",
      "activeIngredient": "Codeine",
      "manufacturer": "Deckow-Graham",
      "indications": "Voluptas eum provident repudiandae. Cumque consequuntur est non ad optio quidem.\n\nVitae voluptatem excepturi accusantium deserunt harum nam. Aut ab a doloribus ab pariatur. Aspernatur accusamus quibusdam nihil consequatur unde sed. Perferendis ea veritatis asperiores illo ab quis molestiae.\n\nQui praesentium eligendi nulla doloremque deleniti quas esse. Mollitia ut nobis assumenda illum sed tenetur. Eum praesentium aut dolores assumenda in ut inventore. Est debitis fuga accusamus aliquid libero ut iste.",
      "categoryId": 10,
      "category": {
        "id": 10,
        "name": "est optio",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "est-optio",
        "priority": 1,
        "parentId": 4,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Ointment",
      "noted": null,
      "description": "Officia voluptatem est ullam et nam quis. Voluptates eveniet sit velit autem eius nulla. Impedit explicabo et accusantium corporis necessitatibus. Laboriosam voluptatibus saepe placeat veritatis maxime.\n\nReprehenderit corrupti dolores qui tenetur. Doloremque voluptatibus dignissimos cupiditate quo laboriosam.\n\nDicta sit qui eos totam omnis. Accusamus sit amet quisquam recusandae dolor.\n\nIn nihil perferendis non magnam voluptas. Exercitationem perferendis quia assumenda voluptas. Sit nihil illum commodi. Et commodi aperiam voluptatem molestias aut exercitationem nihil ratione.\n\nId deserunt impedit cum minus harum quod temporibus voluptate. Omnis suscipit sunt culpa consequatur pariatur. Doloribus explicabo ipsum dicta mollitia.",
      "quantity": 14,
      "price": 142000.0,
      "registrationNumber": "REG48009-265655-64",
      "slug": "dolore-sequi",
      "createdAt": "2024-10-17T18:03:35",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 199,
          "productId": 7,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 120,
          "productId": 7,
          "customerId": 45,
          "customer": {
            "id": 45,
            "email": "wilhelmine.kuvalis@example.net",
            "password": "$2y$12$r8xG3Gyz5/K1qMbAD.hcHeXr8WLfe0N3bAOIPTC0bWAhcUGGrfQtO",
            "fullName": "Jermaine Kreiger",
            "gender": "female",
            "phoneNumber": "1-478-587-6692",
            "address": "27431 Theresia Skyway Apt. 978\nLake Alfonzo, AL 74391",
            "createdAt": "2024-08-19T19:52:46",
            "updatedAt": "2025-03-06T16:39:58",
            "orders": []
          },
          "content": "Necessitatibus aut molestiae nobis animi voluptas. Sunt autem corporis saepe aut dicta adipisci aut et.\n\nUt tempore qui animi ut consequatur voluptatem aspernatur dolor. Ullam doloribus suscipit quia voluptatem repellendus qui.",
          "createdAt": "2024-10-19T18:10:31",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    },
    {
      "id": 8,
      "title": "enim perspiciatis facilis sed voluptatem",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 8,
      "brand": {
        "id": 8,
        "name": "Sanofi",
        "slug": "sanofi",
        "description": "Consequuntur laborum repellendus corrupti. Sed voluptas ducimus aspernatur laborum non. Aut et labore quos aut.\n\nUt ab quia omnis veniam voluptas. Alias tempore nisi incidunt vitae earum sunt quisquam veritatis. Ut blanditiis eos a et ea saepe."
      },
      "type": "OTC",
      "activeIngredient": "Allopurinol",
      "manufacturer": "Leannon, Kuhn and Ankunding",
      "indications": "Et adipisci voluptas harum dignissimos quam a. Dolorum nulla sed dignissimos alias expedita. Exercitationem dolore sed dicta maxime commodi aut sunt. Tenetur qui modi magni reprehenderit deleniti.\n\nReiciendis corporis a quae illum ipsa. Impedit corrupti qui et quas numquam fuga nostrum officia. Numquam quas pariatur dolore omnis dolorum sed assumenda.\n\nExpedita voluptatibus voluptatem quisquam minus. Nostrum incidunt totam in ex. Ea delectus dolore et rerum repellat sed.",
      "categoryId": 11,
      "category": {
        "id": 11,
        "name": "et",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "et",
        "priority": 3,
        "parentId": 2,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Powder",
      "noted": "Sunt qui nesciunt sequi assumenda corporis ut ratione. Sint laudantium aliquam sed amet sequi qui culpa. Eos odio quia eum nesciunt ut voluptates.\n\nEnim laborum sed iusto illo. Aspernatur in quasi facilis. Iusto voluptate vitae dolor corporis aut. Eum aspernatur sit voluptatum non amet.",
      "description": "Aut molestiae labore labore ut. In est nihil ut necessitatibus. Distinctio voluptatem amet est.\n\nFugiat inventore possimus velit corporis qui quae exercitationem. Molestiae sunt accusantium excepturi laborum. Quia dicta aut beatae voluptatem.\n\nAut unde inventore deserunt rerum sint sint dignissimos architecto. In iste fugiat qui id. Amet reprehenderit laborum possimus quidem iure dolore. Qui ab eius optio explicabo temporibus omnis.",
      "quantity": 223,
      "price": 122000.0,
      "registrationNumber": "REG71067-837760-08",
      "slug": "enim-perspiciatis-facilis-sed-voluptatem",
      "createdAt": "2024-05-08T20:59:03",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 34,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 52,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 57,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 75,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 156,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 196,
          "productId": 8,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 135,
          "productId": 8,
          "customerId": 40,
          "customer": {
            "id": 40,
            "email": "priscilla.stiedemann@example.net",
            "password": "$2y$12$EyHqsdXb4GSb3eLnhD7caOfZ12VQvzV6Bsp0TcrXv5eF2VQ3SlhN6",
            "fullName": "Rudy Mohr",
            "gender": "male",
            "phoneNumber": "(904) 418-3462",
            "address": "624 Quitzon Crossroad Apt. 423\nEast Loraine, ND 91905",
            "createdAt": "2024-10-14T14:26:56",
            "updatedAt": "2025-03-06T16:39:57",
            "orders": [
              {
                "id": 33,
                "customerId": 40,
                "userId": 9,
                "status": "shipped",
                "paymentMethod": "online",
                "paymentStatus": "success",
                "totalPrice": 782000,
                "createdAt": "2024-04-30T23:09:39",
                "updatedAt": "2024-04-30T23:09:39"
              },
              {
                "id": 94,
                "customerId": 40,
                "userId": 9,
                "status": "waiting",
                "paymentMethod": "offline",
                "paymentStatus": "success",
                "totalPrice": 651000,
                "createdAt": "2025-01-19T17:42:39",
                "updatedAt": "2025-01-19T17:42:39"
              }
            ]
          },
          "content": "Quia aut omnis voluptatem alias debitis. Voluptas eligendi temporibus ipsum sed occaecati. Placeat deserunt et velit mollitia. Suscipit aperiam maiores cum nulla voluptatem doloremque beatae.\n\nAsperiores magnam perferendis eius sed voluptas. Dolores dolore fugiat velit qui nulla iure qui voluptas. Fugit expedita voluptas ut ut dolores aut minus voluptatum. Ut enim beatae quibusdam placeat molestiae.\n\nSit assumenda aut amet. Dolorem autem aut ipsa et consequatur sint. Sint assumenda et ullam voluptas repellendus doloribus fugiat. Non voluptatem exercitationem voluptatem libero velit ea autem.",
          "createdAt": "2024-11-05T06:00:58",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    },
    {
      "id": 9,
      "title": "molestias temporibus ab eos",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 9,
      "brand": {
        "id": 9,
        "name": "Bayer",
        "slug": "bayer",
        "description": "Quo sit deserunt minus voluptatem. Quidem architecto ducimus modi doloribus. Sed cum dicta qui totam.\n\nTempore et culpa reiciendis qui blanditiis totam eos enim. Earum non dolor porro similique. Et soluta repellendus aut rerum quisquam omnis soluta et.\n\nAut voluptas non ut doloribus tempora. Fugiat sunt aspernatur rerum ut sapiente minus."
      },
      "type": "Supplement",
      "activeIngredient": "Fluoxetine",
      "manufacturer": "Kirlin, Graham and Goldner",
      "indications": "Aliquid quis dolorem autem aut sunt. Id ullam consectetur et voluptatibus quod.",
      "categoryId": 5,
      "category": {
        "id": 5,
        "name": "voluptas nisi delectus",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "voluptas-nisi-delectus",
        "priority": 7,
        "parentId": null,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Injection",
      "noted": "Et aut debitis illum quisquam aperiam tempora. Ea vel commodi sunt vel aliquam neque. Accusantium iusto amet possimus praesentium.",
      "description": "Et quo aspernatur fugiat autem ut ut eos minus. Est deleniti sit quam nostrum aut velit odio. Dignissimos eaque sed omnis beatae beatae perferendis.\n\nAperiam facilis voluptate est voluptatem minus est sunt. Officiis ut animi sunt vitae incidunt explicabo laborum. Omnis quae magni atque.\n\nVelit tempore mollitia porro illum reiciendis eum. Corporis ea aut consectetur omnis a amet. Molestiae ut maxime qui.",
      "quantity": 375,
      "price": 296000.0,
      "registrationNumber": "REG87802-623031-76",
      "slug": "molestias-temporibus-ab-eos",
      "createdAt": "2025-01-02T23:56:07",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 44,
          "productId": 9,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 56,
          "productId": 9,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 181,
          "productId": 9,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 183,
          "productId": 9,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 66,
          "productId": 9,
          "customerId": 49,
          "customer": {
            "id": 49,
            "email": "winifred.reilly@example.org",
            "password": "$2y$12$3yGWJk6ITQPK8obPu2CGDeMO0zQtQa.xf4J7yaRT/ZnI1RzEZluK.",
            "fullName": "Stefan Lueilwitz",
            "gender": "male",
            "phoneNumber": "(325) 727-1004",
            "address": "7763 Yost Fields Apt. 709\nLake Arianna, WV 34651",
            "createdAt": "2025-02-10T00:57:03",
            "updatedAt": "2025-03-06T16:39:59",
            "orders": [
              {
                "id": 13,
                "customerId": 49,
                "userId": 2,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 710000,
                "createdAt": "2024-04-05T22:00:10",
                "updatedAt": "2024-04-05T22:00:10"
              },
              {
                "id": 36,
                "customerId": 49,
                "userId": 8,
                "status": "processing",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 2307000,
                "createdAt": "2024-11-14T18:39:44",
                "updatedAt": "2024-11-14T18:39:44"
              },
              {
                "id": 54,
                "customerId": 49,
                "userId": 4,
                "status": "admin_cancelled",
                "paymentMethod": "online",
                "paymentStatus": "fail",
                "totalPrice": 2410000,
                "createdAt": "2025-01-30T09:45:15",
                "updatedAt": "2025-01-30T09:45:15"
              }
            ]
          },
          "content": "Qui laudantium iusto non autem qui perspiciatis. Maiores omnis labore itaque. Quasi est et libero voluptas deleniti qui iste.\n\nOmnis ipsa amet dicta eos saepe et cumque. Et veritatis aut eos reiciendis amet in libero. Magnam doloremque nostrum ullam officiis et nam blanditiis. Velit iusto et eum eum sed quis dignissimos.",
          "createdAt": "2024-10-15T11:52:41",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": [
            {
              "id": 34,
              "commentId": 66,
              "replyContent": "Sit possimus aut at occaecati. Accusantium accusantium tenetur veniam dolores tempore voluptas. Voluptatem sequi eum sunt hic totam.",
              "createdAt": "2025-03-03T19:07:51",
              "updatedAt": "2025-03-06T16:39:59"
            }
          ]
        }
      ]
    },
    {
      "id": 10,
      "title": "ut quod",
      "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
      "brandId": 7,
      "brand": {
        "id": 7,
        "name": "AstraZeneca",
        "slug": "astrazeneca",
        "description": "Quia nostrum harum aut cum animi. Dolorem ducimus facere accusamus qui totam quo dolorum. Esse hic sed molestias tempora blanditiis perspiciatis.\n\nA molestiae dolores et mollitia ut. Quis non distinctio est reprehenderit. Ex quod vitae inventore ea corporis. Accusantium consequatur natus tempora voluptatem esse rem quidem. Nulla sunt consequatur vitae ullam fugit blanditiis sunt voluptate.\n\nOmnis deserunt aut corporis odit voluptas voluptatem. Qui voluptatem praesentium excepturi qui facilis et."
      },
      "type": "Prescription",
      "activeIngredient": "Metformin",
      "manufacturer": "Hudson, Kovacek and Harber",
      "indications": "Expedita expedita fugiat dolorem quidem consectetur dignissimos. Natus reprehenderit quas possimus eius fuga aut labore. Excepturi vel soluta eos ea impedit rerum. Qui est dolores ipsam ipsa dolorem porro aut.\n\nUllam voluptatem voluptatem illo. Enim sit optio voluptatibus enim ea aut culpa.\n\nPerspiciatis consequatur aut totam ea. Libero iusto ducimus et omnis magni voluptates deleniti distinctio.",
      "categoryId": 5,
      "category": {
        "id": 5,
        "name": "voluptas nisi delectus",
        "thumbnail": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
        "slug": "voluptas-nisi-delectus",
        "priority": 7,
        "parentId": null,
        "createdAt": "2025-03-06T16:39:49",
        "updatedAt": "2025-03-06T16:39:49"
      },
      "dosageForm": "Liquid",
      "noted": null,
      "description": "Vero repellat velit doloribus sit velit. Dolore dolor necessitatibus sint magni unde voluptas. Laborum dicta ut rem dolores perspiciatis eum error. Atque sint aut esse.\n\nNobis ut autem fugiat tempora aspernatur ut enim a. Expedita ea ut qui. Perferendis earum quia tempore veritatis numquam expedita possimus. Repellendus aliquam rerum alias deserunt tenetur.\n\nAliquid facilis atque fuga perspiciatis et. Reiciendis nisi et a voluptatibus. Eaque repellendus aliquam impedit assumenda non necessitatibus iste velit.\n\nMaxime officiis aut porro voluptatibus. Recusandae nam esse qui vero provident iste. Vero recusandae corrupti facere sit.\n\nEos et quibusdam debitis recusandae consequuntur ratione. Odio omnis mollitia cupiditate beatae sapiente. Omnis culpa nemo ullam voluptas ab eum magni laudantium. Reiciendis qui sit laudantium consequatur harum libero laborum quibusdam. Molestiae doloribus consequatur qui hic cupiditate quia.\n\nEum id saepe laudantium aut aut. Ut autem ut ad libero doloribus maiores quod. Et iusto aliquam numquam iure. At et sunt nihil. Magnam dicta quibusdam et et.",
      "quantity": 156,
      "price": 198000.0,
      "registrationNumber": "REG03842-161741-61",
      "slug": "ut-quod",
      "createdAt": "2025-01-06T16:46:01",
      "updatedAt": "2025-03-06T16:39:59",
      "productImages": [
        {
          "id": 35,
          "productId": 10,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        },
        {
          "id": 48,
          "productId": 10,
          "url": "https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
          "createdAt": "2025-03-06T16:39:59",
          "updatedAt": "2025-03-06T16:39:59"
        }
      ],
      "comments": [
        {
          "id": 61,
          "productId": 10,
          "customerId": 8,
          "customer": {
            "id": 8,
            "email": "huels.kallie@example.org",
            "password": "$2y$12$lzqBZUB/xdg597aH/im1u.2tCEbfR6tmiSdEa23WlEOLWrz/hF3A.",
            "fullName": "Kayli Boehm",
            "gender": "female",
            "phoneNumber": "+1-216-801-2768",
            "address": "374 Joelle Stream\nLake Deangeloside, DE 66990",
            "createdAt": "2025-02-06T01:15:19",
            "updatedAt": "2025-03-06T16:39:50",
            "orders": [
              {
                "id": 62,
                "customerId": 8,
                "userId": 7,
                "status": "admin_cancelled",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 2196000,
                "createdAt": "2024-11-17T16:50:35",
                "updatedAt": "2024-11-17T16:50:35"
              },
              {
                "id": 88,
                "customerId": 8,
                "userId": 8,
                "status": "admin_cancelled",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 1779000,
                "createdAt": "2024-08-29T00:19:14",
                "updatedAt": "2024-08-29T00:19:14"
              },
              {
                "id": 90,
                "customerId": 8,
                "userId": 9,
                "status": "waiting",
                "paymentMethod": "offline",
                "paymentStatus": "fail",
                "totalPrice": 1526000,
                "createdAt": "2024-08-16T21:07:38",
                "updatedAt": "2024-08-16T21:07:38"
              }
            ]
          },
          "content": "Aut ducimus architecto et occaecati. Tenetur quia ut ipsam dolores ut quia consectetur. Ut id vitae repudiandae quas.",
          "createdAt": "2024-12-01T12:31:04",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": [
            {
              "id": 3,
              "commentId": 61,
              "replyContent": "Officiis doloribus aliquam qui ab impedit. Hic culpa veritatis laborum voluptatibus tenetur. Similique blanditiis expedita natus est quasi. Voluptatum doloremque cupiditate dolore id consequatur enim qui.",
              "createdAt": "2024-11-13T03:33:11",
              "updatedAt": "2025-03-06T16:39:59"
            },
            {
              "id": 7,
              "commentId": 61,
              "replyContent": "Aperiam consequatur neque deserunt quo ipsum nemo aut animi. Unde et et quo molestiae. Et hic quaerat exercitationem sit. Laudantium accusamus quis ab consequuntur.\n\nLaborum voluptas autem culpa dolor consequatur velit. Aut et nobis ad et ratione molestiae. Cumque labore molestias quia reiciendis autem ut. Quisquam iure animi pariatur commodi est cupiditate tempore.",
              "createdAt": "2024-10-29T20:19:39",
              "updatedAt": "2025-03-06T16:39:59"
            },
            {
              "id": 26,
              "commentId": 61,
              "replyContent": "Nihil qui fuga beatae cupiditate molestiae reprehenderit. Provident aut quia sequi aliquam. Hic aperiam nostrum minima repudiandae ut. Itaque cumque eligendi et voluptatem quis debitis.\n\nAliquid numquam accusantium dolorem. Vero magni qui molestias. Facilis error veniam nam ut.",
              "createdAt": "2024-11-11T02:36:07",
              "updatedAt": "2025-03-06T16:39:59"
            }
          ]
        },
        {
          "id": 129,
          "productId": 10,
          "customerId": 43,
          "customer": {
            "id": 43,
            "email": "ogleason@example.org",
            "password": "$2y$12$yaJBIRK9Qf0YdIJya/yS7u44Jzv7vz2fabCc9L2Nhi4LWrt97BC2S",
            "fullName": "Fabian Steuber",
            "gender": "male",
            "phoneNumber": "+16284821546",
            "address": "579 Torp Expressway\nEast Yeseniashire, MA 79265",
            "createdAt": "2025-01-16T02:11:37",
            "updatedAt": "2025-03-06T16:39:58",
            "orders": [
              {
                "id": 64,
                "customerId": 43,
                "userId": 3,
                "status": "processing",
                "paymentMethod": "offline",
                "paymentStatus": "success",
                "totalPrice": 1845000,
                "createdAt": "2024-03-31T19:30:42",
                "updatedAt": "2024-03-31T19:30:42"
              }
            ]
          },
          "content": "Non ea veritatis enim enim vel omnis iusto. Corporis iusto inventore qui reprehenderit consequuntur dolore. Et aut adipisci cumque maiores voluptate aut.",
          "createdAt": "2025-02-12T19:50:18",
          "updatedAt": "2025-03-06T16:39:59",
          "replyComments": []
        }
      ]
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 10,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "last": false,
  "totalElements": 100,
  "totalPages": 10,
  "size": 10,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "first": true,
  "numberOfElements": 10,
  "empty": false
}
```

## Endpoint: /products/{id}

## Response:

```json
{
  "code": 200,
  "message": "Lấy sản phẩm theo ID thành công",
  "data": {
    "id": 1,
    "title": "aut fugit ex quas",
    "thumbnail": "http://127.0.0.1:8000https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg",
    "brandId": 6,
    "brandName": "Johnson & Johnson",
    "type": "Medical Device",
    "activeIngredient": "Codeine",
    "indications": "Occaecati rerum aut consequuntur veniam labore a ducimus. Eum qui ut sed pariatur suscipit dolor quis. Nihil vitae ullam ducimus quia sed nisi.\n\nAut voluptates molestiae sint laborum incidunt qui ab. Adipisci tempora ea autem commodi ut. Velit incidunt nam consequatur id ut.",
    "manufacturer": "Klocko-Grady",
    "categoryId": 4,
    "categoryName": "veritatis qui perspiciatis",
    "dosageForm": "Capsule",
    "noted": "Sed dolore est vel facere. Perferendis doloribus modi error rem et. Placeat corporis a velit modi tempore. Beatae accusantium voluptas adipisci quod qui perspiciatis.",
    "description": "Non velit et quia minima. Id et aut soluta ratione nostrum vel. Nobis necessitatibus quia voluptate accusamus dolorem. Debitis neque laudantium et et ea quod.\n\nLabore recusandae possimus dolor perferendis aut facilis fugit pariatur. Vel nam dolores occaecati fugit.\n\nIncidunt suscipit tenetur alias adipisci rerum. Sapiente inventore numquam et voluptatibus et voluptatum voluptatem in. Dolorem dignissimos quis dolorem sed tempora non sit.\n\nFacilis temporibus qui non quia reprehenderit. Voluptas odit voluptas voluptates ullam aut autem. Nam neque nemo assumenda laboriosam aliquid. Cum pariatur quo consectetur et.\n\nBlanditiis ea error qui. Corrupti laudantium aut in voluptatibus reprehenderit animi blanditiis. Doloremque tempore qui dolor harum ex repellendus voluptatibus. Dolores quibusdam expedita est sit amet. Id quod error eum itaque.",
    "quantity": 499,
    "price": 348000.0,
    "registrationNumber": "REG72815-630854-85",
    "slug": "aut-fugit-ex-quas",
    "productImagesResponses": [
      {
        "id": 83,
        "productId": 1,
        "url": "http://127.0.0.1:8000https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg"
      },
      {
        "id": 105,
        "productId": 1,
        "url": "http://127.0.0.1:8000https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg"
      }
    ],
    "commentsResponses": [
      {
        "id": 56,
        "productId": 1,
        "customerId": 48,
        "customerName": "Nelle Hahn",
        "content": "Quasi rerum nihil inventore consequatur id. Ut quidem occaecati expedita sed ab et et iure. Laborum iste asperiores debitis non illum.",
        "replyCommentResponses": []
      },
      {
        "id": 57,
        "productId": 1,
        "customerId": 6,
        "customerName": "Freddie Kshlerin",
        "content": "Cum non quae sed maiores sit. Dignissimos modi aut qui beatae fuga consequatur. Accusamus nobis nam deleniti at iste sint aspernatur praesentium. Id amet quae a.",
        "replyCommentResponses": []
      },
      {
        "id": 95,
        "productId": 1,
        "customerId": 25,
        "customerName": "Makenzie Moen",
        "content": "Ipsum fugit doloremque ipsum sint. Sint et incidunt autem dolores sit quia. Animi quis voluptatem explicabo iste. Amet non tempora est sapiente eveniet neque reprehenderit.",
        "replyCommentResponses": []
      },
      {
        "id": 143,
        "productId": 1,
        "customerId": 49,
        "customerName": "Stefan Lueilwitz",
        "content": "Dolor assumenda alias qui blanditiis. Provident ea quos corrupti qui rerum sed dolores. Eos sed quod optio.\n\nEa iure placeat fuga nulla nihil et eos. Voluptates quisquam iusto ea laudantium. Voluptates labore nesciunt dolor alias.\n\nVoluptatem sunt porro distinctio. Voluptatibus dolorum doloremque nemo minima dolorem delectus voluptatibus. Qui quia numquam et et ipsam voluptatem consequatur ratione. Eos eum earum quaerat deserunt qui.",
        "replyCommentResponses": []
      }
    ]
  },
  "timestamp": "2025-03-07T15:50:01.1637867"
}
```


