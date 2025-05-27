SET session_replication_role = 'replica';

-- Truncate tables that have no dependencies first
TRUNCATE TABLE
    trn_automobile_ad_images,
    trn_automobile_ad_attributes,
    trn_automobile_ads,
    trn_automobile_auditlogs,
    approved_automobile_ad_snapshots,
    cfg_real_estate_attributes,
    RESTART IDENTITY;
SET session_replication_role = 'origin';

INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,expired_sponsored_ad)
VALUES ('2015 TOYOTA COROLLA Gasoil', 'Toyota Corolla 2015 d'occasion en très bon état...', 200000, 1, 1, 1, 1, 9, CURRENT_TIMESTAMP, TRUE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, '2015-toyota-corolla',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,expired_sponsored_ad)
VALUES ('jeep compass 2016 à vendre', 'Jeep Cherokee 2016 d'occasion en excellent état...', 200000, 1, 1, 2, 2, 6, CURRENT_TIMESTAMP, TRUE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'jeep-compass-2016-vendre',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('AVENSIS ATIKA D4d', 'Avensis d4d نظيفة استعمال شخصي مولاها بايعها ماهو مشكر عليها شي', 160000, 2, 1, 3, 3, 12, CURRENT_TIMESTAMP, TRUE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'avensis-atika-d4d');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('برلينكو نظيف', 'برلينكو نظيف مالو شي مرقم', 170000, 2, 1, 1, 2, 5, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, TRUE, FALSE, 'برلينكو-نظيف');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('تويوتا أفانسيس نوفو عائلية', 'بيكام بريك مزالت طبيعية كاملة مديونة و مرقمة ترقيمها أجديد (ولاية)', 190000, 1, 1, 2, 2, 16, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'أفانسيس-نوفو',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,change_request)
VALUES ('TOYOTA VERSO ARRIVAGE', 'بيكام بريك مزالت طبيعية كاملة مديونة و مرقمة ترقيمها أجديد (ولاية)', 190000, 1, 1, 2, 2, 18, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'toyota-verso-arrivage',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,rejected)
VALUES ('Toyota RAV4 2008', 'تويوتا راف كات موديل 2008 مجمركة غير مرقمة بعد...', 420000, 1, 1, 1, 4, 2, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'toyota-rav4-2008',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,change_request)
VALUES ('Toyota Corolla le 2018', 'للبيع: تويوتا راف 4 LE 2018 جديدة مجمركة...', 590000, 1, 1, 1, 1, 5, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-le-2018',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,rejected)
VALUES ('راف 4 2005 اوراقها تامين مديورالها مكينه اريفاج ماله', 'راف 4 2005 اوراقها تامين مديورالها مكينه اريفاج مالها اشهر كليماتيزيرها فم حالتها كامل خاطي كومبلسير مبيوعه ابمليون و 550 للتواصل 49395450 واعليه واتساب', 155000, 1, 1, 1, 4, 8, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'راف-2005-4',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,rejected)
VALUES ('كورولا طاش فرصة للبيع', 'تويوتا كورولا 2009 مستعملة بحالة جيدة. سيارة اقتصادية وموثوقة، مناسبة للاستخدام اليومي، وتتميز بكفاءة عالية في استهلاك الوقود. تمت صيانتها بانتظام لمزيد من المعلومات يرجى التواصل معنا.', 300000, 1, 1, 1, 3, 10, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'كورولا-طاش-فرصة-للبي',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Tx 2012', 'Prado 2012 comme neuf matricule xxxxAV00', 590000, 1, 1, 1, 3, 2, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'prado-tx-2012');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('RAV4 2017 gasoil مالها شي داخله', 'RAV4 2017 gasoil مالها شي داخله', 760000, 1, 1, 1, 3, 2, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2017-gasoile-325');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('بيكام جديده و مبلوقه', 'فيه مضاض السرقة ردارات زر إغلاق النوافذ عن بعد الوثائق تامين', 250000, 1, 1, 2, 1, 1, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'بيكام-جديده-مبلوقه',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('vendre ou échanger corolla 2012', 'Corolla 2012 Veuillez contacter via WhatsApp uniquement الرجاء التواصل عبر الواتساب فقط 36020261', 185000, 1, 1, 2, 1, 1, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-2012-echanger-ou-vendre',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('corolla 2020', 'corolla 2020 comme neuf', 380000, 1, 1, 2, 1, 14, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-2020-neuf');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Corolla 2018 bonne état', '2018 bonne etat comme neuf', 350000, 1, 1, 1, 1, 15, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-2018-neuf',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Toyota Avensis 2017', 'للبيع: تويوتا أفينسيس 2017 مستعملة بحالة ممتازة. تتميز هذه السيارة بمساحة داخلية واسعة، مع كفاءة عالية في استهلاك. خضعت لصيانة دورية وهي جاهزة للاستخدام الفوري. لمزيد من التفاصيل، يرجى التواصل معنا.', 210000, 1, 1, 1, 1, 16, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'avensis-2017-23',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('2018 كورولا', 'كورولا 2018 بيظة ؤ فتحة كليماتيزير ديجيتال مافات اورقمت ملفها جديد ؤماكط حركت هون اتكول أربعه كاطعة 152000 كلم', 350000, 1, 1, 1, 1, 17, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, '2018-كورولا-2',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('rav4 2012 comme neuf', 'هاذ rav4 2012 تبارك الله مزالت زينه، مواصفاته، بيتوه ستار وصالوه كوير وكراع من لوره وكاطع 151 وجاي فلكارب التالي وكحاله زين تبارك الله', 350000, 1, 1, 1, 4, 18, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rv4-2012-comme-neuf-2',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Vente RAV4 2008 en très bon etat salon cuire et start', 'Ventre RAV4 2008 importe sur mon nom en très bon etat salon cuire Bouton start papiers complets assurance vignette , quittance commune RAV4 2008 ga63a ela 193 000 km etwa9etha tamin vignette assurance beledia 7aletha zeyne mahi tab3a lessamssara Salon cuire we start', 350000, 1, 1, 1, 4, 18, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'vente-rav4-2008-tres-bon-etat',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Corolla LE 2015 en bonne etat', 'باردة مكينتها زينة و بوتها زينة مبيوعة 3100000', 310000, 2, 1, 2, 2, 19, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-2015-comme-neuf',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Corolla 2013 en bon etat', 'Corolla 2013 en bon etat moteur et boit en tres bonne etat.', 170000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-2013-comme-neuf-moteur-boite-neuf',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Chevrolet cruze a vendre', 'للبيع سيارة من نوع شيفروليه كروز بحالة جيدة Chevrolet cruze a vendre en bon état', 150000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'chevrolet-cruze-a-vendre-315',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('TOYOTA AVENSIS', 'للبيع: تويوتا أفينسيس مستعملة بحالة جيدة. أوراق مكتملة بطاقة رمادية بيومترك جاهزة للاستخدام الفوري. لمزيد من المعلومات رجاء تواصل على الرقم التالي: 33335063', 95000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'toyota-avensis-3333',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('سيارة للبيع', 'سيارة تويوتا آفنسيس قادمة من بلجيك المواصفات : جانت السبور ، 4 فيتر خمسة ابواب', 260000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'car-for-sale-253');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Elantra 2017', 'هيونداي إلنترا 2017 مستعملة بحالة ممتازة. سيارة موثوقة ومريحة، مثالية للاستخدام اليومي. تمت صيانتها جيدًا وجاهزة للقيادة. لمزيد من التفاصيل، تواصل معنا Hyundai Elantra 2017 d'occasion en très bon état. Voiture fiable et confortable, parfaite pour la conduite quotidienne. Bien entretenue et prête à prendre la route. Contactez-nous pour plus de détails.', 250000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'elantra-2017-34');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Mercedes 2016 cla en tré bon etat', 'Mercedes cla Moteur et boite en tré bon etat Climatiser central', 350000, 2, 1, 1, 2, 20, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'mercedes-2016-cla-en-tres-bon-etat');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('هيليكس اوروبية', 'محرك اريفاج ماشاء الله والحركة قوية فتبارك الله', 660000, 1, 1, 2, 2, 12, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, '2014-هيليكس-اوروبية');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('RAV4 2008', 'Je vend mon RAV4 2008 Arrivage en très bonne état dédouaner pas encore Matricule', 370000, 1, 1, 1, 4, 12, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2008-34');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Toyota Corolla Le 2018', 'للبيع: تويوتا كورولا LE 2018 مستعملة بحالة ممتازة. تم استخدامها شخصيًا لمدة شهرين فقط، ثم سافر المالك إلى الخارج. تتميز بكفاءة عالية في استهلاك الوقود وأداء موثوق، مما يجعلها مثالية للتنقل اليومي. السيارة خضعت لصيانة دورية وهي جاهزة للاستخدام الفوري. أوراق مكتملة لمزيد من المعلومات، يرجى التواصل معنا على الواتساب: 42041414', 365000, 1, 1, 1, 2, 12, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'le-2018-2346');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('TOYOTA TX en excellent état FULL OPTION تويوتا فول اوب', 'Vends TOYOTA TX en excellent état FULL OPTION pratiquement immobilisée depuis son acquisition بيع TOYOTA TX بحالة ممتازة FULL OPTIO معطلة غالبا منذ شرائها لتواصل على الواتساب: 46739911', 1090000, 1, 1, 1, 1, 12, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'prado-tx-bonne-etat-full-options');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Chevrolet Sonic Lt 2013', 'فرص زين شفيرلى حركتها جيد AB07 WhatsApp: 44490348 CONTACT:22868525 Chevrolet Sonic Lt 2013', 130000, 1, 1, 2, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'chevrolet-sonic-lt-2013');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Toyota Corolla le 2020', 'فرص زين شفيرلى حركتها جيد AB07 WhatsApp: 44490348 CONTACT:22868525 Chevrolet Sonic Lt 2013', 530000, 2, 1, 1, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-le-2020-32e');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Hyundai elantra 2012 en tout bonne santé pris négociab', 'للبيع: هيونداي إلنترا 2012 مستعملة بحالة جيدة. تتميز بكفاءة عالية في استهلاك الوقود وتصميم أنيق مع أداء موثوق، مما يجعلها مثالية للاستخدام اليومي. تمت صيانتها بشكل منتظم وهي جاهزة للاستخدام الفوري. لمزيد من التفاصيل، يرجى التواصل معنا.', 130000, 1, 1, 3, 2, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'hyundai-elantra-2012-en-tout-bonne-santé-pris-négociab');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Toyota RAV 4 2008 D4-D', 'Toyota Rav 4 2.2 D-4d 4WD 8 CV 136 CH. Modèle 2008 première main. Clim automatique bi-zones Rétroviseurs électriques Volant multifonction Régulateur de vitesse Carrosserie extérieure et intérieure en bon état Mécanique parfaite, rien à prévoir . Véhicule rentré en Mauritanie ce 01 octobre 2024 Dedouané non immatriculé. volet douane fait', 380000, 2, 1, 1, 4, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2008-d4d-234');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Chevrolet 2015 automatique', 'Chevrolet 2015 automatique Moteur et boite en bon etat', 150000, 1, 1, 2, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'chevrolet-2015-235');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Rav 4 2015 diesel en tré bon etat', 'Rav 4 2015 gasoil Moteur en exellent etat Caise dorigine Clim digital Salon propre', 395000, 1, 1, 1, 4, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2015-comme-neuf-jdide');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('RAV4 2008 D4D Arrivage', 'Je vend mon RAV4 2008 Arrivage en très bonne état dédouaner pas encore Matricule', 380000, 2, 1, 1, 4, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2008-arrivage-comme-neuf-32');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('سيار rav4 2008 مافتت اورقمت', 'صييار rav4. 2008 اجديد امنكز اعل ابور اله الا 15 يوم', 420000, 2, 1, 1, 4, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'rav4-2008-36-sdg');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Jeep automatique 2016 en bon etat', 'Jeep grand cherokee 2016 Moteur et boite en bon etat Clim central Suspention en bon etat', 640000, 2, 1, 3, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'jeep-2016-2352-sdsg-23');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('كورولا LE 2018 ملفها فيه شهرين', 'السلام عليكم عندنا هذي كورولا LE 2018 مديونه ميهي مورقمه ملفها فيه شهرين گاطعه 66 ألف شوكها عادي ماشاء الله للتواصل : 49163024', 290000, 2, 1, 1, 1, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'le-2018-deux-mois-comme-neuf0');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('دروكبا نضيفة', 'دروكبا نضيفة', 220000, 2, 1, 1, 1, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'دروكبا-نضيفة');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('corolla silver', 'Corolla silver ( Grande opportunité) فرصة كرولا سلفر له 3 داخلة مكينته سغير كَاطعة 200 ومزالت الجديد تواقطه تامين و حالته مكتملة من جميع النواحي Elle na que 3 jours à Nouakchott, et son dossier est nouveau Kilométrage 200mil', 340000, 2, 1, 1, 2, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'corolla-silver-2006-wags');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Vente occasion', 'Hilux en bon etat ', 470000, 2, 1, 2, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'hilux-bon-etat-2014');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('سياره جيد جدا', 'سياره مزالت بحالة جيده جدا و مكيفها شغال و منظرها جميل و مكتملة الأوراق La voiture est encore en très bon état, la climatisation fonctionne, elle est magnifique et les papiers sont complets', 290000, 2, 1, 2, 3, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, '2015-corolla-neuf-comme-jdide');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('MERCEDES S 320 CLASS CDI', 'مرسيدس S 320 CDI موديل 2008 مستعملة بحالة ممتازة. تتميز هذه السيارة الفاخرة بتصميم أنيق وأداء قوي، مع محرك ديزل يوفر كفاءة عالية في استهلاك الوقود. تمت صيانتها بشكل دوري وهي جاهزة للاستخدام الفوري. لمزيد من التفاصيل يرجى التواصل معنا. S 320 CDI 2008 d'occasion en excellent état. Cette voiture de luxe offre un design élégant et des performances puissantes, avec un moteur diesel garantissant une grande efficacité énergétique. Entretien régulier, prête à l'emploi. Contactez-nous pour plus d'informations. ', 432000, 2, 1, 3, 1, 15, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'mercedes-s-320-class-cdi');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug)
VALUES ('Hyundai ix35 À vendre', 'Hyundai ix35 avec papiers en règles', 260000, 1, 1, 3, 2, 12, CURRENT_TIMESTAMP, FALSE, TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'hyundai-ix35-2013');


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Peugeot GT Line 1.2 d'occasion en excellent état', 'Peugeot GT Line 1.2 d'occasion en excellent état. Voiture élégante et sportive, offrant un bon mélange de performance et d'efficacité. Intérieur soigné et bien équipé. Contactez-nous pour plus d'infos. CONTACT WHATSAPP: +33629136828 NUMERO:38831900', 410000, 2, 1, 3, 3, 9, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'hyundai-ix35-2013',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Jeep Grand Cherokee Gasoil', 'Jeep Grand Cherokee Gasoil', 260000, 1, 1, 3, 2, 12, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'jeep-grand-cherokee',true);


