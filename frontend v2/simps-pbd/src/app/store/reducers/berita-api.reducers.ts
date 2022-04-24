import {createReducer, on} from "@ngrx/store";

import {BeritaInterface} from "../interfaces/berita.interface";
import * as BeritaApiActions from 'src/app/store/actions/berita-api.actions'



const initialBeritaState: Array<BeritaInterface> = [];


const beritaApiReducer = createReducer(
  initialBeritaState,
  on(BeritaApiActions.loadBerita, (state) => ())
);
