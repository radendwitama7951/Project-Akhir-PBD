import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-kencan-detail',
  templateUrl: './kencan-detail.page.html',
  styleUrls: ['./kencan-detail.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class KencanDetailPage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public dataPasangan$!: Observable<PasanganInterface[]>;
  public selectedKencanId!: string;

  constructor(
    public _kencanService: KencanService,
    private activatedRoute: ActivatedRoute
  ) {
    this.selectedKencanId =
      this.activatedRoute.snapshot.paramMap.get('kencanId');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._kencanService.load();
  }
}
