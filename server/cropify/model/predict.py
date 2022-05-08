import joblib, os
import numpy as np
import pandas as pd


def predict(season, crop, district, area, year=2022):
    rfr = joblib.load(os.path.join(os.getcwd(), 'cropify', 'model', './rfr.sav'))
    x_test = pd.read_csv(os.path.join(os.getcwd(), 'cropify', 'model', 'x_test_sample.csv'))
    fields = x_test['Field']
    crop = crop.capitalize()
    district = district.upper()
    for i in fields:
        if crop in i:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('Crop'), 'Value'] = 1.0
        else:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('Crop'), 'Value'] = 0.0
        if season in i:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('Season'), 'Value'] = 1.0
        else:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('Season'), 'Value'] = 0.0
        if district in i:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('District_Name'), 'Value'] = 1.0
        else:
            x_test.loc[x_test['Field'] == i & x_test['Field'].str.startswith('District_Name'), 'Value'] = 0.0
    x_test.loc[x_test['Field'] == 'Area', 'Value'] = area
    x_test.loc[x_test['Field'] == 'Year', 'Value'] = year
    rf_predict = rfr.predict(x_test)
    print(rf_predict)
    return rf_predict