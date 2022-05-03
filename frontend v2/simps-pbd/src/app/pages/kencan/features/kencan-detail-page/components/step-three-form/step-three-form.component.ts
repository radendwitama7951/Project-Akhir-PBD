import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { KencanService } from 'src/app/core/services/kencan.service';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.scss'],
})
export class StepThreeFormComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  @Input() selectedKencanId!: string;

  public selectedKencan$!: Observable<KencanInterface>;
  public loading$!: Observable<boolean>;
  public tempatKencanControl: FormControl = new FormControl(null);

  constructor(private _kencanService: KencanService) {
    this.loading$ = this._kencanService.loading$;
  }

  ngOnInit() {
    this.selectedKencan$ = this._kencanService.getByKey(this.selectedKencanId);

    this.subscriptions.add(
      this.selectedKencan$.subscribe((kencan: KencanInterface) => {
        this.tempatKencanControl = new FormControl(kencan.tempat, [
          Validators.required,
        ]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  gantiTempatKencan(): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );
    let updateTempatKencan: any = { tempat: this.tempatKencanControl.value };

    this.selectedKencan$.subscribe((kencan: KencanInterface) => {
      this._kencanService.update({ ...kencan, ...updateTempatKencan });
    });
  }
}