INSERT INTO trn_automobile_ads (title, description, price, user_id, category_id, make_id, model_id, city_id, create_datetime, is_in_review, is_live, is_paid, is_archived, last_update_datetime, is_deleted, is_sold, slug,submitted)
VALUES ('Chemss', 'Tout neuf', 240000, 1, 1, 3, 2, 12, CURRENT_TIMESTAMP, FALSE, FALSE, FALSE, FALSE, CURRENT_TIMESTAMP, FALSE, FALSE, 'chemss-2323dsf',true);

TRUNCATE TABLE cfg_categories;

INSERT INTO cfg_categories (module_key, image_url, description, create_datetime, update_datetime)
VALUES ('AUTOMOBILE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293692670_automobiles-icon.svg',
        'Automobile category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('ELECTRONICS_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293857281_electronics-icon.svg',
        'Electronics category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('REAL_ESTATE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294042074_real-estate-icon.svg',
        'Real Estate category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('FASHION_AND_BEAUTY_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294259764_clothings-icon.svg',
        'Fashion and Beauty category', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('FURNITURE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293910176_furnitures-iconsvg.svg',
        'Furniture category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('OTHER_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294517152_others.svg', 'Other category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO cfg_states (name_key) VALUES
    ('STATE_HODH_CHARGUI'),
    ('STATE_HODH_EL_GHARBI'),
    ('STATE_ASSABA'),
    ('STATE_GORGOL'),
    ('STATE_BRAKNA'),
    ('STATE_TRARZA'),
    ('STATE_ADRAR'),
    ('STATE_DAKHLET_NOUADHIBOU'),
    ('STATE_TAGANT'),
    ('STATE_GUIDIMAGHA'),
    ('STATE_TIRIS_ZEMMOUR'),
    ('STATE_INCHIRI'),
    ('STATE_NOUAKCHOTT_OUEST'),
    ('STATE_NOUAKCHOTT_NORD'),
    ('STATE_NOUAKCHOTT_SUD');
INSERT INTO cfg_cities (city_key, state_id) VALUES
    ('CITY_ADELBAGROU', 1),
    ('CITY_NBEIKET_L', 1),
    ('CITY_OUALATA', 1),
    ('CITY_NEMA', 1),
    ('CITY_DJIGUENNI', 1),
    ('CITY_BASSIKNOU', 1),
    ('CITY_TIMBEDRA', 1),
    ('CITY_AMOURJ', 1),
    ('CITY_AIOUN', 2),
    ('CITY_TAMCHEKET', 2),
    ('CITY_KOUBENNI', 2),
    ('CITY_TINTANE', 2),
    ('CITY_TOUIL', 2),
    ('CITY_BARKEOL', 3),
    ('CITY_BOUMDEID', 3),
    ('CITY_KANKOUSSA', 3),
    ('CITY_KIFFA', 3),
    ('CITY_GUEROU', 3),
    ('CITY_KAEDI', 4),
    ('CITY_MAGHAMA', 4),
    ('CITY_MBOUT', 4),
    ('CITY_LEXEIBA', 4),
    ('CITY_MONGUEL', 4),
    ('CITY_ALEG', 5),
    ('CITY_BABABE', 5),
    ('CITY_MBAGNE', 5),
    ('CITY_MAGTALAHJAR', 5),
    ('CITY_BOGHE', 5),
    ('CITY_MALE', 5),
    ('CITY_TEKANE', 6),
    ('CITY_MEDERDRA', 6),
    ('CITY_ROSSO', 6),
    ('CITY_OUAD_NAGA', 6),
    ('CITY_KEUR_MACEN', 6),
    ('CITY_RKIZ', 6),
    ('CITY_BOUTILIMIT', 6),
    ('CITY_AOUJEFT', 7),
    ('CITY_ATAR', 7),
    ('CITY_OUADANE', 7),
    ('CITY_CHINGUITTI', 7),
    ('CITY_NOUADHIBOU', 8),
    ('CITY_CHAMI', 8),
    ('CITY_TICHIT', 9),
    ('CITY_MOUDJERIA', 9),
    ('CITY_TIDJIKJA', 9),
    ('CITY_GHABOU', 10),
    ('CITY_SELIBABY', 10),
    ('CITY_OULD_YENGE', 10),
    ('CITY_WOMPOU', 10),
    ('CITY_ZOUERAT', 11),
    ('CITY_FDERICK', 11),
    ('CITY_BIR_MOGHREIN', 11), 
    ('CITY_BENNECHAB', 12),
    ('CITY_AKJOUJT', 12),
    ('CITY_KSAR', 13),
    ('CITY_SEBKHA', 13),
    ('CITY_TEVRAGH_ZEINA', 13),
    ('CITY_TOUJOUNINE', 14),
    ('CITY_TEYARET', 14),
    ('CITY_DAR_NAIM', 14),
    ('CITY_ARAFAT', 15),
    ('CITY_EL_MINA', 15),
    ('CITY_RIYADH', 15);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (1, 'https://www.voursa.com/produitsedr/produit_bgph/348976_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (1, 'https://www.voursa.com/produitsedr/produit_bgph/348976_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (2, 'https://www.voursa.com/produitsedr/produit_bgph/346191_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (2, 'https://www.voursa.com/produitsedr/produit_bgph/346191_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (2, 'https://www.voursa.com/produitsedr/produit_bgph/346191_4.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (3, 'https://www.voursa.com/produitsedr/produit_bgph/350487_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (3, 'https://www.voursa.com/produitsedr/produit_bgph/350487_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (4, 'https://www.voursa.com/produitsedr/produit_bgph/332563_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (4, 'https://www.voursa.com/produitsedr/produit_bgph/332563_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (4, 'https://www.voursa.com/produitsedr/produit_bgph/332563_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (4, 'https://www.voursa.com/produitsedr/produit_bgph/332563_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (5, 'https://www.voursa.com/produitsedr/produit_bgph/345753_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (5, 'https://www.voursa.com/produitsedr/produit_bgph/345753_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (5, 'https://www.voursa.com/produitsedr/produit_bgph/345753_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (5, 'https://www.voursa.com/produitsedr/produit_bgph/345753_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (6, 'https://www.voursa.com/produitsedr/produit_bgph/347052_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (6, 'https://www.voursa.com/produitsedr/produit_bgph/347052_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (6, 'https://www.voursa.com/produitsedr/produit_bgph/347052_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (6, 'https://www.voursa.com/produitsedr/produit_bgph/347052_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (7, 'https://www.voursa.com/produitsedr/produit_bgph/350408_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (7, 'https://www.voursa.com/produitsedr/produit_bgph/350408_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (7, 'https://www.voursa.com/produitsedr/produit_bgph/350408_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (7, 'https://www.voursa.com/produitsedr/produit_bgph/350408_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (8, 'https://www.voursa.com/produitsedr/produit_bgph/350423_2.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (8, 'https://www.voursa.com/produitsedr/produit_bgph/350423_3.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (9, 'https://www.voursa.com/produitsedr/produit_bgph/349841_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (9, 'https://www.voursa.com/produitsedr/produit_bgph/349841_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (10, 'https://www.voursa.com/produitsedr/produit_bgph/349219_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (11, 'https://www.voursa.com/produitsedr/produit_bgph/350192_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (11, 'https://www.voursa.com/produitsedr/produit_bgph/350192_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (11, 'https://www.voursa.com/produitsedr/produit_bgph/350192_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (11, 'https://www.voursa.com/produitsedr/produit_bgph/350192_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (12, 'https://www.voursa.com/produitsedr/produit_bgph/346757_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (12, 'https://www.voursa.com/produitsedr/produit_bgph/346757_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (13, 'https://www.voursa.com/produitsedr/produit_bgph/347298_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (13, 'https://www.voursa.com/produitsedr/produit_bgph/347298_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (13, 'https://www.voursa.com/produitsedr/produit_bgph/347298_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (14, 'https://www.voursa.com/produitsedr/produit_bgph/324656_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (14, 'https://www.voursa.com/produitsedr/produit_bgph/324656_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (14, 'https://www.voursa.com/produitsedr/produit_bgph/324656_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (14, 'https://www.voursa.com/produitsedr/produit_bgph/324656_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (14, 'https://www.voursa.com/produitsedr/produit_bgph/324656_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (15, 'https://www.voursa.com/produitsedr/produit_bgph/346940_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (16, 'https://www.voursa.com/produitsedr/produit_bgph/243588_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (17, 'https://www.voursa.com/produitsedr/produit_bgph/349956_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (18, 'https://www.voursa.com/produitsedr/produit_bgph/349294_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (19, 'https://www.voursa.com/produitsedr/produit_bgph/346454_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (20, 'https://www.voursa.com/produitsedr/produit_bgph/350012_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (20, 'https://www.voursa.com/produitsedr/produit_bgph/350012_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (20, 'https://www.voursa.com/produitsedr/produit_bgph/350012_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (21, 'https://www.voursa.com/produitsedr/produit_bgph/349331_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (22, 'https://www.voursa.com/produitsedr/produit_bgph/349111_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (23, 'https://www.voursa.com/produitsedr/produit_bgph/350074_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (24, 'https://www.voursa.com/produitsedr/produit_bgph/345665_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (24, 'https://www.voursa.com/produitsedr/produit_bgph/345665_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (24, 'https://www.voursa.com/produitsedr/produit_bgph/345665_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (25, 'https://www.voursa.com/produitsedr/produit_bgph/335171_2.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (25, 'https://www.voursa.com/produitsedr/produit_bgph/335171_3.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (25, 'https://www.voursa.com/produitsedr/produit_bgph/335171_4.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (25, 'https://www.voursa.com/produitsedr/produit_bgph/335171_5.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (25, 'https://www.voursa.com/produitsedr/produit_bgph/335171_6.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (26, 'https://www.voursa.com/produitsedr/produit_bgph/347907_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (26, 'https://www.voursa.com/produitsedr/produit_bgph/347907_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (26, 'https://www.voursa.com/produitsedr/produit_bgph/347907_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (26, 'https://www.voursa.com/produitsedr/produit_bgph/347907_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (26, 'https://www.voursa.com/produitsedr/produit_bgph/347907_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (27, 'https://www.voursa.com/produitsedr/produit_bgph/349163_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (28, 'https://www.voursa.com/produitsedr/produit_bgph/349199_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (28, 'https://www.voursa.com/produitsedr/produit_bgph/349199_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (29, 'https://www.voursa.com/produitsedr/produit_bgph/346992_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (29, 'https://www.voursa.com/produitsedr/produit_bgph/346992_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (29, 'https://www.voursa.com/produitsedr/produit_bgph/346992_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (30, 'https://www.voursa.com/produitsedr/produit_bgph/349230_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (30, 'https://www.voursa.com/produitsedr/produit_bgph/349230_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (30, 'https://www.voursa.com/produitsedr/produit_bgph/349230_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (30, 'https://www.voursa.com/produitsedr/produit_bgph/349230_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (31, 'https://www.voursa.com/produitsedr/produit_bgph/346550_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (31, 'https://www.voursa.com/produitsedr/produit_bgph/346550_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (31, 'https://www.voursa.com/produitsedr/produit_bgph/346550_4.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (31, 'https://www.voursa.com/produitsedr/produit_bgph/346550_5.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (31, 'https://www.voursa.com/produitsedr/produit_bgph/346550_6.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (32, 'https://www.voursa.com/produitsedr/produit_bgph/345512_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (32, 'https://www.voursa.com/produitsedr/produit_bgph/345512_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (32, 'https://www.voursa.com/produitsedr/produit_bgph/345512_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (32, 'https://www.voursa.com/produitsedr/produit_bgph/345512_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (32, 'https://www.voursa.com/produitsedr/produit_bgph/345512_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (33, 'https://www.voursa.com/produitsedr/produit_bgph/349385_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (33, 'https://www.voursa.com/produitsedr/produit_bgph/349385_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (34, 'https://www.voursa.com/produitsedr/produit_bgph/349392_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (35, 'https://www.voursa.com/produitsedr/produit_bgph/348553_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (35, 'https://www.voursa.com/produitsedr/produit_bgph/348553_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (35, 'https://www.voursa.com/produitsedr/produit_bgph/348553_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (35, 'https://www.voursa.com/produitsedr/produit_bgph/348553_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (35, 'https://www.voursa.com/produitsedr/produit_bgph/348553_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (36, 'https://www.voursa.com/produitsedr/produit_bgph/348848_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (36, 'https://www.voursa.com/produitsedr/produit_bgph/348848_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (36, 'https://www.voursa.com/produitsedr/produit_bgph/348848_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (36, 'https://www.voursa.com/produitsedr/produit_bgph/348848_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (36, 'https://www.voursa.com/produitsedr/produit_bgph/348848_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (37, 'https://www.voursa.com/produitsedr/produit_bgph/347194_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (37, 'https://www.voursa.com/produitsedr/produit_bgph/347194_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (37, 'https://www.voursa.com/produitsedr/produit_bgph/347194_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (37, 'https://www.voursa.com/produitsedr/produit_bgph/347194_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (37, 'https://www.voursa.com/produitsedr/produit_bgph/347194_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (38, 'https://www.voursa.com/produitsedr/produit_bgph/347922_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (38, 'https://www.voursa.com/produitsedr/produit_bgph/347922_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (38, 'https://www.voursa.com/produitsedr/produit_bgph/347922_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (39, 'https://www.voursa.com/produitsedr/produit_bgph/348069_2.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (39, 'https://www.voursa.com/produitsedr/produit_bgph/348069_3.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (39, 'https://www.voursa.com/produitsedr/produit_bgph/348069_4.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (39, 'https://www.voursa.com/produitsedr/produit_bgph/348069_5.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (39, 'https://www.voursa.com/produitsedr/produit_bgph/348069_6.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (40, 'https://www.voursa.com/produitsedr/produit_bgph/349070_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (41, 'https://www.voursa.com/produitsedr/produit_bgph/348730_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (42, 'https://www.voursa.com/produitsedr/produit_bgph/348840_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (43, 'https://www.voursa.com/produitsedr/produit_bgph/346342_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (43, 'https://www.voursa.com/produitsedr/produit_bgph/346342_3.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (43, 'https://www.voursa.com/produitsedr/produit_bgph/346342_4.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (43, 'https://www.voursa.com/produitsedr/produit_bgph/346342_5.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (43, 'https://www.voursa.com/produitsedr/produit_bgph/346342_6.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (44, 'https://www.voursa.com/produitsedr/produit_bgph/348788_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (44, 'https://www.voursa.com/produitsedr/produit_bgph/348788_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (44, 'https://www.voursa.com/produitsedr/produit_bgph/348788_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (44, 'https://www.voursa.com/produitsedr/produit_bgph/348788_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (45, 'https://www.voursa.com/produitsedr/produit_bgph/348244_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (46, 'https://www.voursa.com/produitsedr/produit_bgph/348352_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (47, 'https://www.voursa.com/produitsedr/produit_bgph/346951_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (47, 'https://www.voursa.com/produitsedr/produit_bgph/346951_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (48, 'https://www.voursa.com/produitsedr/produit_bgph/347679_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_2.jpg', FALSE, 2, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_3.jpg', FALSE, 3, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_4.jpg', FALSE, 4, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_5.jpg', FALSE, 5, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (49, 'https://www.voursa.com/produitsedr/produit_bgph/347698_6.jpg', FALSE, 6, CURRENT_TIMESTAMP);


INSERT INTO trn_automobile_ad_images (ad_id, image_url, is_primary, order_number, upload_datetime)
VALUES (50, 'https://www.voursa.com/produitsedr/produit_bgph/346901_pbp.jpg', TRUE, 1, CURRENT_TIMESTAMP);

INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (1, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (1, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (1, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (1, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (1, 5, NULL, '45322', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (2, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (2, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (2, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (2, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (2, 5, NULL, '343542', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (3, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (3, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (3, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (3, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (3, 5, NULL, '34000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (4, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (4, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (4, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (4, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (4, 5, NULL, '78888', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (5, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (5, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (5, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (5, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (5, 5, NULL, '78888', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (6, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (6, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (6, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (6, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (6, 5, NULL, '325555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (7, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (7, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (7, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (7, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (7, 5, NULL, '45647', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (8, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (8, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (8, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (8, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (8, 5, NULL, '34575', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (9, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (9, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (9, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (9, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (9, 5, NULL, '43755', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (10, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (10, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (10, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (10, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (10, 5, NULL, '13333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (11, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (11, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (11, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (11, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (11, 5, NULL, '234333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (12, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (12, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (12, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (12, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (12, 5, NULL, '180000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (13, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (13, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (13, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (13, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (13, 5, NULL, '986444', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (14, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (14, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (14, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (14, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (14, 5, NULL, '986444', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (15, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (15, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (15, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (15, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (15, 5, NULL, '34575', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (16, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (16, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (16, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (16, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (16, 5, NULL, '54555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (17, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (17, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (17, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (17, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (17, 5, NULL, '35555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (18, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (18, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (18, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (18, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (18, 5, NULL, '13333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (19, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (19, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (19, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (19, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (19, 5, NULL, '35555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (20, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (20, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (20, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (20, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (20, 5, NULL, '78888', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (21, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (21, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (21, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (21, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (21, 5, NULL, '45322', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (22, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (22, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (22, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (22, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (22, 5, NULL, '34575', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (23, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (23, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (23, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (23, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (23, 5, NULL, '13333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (24, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (24, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (24, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (24, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (24, 5, NULL, '120000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (25, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (25, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (25, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (25, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (25, 5, NULL, '234333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (26, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (26, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (26, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (26, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (26, 5, NULL, '34575', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (27, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (27, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (27, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (27, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (27, 5, NULL, '13333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (28, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (28, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (28, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (28, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (28, 5, NULL, '12111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (29, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (29, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (29, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (29, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (29, 5, NULL, '120000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (30, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (30, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (30, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (30, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (30, 5, NULL, '986444', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (31, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (31, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (31, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (31, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (31, 5, NULL, '325555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (32, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (32, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (32, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (32, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (32, 5, NULL, '234333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (33, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (33, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (33, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (33, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (33, 5, NULL, '150000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (34, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (34, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (34, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (34, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (34, 5, NULL, '325555', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (35, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (35, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (35, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (35, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (35, 5, NULL, '234333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (36, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (36, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (36, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (36, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (36, 5, NULL, '986444', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (37, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (37, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (37, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (37, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (37, 5, NULL, '234333', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (38, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (38, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (38, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (38, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (38, 5, NULL, '12334', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (39, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (39, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (39, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (39, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (39, 5, NULL, '34575', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (40, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (40, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (40, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (40, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (40, 5, NULL, '120000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (41, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (41, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (41, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (41, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (41, 5, NULL, '43755', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (42, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (42, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (42, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (42, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (42, 5, NULL, '180000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (43, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (43, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (43, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (43, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (43, 5, NULL, '120000', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (44, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (44, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (44, 3, 10, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (44, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (44, 5, NULL, '564334', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (45, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (45, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (45, 3, 7, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (45, 4, 5, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (45, 5, NULL, '986444', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (46, 1, 1, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (46, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (46, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (46, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (46, 5, NULL, '78888', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (47, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (47, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (47, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (47, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (47, 5, NULL, '12111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (48, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (48, 2, 3, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (48, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (48, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (48, 5, NULL, '564334', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (49, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (49, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (49, 3, 9, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (49, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (49, 5, NULL, '45647', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (50, 1, 2, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (50, 2, 4, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (50, 3, 8, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (50, 4, 6, NULL, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trn_automobile_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value, create_datetime, update_datetime) VALUES (50, 5, NULL, '78888', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO trn_sponsored_ads (module_id, ad_id, amount_paid, sponsored_until, user_id, is_active)
VALUES (2, 2, 250.00, CURRENT_TIMESTAMP + INTERVAL '60 days', 2, TRUE),
       (3, 2, 150.00, CURRENT_TIMESTAMP + INTERVAL '20 days', 1, TRUE),
       (5, 2, 250.00, CURRENT_TIMESTAMP + INTERVAL '60 days', 2, TRUE),
       (4, 1, 250.00, CURRENT_TIMESTAMP + INTERVAL '60 days', 2, TRUE);


INSERT INTO cfg_realestate_categories (module_id, category_key)
VALUES (3, 'RESIDENTIAL_CATEGORY_KEY'),
       (3, 'COMMERCIAL_CATEGORY_KEY');


INSERT INTO cfg_real_estate_attributes (category_id, att_key, is_multi_choice, is_required, is_feature)
VALUES (1, 'ROOMS_ATTRIBUTE_KEY', FALSE, TRUE, false),
       (1, 'BATHROOMS_ATTRIBUTE_KEY', FALSE, TRUE, false),
       (1, 'BALCONIES_ATTRIBUTE_KEY', FALSE, FALSE, false),
       (1, 'HALLS_ATTRIBUTE_KEY', FALSE, FALSE, false),
       (1, 'SECURITY_CAMERA_FEATURE', FALSE, FALSE, true),
       (1, 'FURNISHED_FEATURE', FALSE, FALSE, true),
       (1, 'GARAGE_FEATURE', FALSE, FALSE, true),
       (1, 'RENT_TYPE_ATTRIBUTE', TRUE, FALSE, false);

INSERT INTO cfg_realestate_options (att_id, att_option_key)
VALUES (8, 'HOURLY_RENT_OPTION'),
       (8, 'DAILY_RENT_OPTION'),
       (8, 'WEEKLY_RENT_OPTION'),
       (8, 'MONTHLY_RENT_OPTION'),
       (8, 'YEARLY_RENT_OPTION');

INSERT INTO trn_real_estate_ads (title, description, price, user_id, is_in_review, is_live, is_archived,
                                 review_start_datetime,
                                 approved_datetime, archived_datetime, live_datetime, last_update_datetime, area_size,
                                 closet_landmark, street_size, has_land_title, is_on_corner, latitude, longitude,
                                 city_id, is_for_rent, is_for_sale, slug, category_id, submitted, is_sold

INSERT INTO trn_realestate_ad_attributes (ad_id, att_id, option_id, custom_value, has_custom_value)
VALUES (1, 1, NULL, '2', TRUE),
       (2, 1, NULL, '4', TRUE),
       (3, 1, NULL, '5', TRUE),
       (4, 1, NULL, '1', TRUE),
       (1, 2, NULL, '3', TRUE),
       (2, 2, NULL, '4', TRUE),
       (3, 2, NULL, '7', TRUE),
       (4, 2, NULL, '8', TRUE),
       (1, 3, NULL, '2', TRUE),
       (2, 3, NULL, '1', TRUE),
       (3, 3, NULL, '6', TRUE),
       (4, 3, NULL, '2', TRUE);